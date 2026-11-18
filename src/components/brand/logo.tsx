import Image from "next/image";

import { cn } from "@/lib/utils";

const lockups = {
  light: "/brand/tigris-logo-on-dark.png",
  dark: "/brand/tigris-logo.png",
} as const;

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Image
      src={lockups[tone]}
      alt="Tigris Group LLC"
      width={756}
      height={241}
      priority
      className={cn("h-14 w-auto sm:h-16", className)}
    />
  );
}
