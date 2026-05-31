import { cn } from "@/lib/utils";

type VayulabsLogoSvgProps = {
  className?: string;
};

/** Vayulabs wordmark — exact SVG from brand assets (public/vayulabs-logo.svg). */
export const VayulabsLogoSvg = ({ className }: VayulabsLogoSvgProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/vayulabs-logo.svg"
      alt="Vayulabs"
      width={577}
      height={157}
      className={cn("h-8 w-auto", className)}
      decoding="async"
    />
  );
};
