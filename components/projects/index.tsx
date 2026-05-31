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
    alt: "Enclave — Sovereign Company Brain",
    width: 2400,
    height: 1564,
    className: "col-span-14 md:col-span-7 lg:col-span-9",
    imageClassName: "object-center",
    title: "Enclave — sovereign company brain",
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
      "Built for regulated companies blocked by SaaS AI compliance — data stays in your AWS VPC with customer-held keys and full audit logs. A deploy-in-weeks path vs. 8–12 month internal builds that die in security review.",
  },
  {
    src: "/assets/project-2.webp",
    alt: "YourSizer — AI fashion sizing platform",
    width: 1248,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-5",
    title: "YourSizer — AI fit for fashion",
    summary:
      "An AI sizing assistant for fashion brands — product-page size recommendations, visual fit previews, and personalized guidance that helps shoppers buy with confidence.",
    client: "YourSizer",
    category: "AI, Computer Vision, E-commerce",
    timeline: "10 weeks",
    deliverables: [
      "Marketing site & product positioning",
      "AI size recommendation engine",
      "Visual fit experience",
      "Store embed widget",
      "Product & size analytics",
    ],
    impact:
      "Helps brands reduce size-related returns and lift conversion with body-aware recommendations — not generic size charts. Embeds on product pages in a few lines of code.",
  },
  {
    src: "/assets/project-3.webp",
    alt: "Cloud Infrastructure Migration",
    width: 1824,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-7",
    title: "Cloud infra migration & DevOps",
    summary:
      "Migrated a legacy on-premise system to AWS with auto-scaling, CI/CD pipelines, and 99.9% uptime — at 40% lower infra cost.",
    client: "Mid-size SaaS company",
    category: "AWS, Docker, Kubernetes",
    timeline: "6 weeks",
    deliverables: [
      "AWS architecture",
      "Terraform IaC",
      "CI/CD pipeline",
      "Monitoring stack",
      "Disaster recovery setup",
    ],
    impact:
      "Infra cost reduced 40%. Deployment time from 4 hours to 8 minutes. Zero downtime during migration.",
  },
  {
    src: "/assets/project-4.webp",
    alt: "Scalable Examination Platform",
    width: 1824,
    height: 1320,
    className: "group relative col-span-14 md:col-span-7 lg:col-span-7",
    title: "Online examination platform",
    summary:
      "A cloud-hosted CBT platform handling 50,000+ concurrent candidates with real-time scoring, anti-cheat monitoring, and instant results.",
    client: "Recruitment and assessment body",
    category: "React, Python, AWS, WebSocket",
    timeline: "10 weeks",
    deliverables: [
      "Candidate portal",
      "Exam engine",
      "Admin panel",
      "Real-time proctoring",
      "Result processing pipeline",
    ],
    impact:
      "Conducted 12 examination cycles with zero downtime. Average result processing time: 4 seconds per candidate.",
  },
  {
    src: "/assets/project-5.webp",
    alt: "Enterprise Data Dashboard",
    width: 1248,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-5",
    title: "Real-time analytics dashboard",
    summary:
      "A decision-support dashboard pulling from 8 data sources, giving leadership a single view of operations, revenue, and compliance.",
    client: "Enterprise operations",
    category: "Next.js, D3.js, FastAPI",
    timeline: "5 weeks",
    deliverables: [
      "Executive dashboard",
      "Data pipeline",
      "Role-based access",
      "PDF report generation",
      "Mobile view",
    ],
    impact:
      "Replaced 6 separate spreadsheets. Leadership review meetings cut from 3 hours to 40 minutes.",
  },
  {
    src: "/assets/project-6.webp",
    alt: "Mobile App for Field Operations",
    width: 2400,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-9",
    title: "Field operations mobile app",
    summary:
      "An offline-first Android app for field teams — GPS tracking, photo capture, form submissions, and auto-sync when connectivity returns.",
    client: "Infrastructure and logistics company",
    category: "Flutter, Firebase, Node.js",
    timeline: "7 weeks",
    deliverables: [
      "Android app",
      "Offline storage engine",
      "Admin web panel",
      "Auto-sync queue",
      "GPS route logging",
    ],
    impact:
      "Field reporting accuracy improved from 60% to 95%. Data available in real-time instead of next-day manual entry.",
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
