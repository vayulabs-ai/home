"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

import { Container } from "@/components/container";
import { RightArrow } from "@/components/icons/general";
import { PageHeader } from "@/components/page-header";

type Project = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  title: string;
  summary: string;
  client: string;
  category: string;
  timeline: string;
  deliverables: string[];
  impact: string;
  imageClassName?: string;
};

const projects = [
  {
    src: "/assets/enclave-dashboard.png",
    alt: "Enclave Sovereign Company Brain",
    width: 2400,
    height: 1564,
    className: "col-span-14 md:col-span-7 lg:col-span-9",
    imageClassName: "object-center",
    title: "Enclave Sovereign Company Brain",
    summary:
      "Sovereign AI for regulated teams: deploys inside your AWS account, connects Slack, Drive, GitHub, Confluence, and Jira, and delivers permission-aware, sourced answers without data leaving your perimeter.",
    client: "Enclave",
    category: "Next.js, AWS, RAG, PostgreSQL",
    timeline: "8 weeks",
    deliverables: [
      "Product site & positioning",
      "Customer-VPC deployment model",
      "Workplace integrations",
      "Permission-aware search & Q&A",
      "KMS / CloudTrail sovereignty narrative",
    ],
    impact:
      "Built for regulated companies blocked by SaaS AI compliance. Data stays in your AWS VPC with customer-held keys and full audit logs. A deploy-in-weeks path vs. 8-12 month internal builds that die in security review.",
  },
  {
    src: "/assets/yoursizer-app.png",
    alt: "YourSizer AI fashion fit assistant",
    width: 966,
    height: 1024,
    className: "col-span-14 md:col-span-7 lg:col-span-5",
    imageClassName: "object-center",
    title: "YourSizer AI fit for fashion",
    summary:
      "An AI sizing assistant for fashion brands product-page size recommendations, visual fit previews, and personalized guidance that helps shoppers buy with confidence.",
    client: "YourSizer",
    category: "AI, WebGL, Image generation, E-commerce",
    timeline: "10 weeks",
    deliverables: [
      "Marketing site & product positioning",
      "AI size recommendation engine",
      "Visual fit experience",
      "Store embed widget",
      "Product & size analytics",
    ],
    impact:
      "Helps brands reduce size-related returns and lift conversion with body-aware recommendations, not generic size charts. Embeds on product pages in a few lines of code.",
  },
  {
    src: "/assets/allude-dashboard.png",
    alt: "Allude industrial knowledge AI",
    width: 1024,
    height: 682,
    className: "col-span-14 md:col-span-7 lg:col-span-7",
    imageClassName: "object-center",
    title: "Allude factory know-how AI",
    summary:
      "AI platform that turns shop-floor video into SOPs and powers contextual search. We improved RAG retrieval, built Voice AI end-to-end, and scaled video processing to a distributed cluster.",
    client: "Allude",
    category: "RAG, Voice AI, GCP",
    timeline: "4 months",
    deliverables: [
      "RAG search retrieval pipeline",
      "Voice AI infrastructure",
      "Quality engine integration",
      "Distributed video processing cluster",
      "Google Cloud Spanner data layer",
    ],
    impact:
      "RAG response accuracy up 40% with a more efficient retrieval pipeline. Voice interactions wired into Allude’s quality engine with conversational data in Spanner. Video pipeline moved from single-instance to parallel chunk processing for higher throughput.",
  },
  {
    src: "/assets/agreedpro-dashboard.png",
    alt: "AgreedPro contract review dashboard",
    width: 1024,
    height: 750,
    className: "group relative col-span-14 md:col-span-7 lg:col-span-7",
    imageClassName: "object-center",
    title: "AgreedPro AI contract review",
    summary:
      "AI-powered contract review against your playbook: clause-by-clause compliance, redline analysis, and a Microsoft Word plugin for live drafting workflows.",
    client: "AgreedPro",
    category: "Next.js, FastAPI, React, Stripe",
    timeline: "4 months",
    deliverables: [
      "SaaS platform UI (Next.js)",
      "Stripe payment gateway integration",
      "Microsoft Word plugin UI refactor",
      "FastAPI backend performance optimization",
    ],
    impact:
      "Checkout conversion up 15% and support tickets down 25% after Stripe integration. Word plugin engagement up 30% with pixel-perfect UI and major bug fixes. API response times down 40% with a more reliable FastAPI backend.",
  },
  {
    src: "/assets/beacon-dashboard.png",
    alt: "Beacon AI lead engagement dashboard",
    width: 969,
    height: 1024,
    className: "col-span-14 md:col-span-7 lg:col-span-5",
    imageClassName: "object-center",
    title: "Beacon B2B lead generation platform",
    summary:
      "Your inbound growth engine: AI listening intelligence that finds high-opportunity conversations, surfaces relevant people, and powers authentic social selling without bot-risk engagement.",
    client: "Beacon",
    category: "Next.js, AI, Full Stack",
    timeline: "12 weeks",
    deliverables: [
      "End-to-end product platform",
      "AI opportunity and signal monitoring",
      "Leads, conversations, and insights dashboard",
      "Contextual people search and discovery filters",
      "Content strategy and engagement scoring",
      "Marketing site and waitlist experience",
    ],
    impact:
      "Shipped the full platform from landing to dashboard. Teams can discover high-intent conversations, build networks with granular search, and plan content from data-backed topic intelligence while staying authentic and ban-safe.",
  },
  {
    src: "/assets/pillow-connect-hero.png",
    alt: "Pillow Connect AI gig marketplace",
    width: 1024,
    height: 562,
    className: "col-span-14 md:col-span-7 lg:col-span-9",
    imageClassName: "object-center",
    title: "Pillow Connect global talent platform",
    summary:
      "An AI-driven marketplace for gig and freelance work: hire without borders with talent matching, job discovery, scheduling, and AI interview flows.",
    client: "Pillow Connect",
    category: "Next.js, AI, Product UI",
    timeline: "8 weeks",
    deliverables: [
      "Marketing site and hero landing",
      "AI talent matching product UI",
      "Job post and discovery flows",
      "Category and freelancer showcase",
      "Waitlist and conversion experience",
    ],
    impact:
      "Launched a clear product story for global, AI-powered hiring. Unified marketplace, matching, and interview positioning ahead of waitlist growth.",
  },
] satisfies Project[];

const overlayVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const overlayItemVariants: Variants = {
  rest: { opacity: 0, y: 18 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export const Projects = ({
  disabelHeader = false,
}: {
  disabelHeader?: boolean;
}) => {
  return (
    <section className="w-full">
      <Container className="relative flex w-full flex-col gap-20 overflow-hidden pt-40 pb-20 md:pt-65 md:pb-30 lg:pt-80 lg:pb-30">
        {!disabelHeader && (
          <div>
            <PageHeader>Projects</PageHeader>
          </div>
        )}
        {/* grids */}
        <div
          className={cn(
            "z-10 grid grid-cols-14 gap-6",
            "[--card-height:440px]",
            "*:data-[slot='card']:max-h-(--card-height) *:data-[slot='card']:min-h-(--card-height) *:data-[slot='card']:overflow-hidden *:data-[slot='card']:rounded-3xl",
          )}
        >
          {projects.map((project) => (
            <MotionLink
              key={project.src}
              href="#"
              data-slot="card"
              initial="rest"
              animate="rest"
              whileHover="hover"
              className={cn("group relative block text-left", project.className)}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(min-width: 1024px) 68vw, 100vw"
                className={cn(
                  "rounded-3xl object-cover",
                  project.imageClassName ?? "object-center",
                )}
                priority
              />
              <motion.div
                variants={overlayVariants}
                className="bg-natural-black/50 absolute inset-0 flex flex-col justify-between rounded-3xl p-6 backdrop-blur-md md:p-8"
              >
                <motion.div variants={overlayItemVariants} className="space-y-2">
                  <div className="text-natural-white -tracking-sm text-2xl leading-8 font-medium">
                    {project.title}
                  </div>
                  <p className="text-natural-white/80 text-base leading-6 font-medium">
                    {project.summary}
                  </p>
                </motion.div>
                <motion.div
                  variants={overlayItemVariants}
                  className="flex w-full items-end justify-between gap-4"
                >
                  <div className="flex items-center gap-1">
                    <span className="text-natural-white tracking-xs text-sm leading-3.5 font-medium">
                      View Project
                    </span>
                    <RightArrow />
                  </div>
                  <span className="-tracking-xs text-natural-white/80 text-right text-sm leading-3.5 font-medium">
                    {project.category}
                  </span>
                </motion.div>
              </motion.div>
            </MotionLink>
          ))}
        </div>
      </Container>
    </section>
  );
};
