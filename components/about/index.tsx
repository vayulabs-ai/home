import Image from "next/image";
import { Container } from "@/components/container";
import { Testimonial } from "@/components/pricing/testimonial";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import Link from "next/link";
import { LinkedIn, XformerlyTwitter } from "@/components/icons/general";
import { cn } from "@/lib/utils";

const PORTFOLIO_URL = "https://shashankbhardwaj.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/shashank-bhardwaj-1a92b9213/";
const X_URL = "https://x.com/theghost1623";
const GITHUB_URL = "https://github.com/shashank1623";

const testimonialData = [
  {
    name: "Kerem",
    role: "Co-founder, YourSizer",
    message:
      "Working with Shashank has been a real privilege. Reliable under pressure and always builds things the right way.",
    avatar: "/avatar/avatar-3.webp",
    brandSrc: "/logos/clients/your-sizer.svg",
    brandAlt: "YourSizer",
  },
  {
    name: "Manthan Gupta",
    role: "Co-founder, Pillow Connect",
    message:
      "He nailed our hiring platform MVP with creative touches and strong execution. Top 10% of talent.",
    avatar: "/avatar/jonathan.webp",
    brandSrc: "/logos/clients/pillow-connect.png",
    brandAlt: "Pillow Connect",
  },
  {
    name: "Srinidhi Ranganath",
    role: "CEO, Citron AI",
    message:
      "Strong work ethic and dependability. His dedication was key to a smooth, successful integration.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    brandSrc: "/logos/clients/pro.png",
    brandAlt: "Citron AI",
  },
];

export const AboutSection = () => {
  return (
    <section className="bg-natural-black text-natural-white relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <div className="absolute top-71 -left-140 h-125.5 w-122 rounded-full bg-white blur-[214px]" />
          <div className="absolute top-0 -left-40 h-293 w-180 rounded-full bg-[#27251F] blur-[287px]" />
          <div className="absolute top-0 -right-100 h-293.75 w-180 rounded-full bg-[#27251F] blur-[287px]" />
          <div
            className={cn(
              "absolute top-10 right-52 h-141 w-197",
              "bg-[linear-gradient(to_right,#181816_1px,transparent_1px),linear-gradient(to_bottom,#181816_1px,transparent_1px)] bg-size-[44px_44px]",
              "mask-[radial-gradient(circle,black_10%,transparent_100%)]",
            )}
          />
        </div>
      </div>

      <Container className="relative z-20 flex w-full flex-col gap-20 pt-20 pb-30">
        <div className="-tracking-xl text-6xl leading-18 font-medium">
          The Founder&apos;s Desk
        </div>
        <div className="grid w-full grid-cols-1 justify-between gap-30 lg:grid-cols-5">
          <div className="relative lg:col-span-2">
            <Image
              src="/alex.png"
              alt="Shashank Bhardwaj"
              width={1200}
              height={1200}
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between gap-15 lg:col-span-3">
            <div className="flex flex-col gap-6">
              <div className="flex justify-end">
                <div className="flex items-center gap-5">
                  <Link href={X_URL} target="_blank" rel="noopener noreferrer">
                    <XformerlyTwitter className="text-muted-foreground hover:text-natural-white size-4 transition-colors" />
                  </Link>
                  <Link
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn className="text-muted-foreground hover:text-natural-white size-4 transition-colors" />
                  </Link>
                  <Link
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-natural-white text-xs font-medium transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
              <span className="-tracking-xs text-lg leading-6.5 font-medium">
                Hi,{" "}
                <Link
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  I&apos;m Shashank
                </Link>
                . I build full-stack and AI-backed products: RAG search, Voice
                AI, realtime UIs, and data-heavy dashboards. B.Tech in AI and
                Data Science. People call me a full-stack engineer; I prefer
                problem solver.
              </span>
              <span className="-tracking-xs text-lg leading-6.5 font-medium">
                I founded VayuLabs to help startups ship scalable web apps and
                AI workflows that stay simple for users. Recent work includes
                Allude, YourSizer, and AgreedPro.
              </span>
              <span className="-tracking-xs text-lg leading-6.5 font-medium">
                More on{" "}
                <Link
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  shashankbhardwaj.com
                </Link>
                , or connect on{" "}
                <Link
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  LinkedIn
                </Link>{" "}
                and{" "}
                <Link
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  X
                </Link>
                .
              </span>
            </div>
            <div>
              <Marquee
                className={cn(
                  "flex h-full max-h-22 items-center",
                  "mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
                )}
              >
                <MarqueeContent className="h-full">
                  {testimonialData.map((item) => (
                    <MarqueeItem key={item.name}>
                      <Testimonial
                        theme="dark"
                        avatar={item.avatar}
                        name={item.name}
                        role={item.role}
                        brand={
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.brandSrc}
                            alt={item.brandAlt}
                            className="size-full object-contain object-center"
                          />
                        }
                        message={item.message}
                      />
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
