import type { ContactInput, ServiceRequestInput } from "@/lib/schemas";

export type Submission =
  | { kind: "service-request"; data: ServiceRequestInput }
  | { kind: "contact"; data: ContactInput };

/**
 * Demo-only submit handler.
 * TODO: Connect to Supabase. Insert `submission` from a server action or
 * route handler so the service role key never ships to the browser.
 * Suggested tables: `service_requests` and `contact_messages`.
 */
export async function submitRequest(submission: Submission) {
  console.log(submission);
  return { ok: true as const };
}
