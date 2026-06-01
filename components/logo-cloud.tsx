"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { BeaconLogo } from "@/components/logos/beacon-logo";
import { EnclaveLogo } from "@/components/logos/enclave-logo";
import { AlludeLogo } from "@/components/logos/allude-logo";
import { PillowConnectLogo } from "@/components/logos/pillow-connect-logo";
import { YourSizerLogo } from "@/components/logos/your-sizer-logo";
import { cn } from "@/lib/utils";

const clientLogos = [
  {
    id: "enclave",
    name: "Enclave",
    element: <EnclaveLogo />,
  },
  {
    id: "your-sizer",
    name: "YourSizer",
    element: <YourSizerLogo />,
  },
  {
    id: "allude",
    name: "Allude",
    element: <AlludeLogo />,
  },
  {
    id: "pro",
    name: "Pro",
    src: "/logos/clients/pro.png",
    width: 222,
    height: 53,
  },
  {
    id: "pillow-connect",
    name: "Pillow Connect",
    element: <PillowConnectLogo />,
  },
  {
    id: "beacon",
    name: "Beacon",
    element: <BeaconLogo />,
  },
] as const;

export const LogoCloud = () => {
  return (
    <Container className="max-w-7xl py-20">
      <h2 className="font-dm-mono -tracking-xs text-muted-foreground text-center text-sm leading-4 font-normal uppercase">
        Trusted by fast-growing startups
      </h2>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-10 px-2 sm:gap-x-12 lg:flex-nowrap lg:justify-between lg:gap-x-0 lg:px-6">
        {clientLogos.map((logo) => (
          <div
            key={logo.id}
            className="group flex h-10 shrink-0 items-center justify-center px-1 transition-all duration-300 hover:scale-105"
          >
            {"element" in logo ? (
              logo.element
            ) : (
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                draggable={false}
                className={cn(
                  "h-full w-auto max-w-[140px] object-contain md:max-w-[180px]",
                  logo.id === "pro" && "max-h-8 md:max-h-10",
                )}
              />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};
