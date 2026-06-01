import { cn } from "@/lib/utils";

type PillowConnectLogoProps = {
  className?: string;
};

export const PillowConnectLogo = ({ className }: PillowConnectLogoProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logos/clients/pillow-connect.png"
      alt="Pillow Connect"
      width={785}
      height={134}
      className={cn("h-7 w-auto md:h-8", className)}
    />
  );
};
