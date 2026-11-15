"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  behindOptions,
  industryOptions,
  revenueOptions,
  services,
  softwareOptions,
  transactionOptions,
} from "@/config/site";
import { serviceRequestSchema, type ServiceRequestInput } from "@/lib/schemas";
import { submitRequest } from "@/lib/submitRequest";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, label: "Business" },
  { id: 2, label: "Services" },
  { id: 3, label: "Books" },
  { id: 4, label: "Review" },
] as const;

const stepFields: Record<number, (keyof ServiceRequestInput)[]> = {
  1: ["businessName", "contactName", "email", "phone", "city", "state", "industry"],
  2: ["services", "software"],
  3: ["behind", "transactions", "revenue", "startDate", "message"],
};

const selectClass =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-navy outline-none focus-visible:border-emerald focus-visible:ring-2 focus-visible:ring-emerald/40";

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-red-600">{message}</p>;
}

export function RequestForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);

  const form = useForm<ServiceRequestInput>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      industry: "",
      services: [],
      software: undefined,
      behind: undefined,
      transactions: undefined,
      revenue: undefined,
      startDate: "",
      message: "",
    },
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (done) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [done]);

  const selected = watch("services");
  const values = watch();

  async function goNext() {
    const ok = await trigger(stepFields[step]);
    if (ok) setStep((current) => Math.min(4, current + 1));
  }

  async function onValid(data: ServiceRequestInput) {
    setPending(true);
    await submitRequest({ kind: "service-request", data });
    setPending(false);
    setDone(true);
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white p-8 text-center shadow-[0_18px_50px_-28px_rgba(15,30,61,0.55)] sm:p-12"
      >
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="mx-auto grid size-16 place-items-center rounded-full bg-emerald text-navy"
        >
          <Check className="size-8" strokeWidth={2.5} />
        </motion.div>
        <h2 className="mt-6 text-3xl font-bold">Thank you! We&apos;ll contact you within 1 business day.</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          This is a demo form. Nothing was saved or emailed. Your answers were printed in the browser console so the submit function can be connected to Supabase later.
        </p>
        <Button
          className="mt-8"
          type="button"
          onClick={() => {
            reset();
            setStep(1);
            setDone(false);
          }}
        >
          Send another request
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      className="rounded-2xl bg-white p-5 shadow-[0_18px_50px_-28px_rgba(15,30,61,0.55)] sm:p-8"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        if (step < 4) {
          void goNext();
          return;
        }
        void handleSubmit(onValid)();
      }}
    >
      <div className="mb-6">
        <div className="mb-3 flex justify-between gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {steps.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cn("text-left", step === item.id && "text-navy", step > item.id && "text-emerald")}
              onClick={() => {
                if (item.id < step) setStep(item.id);
              }}
            >
              {item.id}. {item.label}
            </button>
          ))}
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
          <div
            className="h-full rounded-full bg-emerald transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
        <p className="sr-only" aria-live="polite">
          Step {step} of 4
        </p>
      </div>

      {step === 1 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="businessName">Business name</Label>
            <Input id="businessName" {...register("businessName")} />
            <ErrorText message={errors.businessName?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="contactName">Contact name</Label>
            <Input id="contactName" {...register("contactName")} />
            <ErrorText message={errors.contactName?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" autoComplete="email" {...register("email")} />
            <ErrorText message={errors.email?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
            <ErrorText message={errors.phone?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} />
            <ErrorText message={errors.city?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="state">State</Label>
            <Input id="state" {...register("state")} />
            <ErrorText message={errors.state?.message} />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="industry">Industry</Label>
            <select id="industry" className={selectClass} {...register("industry")}>
              <option value="">Select an industry</option>
              {industryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ErrorText message={errors.industry?.message} />
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-6">
          <fieldset>
            <legend className="text-sm font-medium text-navy">Services needed</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {services.map((service) => {
                const checked = selected.includes(service.id);
                return (
                  <label
                    key={service.id}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm",
                      checked ? "border-emerald bg-emerald/10" : "border-slate-200",
                    )}
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(value) => {
                        const next = value
                          ? [...selected, service.id]
                          : selected.filter((id) => id !== service.id);
                        setValue("services", next, { shouldValidate: true });
                      }}
                      aria-label={service.name}
                    />
                    <span>
                      <span className="font-semibold text-navy">{service.name}</span>
                      <span className="mt-0.5 block text-slate-600">{service.summary}</span>
                    </span>
                  </label>
                );
              })}
            </div>
            <ErrorText message={errors.services?.message} />
          </fieldset>
          <div className="space-y-1.5">
            <Label htmlFor="software">Software used</Label>
            <select id="software" className={selectClass} {...register("software")}>
              <option value="">Select software</option>
              {softwareOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ErrorText message={errors.software?.message} />
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="behind">How far behind</Label>
            <select id="behind" className={selectClass} {...register("behind")}>
              <option value="">Select a range</option>
              {behindOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ErrorText message={errors.behind?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="transactions">Monthly transactions</Label>
            <select id="transactions" className={selectClass} {...register("transactions")}>
              <option value="">Select a range</option>
              {transactionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ErrorText message={errors.transactions?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="revenue">Annual revenue</Label>
            <select id="revenue" className={selectClass} {...register("revenue")}>
              <option value="">Select a range</option>
              {revenueOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ErrorText message={errors.revenue?.message} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="startDate">Preferred start date</Label>
            <Input id="startDate" type="date" {...register("startDate")} />
            <ErrorText message={errors.startDate?.message} />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Jobs in progress, payroll, or anything else we should know." {...register("message")} />
            <ErrorText message={errors.message?.message} />
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          {[
            ["Business", values.businessName],
            ["Contact", values.contactName],
            ["Email", values.email],
            ["Phone", values.phone],
            ["City / State", `${values.city}, ${values.state}`],
            ["Industry", values.industry],
            ["Software", values.software],
            ["How far behind", values.behind],
            ["Monthly transactions", values.transactions],
            ["Revenue", values.revenue],
            ["Preferred start", values.startDate],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-canvas px-3 py-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
              <dd className="mt-1 font-medium text-navy">{value || "—"}</dd>
            </div>
          ))}
          <div className="rounded-xl bg-canvas px-3 py-2 sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Services</dt>
            <dd className="mt-1 font-medium text-navy">
              {selected
                .map((id) => services.find((service) => service.id === id)?.name)
                .filter(Boolean)
                .join(", ") || "—"}
            </dd>
          </div>
          <div className="rounded-xl bg-canvas px-3 py-2 sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Message</dt>
            <dd className="mt-1 font-medium text-navy">{values.message || "—"}</dd>
          </div>
        </dl>
      ) : null}

      <div className="mt-8 flex flex-wrap justify-between gap-3">
        <Button
          type="button"
          variant="outlineNavy"
          disabled={step === 1 || pending}
          onClick={() => setStep((current) => Math.max(1, current - 1))}
        >
          Back
        </Button>
        {step < 4 ? (
          <Button type="button" onClick={() => void goNext()}>
            Continue
          </Button>
        ) : (
          <Button type="submit" disabled={pending}>
            {pending ? "Sending…" : "Submit request"}
          </Button>
        )}
      </div>
    </form>
  );
}
