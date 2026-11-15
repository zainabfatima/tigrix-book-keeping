import { z } from "zod";

import {
  behindOptions,
  revenueOptions,
  softwareOptions,
  transactionOptions,
} from "@/config/site";

export const serviceRequestSchema = z.object({
  businessName: z.string().trim().min(2, "Enter your business name."),
  contactName: z.string().trim().min(2, "Enter a contact name."),
  email: z.string().trim().email("Enter a valid email."),
  phone: z.string().trim().min(7, "Enter a phone number."),
  city: z.string().trim().min(2, "Enter a city."),
  state: z.string().trim().min(2, "Enter a state."),
  industry: z.string().trim().min(1, "Choose an industry."),
  services: z.array(z.string()).min(1, "Select at least one service."),
  software: z.enum(softwareOptions, "Choose the software you use."),
  behind: z.enum(behindOptions, "Tell us how far behind the books are."),
  transactions: z.enum(transactionOptions, "Choose a monthly transaction range."),
  revenue: z.enum(revenueOptions, "Choose a revenue range."),
  startDate: z.string().min(1, "Choose a preferred start date."),
  message: z
    .string()
    .trim()
    .max(2000, "Keep this note under 2,000 characters."),
});

export type ServiceRequestInput = z.infer<typeof serviceRequestSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email."),
  phone: z.string().trim().min(7, "Enter a phone number."),
  message: z
    .string()
    .trim()
    .min(10, "Add a short note so we know how to help.")
    .max(2000, "Keep this note under 2,000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
