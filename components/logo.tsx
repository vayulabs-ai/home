import { cn } from "@/lib/utils";
import Link from "next/link";
import { VayulabsLogoSvg } from "@/components/vayulabs-logo-svg";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      aria-label="Vayulabs home"
      className="inline-flex shrink-0 items-center"
    >
      <VayulabsLogoSvg className={className} />
    </Link>
  );
};
