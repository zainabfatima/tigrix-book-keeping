"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { submitRequest } from "@/lib/submitRequest";

export function ContactForm() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (done) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [done]);
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onValid(data: ContactInput) {
    setPending(true);
    await submitRequest({ kind: "contact", data });
    setPending(false);
    setDone(true);
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white p-8 text-center shadow-[0_18px_50px_-28px_rgba(15,30,61,0.55)]"
      >
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          className="mx-auto grid size-16 place-items-center rounded-full bg-emerald text-navy"
        >
          <Check className="size-8" />
        </motion.div>
        <h2 className="mt-6 text-3xl font-bold">Thank you! We&apos;ll contact you within 1 business day.</h2>
        <p className="mt-3 text-slate-600">
          This demo did not send the message. It was printed in the browser console only.
        </p>
        <Button
          className="mt-6"
          type="button"
          onClick={() => {
            reset();
            setDone(false);
          }}
        >
          Send another note
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      className="space-y-4 rounded-2xl bg-white p-5 shadow-[0_18px_50px_-28px_rgba(15,30,61,0.55)] sm:p-8"
      noValidate
      onSubmit={handleSubmit(onValid)}
    >
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="contact-email">Email</Label>
        <Input id="contact-email" type="email" {...register("email")} />
        {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="contact-phone">Phone</Label>
        <Input id="contact-phone" type="tel" {...register("phone")} />
        {errors.phone ? <p className="text-sm text-red-600">{errors.phone.message}</p> : null}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" {...register("message")} />
        {errors.message ? <p className="text-sm text-red-600">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
