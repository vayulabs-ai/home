import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialProps {
  theme: "light" | "dark";
  avatar: string;
  name: string;
  role: string;
  brand: React.ReactNode;
  message: string;
}

export const Testimonial = ({
  theme,
  avatar,
  name,
  role,
  brand,
  message,
}: TestimonialProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-xl border p-3",
        theme === "light"
          ? "border-natural-black/10"
          : "border-natural-white/10",
      )}
    >
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt="Avatar"
            width={32}
            height={32}
            className="size-8 rounded-full"
          />
          <span className="-tracking-xs text-muted-foreground text-sm leading-6.5 font-medium">
            {name}
            <span>{", "}</span>
            {role}
          </span>
        </div>
        <div className="flex size-5.5 shrink-0 items-center justify-center overflow-hidden">
          {brand}
        </div>
      </div>
      <div className="-tracking-xs text-sm leading-5 font-medium">
        {message}
      </div>
    </div>
  );
};

