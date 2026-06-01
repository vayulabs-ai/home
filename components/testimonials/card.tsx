import Image from "next/image";
import { forwardRef } from "react";

import { Testimonial } from "@/components/testimonials";
import { QuoteIcon } from "@/components/icons/general";

export const TestimonialsCard = forwardRef<HTMLDivElement, Testimonial>(function TestimonialsCard(
  { author, quote, brand },
  ref,
) {
  return (
    <div ref={ref} className="bg-natural-white shadow-card-lg flex min-h-full w-full shrink-0 flex-col items-start justify-start gap-12 overflow-hidden rounded-3xl px-8 pt-8 pb-6 md:w-147">
      <div className="flex w-full items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brand}
          alt="Brand Logo"
          className="h-8 max-h-10 w-auto max-w-[200px] object-contain object-left"
        />
        <QuoteIcon />
      </div>
      <div className="flex h-full flex-col items-start justify-between gap-8">
        <div className="flex flex-col items-start justify-start gap-6 self-stretch">
          <div className="text-natural-black text-lg leading-6 font-medium">
            {quote}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            className="size-12 rounded-full"
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
          />
          <div className="flex flex-col gap-0.5">
            <div className="text-base leading-6 font-medium">{author.name}</div>
            <div className="text-muted-foreground text-base leading-6 font-medium">
              {author.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

