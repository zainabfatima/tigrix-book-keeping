import {
  Banknote,
  BookOpenCheck,
  Briefcase,
  Building,
  Calendar,
  CalendarCheck,
  ChartPie,
  FilePen,
  FileSpreadsheet,
  HardHat,
  House,
  Landmark,
  Layers,
  Lock,
  MapPin,
  Receipt,
  RefreshCw,
  Scale,
  ShoppingBag,
  Stethoscope,
  Store,
  Truck,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/config/site";

const icons: Record<IconName, LucideIcon> = {
  "calendar-check": CalendarCheck,
  calendar: Calendar,
  refresh: RefreshCw,
  "book-check": BookOpenCheck,
  landmark: Landmark,
  scale: Scale,
  receipt: Receipt,
  "hard-hat": HardHat,
  chart: ChartPie,
  layers: Layers,
  lock: Lock,
  "file-pen": FilePen,
  users: Users,
  banknote: Banknote,
  house: House,
  utensils: UtensilsCrossed,
  store: Store,
  truck: Truck,
  briefcase: Briefcase,
  bag: ShoppingBag,
  stethoscope: Stethoscope,
  building: Building,
  "map-pin": MapPin,
  spreadsheet: FileSpreadsheet,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Glyph = icons[name];
  return <Glyph className={className} aria-hidden="true" />;
}
