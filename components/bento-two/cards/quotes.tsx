import { GridPattenDepth } from "@/components/bento-two/cards/grid-patten-depth";

export const Quotes = () => {
  return (
    <div className="relative flex h-full flex-col justify-end gap-6 p-8">
      <div className="absolute inset-0">
        <div className="-mt-11 ml-20">
          <GridPattenDepth />
        </div>
      </div>
      <div className="z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/clients/pro.png"
          alt="Citron AI"
          className="h-8 w-auto max-w-[160px] object-contain object-left"
        />
      </div>
      <div className="-tracking-xs text-muted-foreground z-10 text-base leading-6 font-medium">
        &ldquo;Shashank brings strong work ethic, professionalism, and
        dependability to every task. During Zoho testing, he went above and
        beyond. His dedication and responsiveness were key to a smooth,
        successful integration.&rdquo;
      </div>
      <div className="z-10 flex items-center gap-2">
        <span className="-tracking-xs text-base leading-6 font-medium">
          Srinidhi Ranganath
        </span>
        <span className="-tracking-xs text-muted-foreground text-base leading-6 font-medium">
          CEO, Citron AI
        </span>
      </div>
    </div>
  );
};

