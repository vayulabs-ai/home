"use client";

import { RoundedGridPattern } from "@/components/bento-one/cards/rounded-grid-pattern";
import { SlidingNumber } from "@/components/sliding-number";
import React, { useEffect, useState } from "react";

export const Metrics = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (value === 3) return;

    const interval = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 120);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="flex h-full flex-col justify-between gap-16 p-8">
      <div className="absolute inset-0">
        <RoundedGridPattern />
      </div>
      <div className="z-10 flex flex-col gap-3">
        <span className="-tracking-xl flex items-baseline text-[5rem] leading-20 font-medium sm:text-[6.25rem] sm:leading-25">
          <span className="text-natural-black">$</span>
          <SlidingNumber value={value} />
          <span className="text-natural-black">M+</span>
        </span>
        <span className="text-muted-foreground -tracking-xs text-lg leading-6.5 font-medium">
          USD worth of projects delivered
        </span>
      </div>
      <div className="z-10">
        <p className="-tracking-xs text-muted-foreground text-base leading-6">
          VayuLabs designs and builds production-ready web apps, dashboards, and
          AI products for founders. Design, engineering, and delivery in one
          team.
        </p>
      </div>
    </div>
  );
};
