import { cn } from "@/lib/utils";

type YourSizerLogoProps = {
  className?: string;
};

export const YourSizerLogo = ({ className }: YourSizerLogoProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logos/clients/your-sizer.svg"
      alt="YourSizer"
      width={1275}
      height={361}
      className={cn("h-8 w-auto md:h-9", className)}
    />
  );
};
