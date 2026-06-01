import { cn } from "@/lib/utils";

type AlludeLogoProps = {
  className?: string;
};

export const AlludeLogo = ({ className }: AlludeLogoProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logos/clients/allude.png"
      alt="Allude"
      width={625}
      height={269}
      className={cn("h-7 w-auto md:h-8", className)}
    />
  );
};
