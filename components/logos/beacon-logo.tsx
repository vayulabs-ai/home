import { cn } from "@/lib/utils";

type BeaconLogoProps = {
  className?: string;
};

export const BeaconLogo = ({ className }: BeaconLogoProps) => {
  return (
    <svg
      viewBox="0 0 500 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Beacon"
      className={cn("h-10 w-auto", className)}
    >
      <defs>
        <linearGradient
          id="beacon_icon_gradient_outer"
          x1="-32"
          y1="-32"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient
          id="beacon_icon_gradient_inner"
          x1="20"
          y1="-20"
          x2="-20"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient
          id="beacon_text_gradient"
          x1="110"
          y1="0"
          x2="400"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <g transform="translate(60, 60)">
        <circle
          cx="0"
          cy="0"
          r="32"
          stroke="url(#beacon_icon_gradient_outer)"
          strokeWidth="8"
        />
        <circle
          cx="0"
          cy="0"
          r="20"
          stroke="url(#beacon_icon_gradient_inner)"
          strokeWidth="6"
        />
        <circle cx="0" cy="0" r="10" fill="#06B6D4" />
      </g>
      <text
        x="110"
        y="88"
        fontFamily="Arial, sans-serif"
        fontSize="80"
        fontWeight="bold"
        fill="url(#beacon_text_gradient)"
      >
        Beacon
      </text>
    </svg>
  );
};
