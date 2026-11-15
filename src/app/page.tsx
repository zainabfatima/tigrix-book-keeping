import type { Metadata } from "next";

import { HomePage } from "@/components/home/home-page";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Tigrix LLC | Bookkeeping for Construction & Every Business",
  },
  description: site.description,
};

export default function Page() {
  return <HomePage />;
}
