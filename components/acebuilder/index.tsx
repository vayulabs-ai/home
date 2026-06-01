import { Container } from "@/components/container";
import {
  PaperClipIcon,
  PlusIcon,
  ThunderIcon,
  UpArrowIcon,
} from "@/components/icons/general";
import {
  AmazonWebServices,
  OpenAI,
  React,
  Supabase,
} from "@/components/icons/logo";
import { EnclaveLogo } from "@/components/logos/enclave-logo";
import { ChevronDown } from "lucide-react";

const clientLogos = [
  { src: "/logos/clients/your-sizer.svg", alt: "YourSizer", className: "h-6 w-auto" },
  { src: "/logos/clients/allude.png", alt: "Allude", className: "h-5 w-auto" },
  { src: "/logos/clients/pro.png", alt: "AgreedPro", className: "h-5 w-auto" },
  { src: "/logos/clients/pillow-connect.png", alt: "Pillow Connect", className: "h-5 w-auto" },
];

const stackIcons = [
  { Icon: React, label: "React" },
  { Icon: AmazonWebServices, label: "AWS" },
  { Icon: OpenAI, label: "OpenAI" },
  { Icon: Supabase, label: "Supabase" },
];

export const ProductsIntro = () => {
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center gap-15 pt-30 pb-20">
        <div className="flex w-full flex-col gap-12">
          <div className="flex flex-col items-center gap-6">
            <div className="bg-natural-white flex gap-0.5 rounded-full p-0.5 shadow-card-sm">
              <div className="text-natural-white bg-natural-black -tracking-sm rounded-full px-2 py-1.5 text-xs leading-3 font-medium">
                VayuLabs
              </div>
              <span className="px-2 py-1.5 text-xs leading-3 font-medium">
                Design, build, and ship from week one
              </span>
            </div>
            <h2 className="-tracking-xl text-center text-5xl leading-15 font-medium text-balance md:text-6xl md:leading-17">
              Products we build and ship
            </h2>
          </div>

          <div className="bg-natural-black relative mx-auto flex w-full max-w-225 flex-col gap-2.5 overflow-hidden rounded-3xl p-3">
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <div className="absolute top-90 left-0 h-7 w-248.5 origin-top-left -translate-y-1/2 rotate-[-23deg] rounded-full bg-primary/40 blur-[20px]" />
                <div className="absolute top-90 -left-20 h-7 w-248.5 origin-top-left -translate-y-1/2 rotate-[-23deg] rounded-full bg-primary/30 blur-2xl" />
              </div>
            </div>
            <div className="flex items-center gap-2 px-3">
              <ThunderIcon />
              <span className="text-sm leading-7 text-[#999999]">
                Tell us what you need built
              </span>
            </div>
            <div className="bg-natural-white text-natural-black z-10 flex min-h-50 flex-col justify-between rounded-2xl p-6">
              <span className="-tracking-xs text-base leading-7 text-[#999999]">
                Sovereign AI inside our VPC, with Slack and Drive integrations,
                permission-aware search, and audit-ready answers...
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <PlusIcon />
                  <div className="flex gap-1 rounded-lg bg-[#F0F0F0] py-1.5 pr-2 pl-3">
                    <span className="text-muted-foreground text-sm leading-5.5 font-medium">
                      Full-stack + AI
                    </span>
                    <ChevronDown className="text-muted-foreground size-3.5" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PaperClipIcon />
                  <div className="bg-natural-black flex size-10 items-center justify-center rounded-full">
                    <UpArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full max-w-200 flex-col items-center gap-6">
            <span className="text-muted-foreground -tracking-xs text-sm leading-4 font-medium uppercase">
              Trusted by founding teams
            </span>
            <div className="flex w-full flex-wrap items-center justify-center gap-8 md:justify-between">
              <EnclaveLogo className="h-6 w-auto sm:h-7" />
              {clientLogos.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.className}
                />
              ))}
            </div>
          </div>

          <div className="flex w-full max-w-140 flex-col items-center gap-5">
            <span className="text-muted-foreground -tracking-xs text-sm leading-4 font-medium uppercase">
              Stack we ship with
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {stackIcons.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2"
                  title={label}
                >
                  <div className="shadow-card-md flex size-12 items-center justify-center rounded-xl bg-white">
                    <Icon className="size-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/** @deprecated Use ProductsIntro */
export const Acebuilder = ProductsIntro;
