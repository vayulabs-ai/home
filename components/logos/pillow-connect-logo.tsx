import { cn } from "@/lib/utils";

type PillowConnectLogoProps = {
  className?: string;
};

export const PillowConnectLogo = ({ className }: PillowConnectLogoProps) => {
  return (
    <div
      className={cn("flex h-10 items-center gap-2.5", className)}
      aria-label="Pillow Connect"
      role="img"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/clients/pillow-connect-icon.svg"
        alt=""
        width={178}
        height={148}
        className="h-8 w-auto shrink-0 md:h-9"
      />
      <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-[#01303f] md:text-xl">
        Pillow Connect
      </span>
    </div>
  );
};
