import type { Metadata } from "next";

import { AreaPage } from "@/components/areas/area-page";
import { areas } from "@/config/site";

const area = areas.detroit;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
};

export default function DetroitPage() {
  return <AreaPage area={area} />;
}
