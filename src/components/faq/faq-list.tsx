"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/site";

export function FaqList() {
  return (
    <Accordion type="single" collapsible className="rounded-2xl bg-white px-5 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)] sm:px-8">
      {faqs.map((item, index) => (
        <AccordionItem key={item.q} value={`q-${index}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
