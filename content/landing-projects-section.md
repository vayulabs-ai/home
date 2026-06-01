# Landing Page - Projects Section

**Source:** `components/projects/index.tsx`
**Page:** Home (`app/page.tsx`) - rendered after Bento One, before Testimonials
**Section heading (visible):** Projects

---

## Project 1

| Field | Content |
|-------|---------|
| **Image** | `/assets/enclave-dashboard.png` |
| **Alt** | Enclave Sovereign Company Brain |
| **Title** | Enclave sovereign company brain |
| **Summary** | Sovereign AI for regulated teams: deploys inside your AWS account, connects Slack, Drive, GitHub, Confluence, and Jira, and delivers permission-aware, sourced answers without data leaving your perimeter. |
| **Category** | Next.js, AWS, RAG, PostgreSQL |
| **CTA** | View Project |

**Extended data:**

- **Client:** [Enclave](https://getenclave.ai)
- **Timeline:** 8 weeks
- **Deliverables:** Product site & positioning, Customer-VPC deployment model, Workplace integrations (Slack, Drive, GitHub, Confluence, Jira), Permission-aware search & Q&A, KMS / CloudTrail sovereignty narrative
- **Impact:** Built for regulated companies blocked by SaaS AI compliance. Your data stays in your AWS VPC with customer-held keys, full audit logs, and no vendor training on company content. Alternative to 8-12 month internal RAG builds that stall in security review.

---

## Project 2

| Field | Content |
|-------|---------|
| **Image** | `/assets/yoursizer-app.png` |
| **Alt** | YourSizer AI fashion sizing platform |
| **Title** | YourSizer AI fit for fashion |
| **Summary** | An AI sizing assistant for fashion brands: product-page size recommendations, visual fit previews, and personalized guidance that helps shoppers buy with confidence. |
| **Category** | AI, Computer Vision, E-commerce |
| **CTA** | View Project |

**Extended data:**

- **Client:** [YourSizer](https://yoursizer.com)
- **Timeline:** 10 weeks
- **Deliverables:** Marketing site & product positioning, AI size recommendation engine, Visual fit experience, Store embed widget, Product & size analytics
- **Impact:** Helps brands reduce size-related returns and lift conversion with body-aware recommendations, not generic size charts. Embeds on product pages in a few lines of code.

---

## Project 3

| Field | Content |
|-------|---------|
| **Image** | `/assets/allude-dashboard.png` |
| **Alt** | Allude industrial knowledge AI |
| **Title** | Allude factory know-how AI |
| **Summary** | AI platform that turns shop-floor video into SOPs and powers contextual search. We improved RAG retrieval, built Voice AI end-to-end, and scaled video processing to a distributed cluster. |
| **Category** | RAG, Voice AI, GCP |
| **CTA** | View Project |

**Extended data:**

- **Client:** [Allude](https://www.allude.cc/)
- **Timeline:** 4 months
- **Deliverables:** RAG search retrieval pipeline, Voice AI infrastructure, Quality engine integration, Distributed video processing cluster, Google Cloud Spanner data layer
- **Impact:** RAG response accuracy up 40% with a more efficient retrieval pipeline. Voice interactions wired into Allude’s quality engine with conversational data in Spanner. Video pipeline moved from single-instance to parallel chunk processing for higher throughput.

---

## Project 4

| Field | Content |
|-------|---------|
| **Image** | `/assets/agreedpro-dashboard.png` |
| **Alt** | AgreedPro contract review dashboard |
| **Title** | AgreedPro AI contract review |
| **Summary** | AI-powered contract review against your playbook: clause-by-clause compliance, redline analysis, and a Microsoft Word plugin for live drafting workflows. |
| **Category** | Next.js, FastAPI, React, Stripe |
| **CTA** | View Project |

**Extended data:**

- **Client:** [AgreedPro](https://agreedpro.com/)
- **Timeline:** 4 months (May 2025 - Aug 2025)
- **Deliverables:** SaaS platform UI (Next.js), Stripe payment gateway integration, Microsoft Word plugin UI refactor, FastAPI backend performance optimization
- **Impact:** Checkout conversion up 15% and support tickets down 25% after Stripe integration. Word plugin engagement up 30% with pixel-perfect UI and major bug fixes. API response times down 40% with a more reliable FastAPI backend.

---

## Project 5

| Field | Content |
|-------|---------|
| **Image** | `/assets/beacon-dashboard.png` |
| **Alt** | Beacon AI lead engagement dashboard |
| **Title** | Beacon B2B lead generation platform |
| **Summary** | Your inbound growth engine: AI listening intelligence that finds high-opportunity conversations, surfaces relevant people, and powers authentic social selling without bot-risk engagement. |
| **Category** | Next.js, AI, Full Stack |
| **CTA** | View Project |

**Extended data:**

- **Client:** [Beacon](https://beacon.citronai.one/)
- **Timeline:** 12 weeks
- **Deliverables:** End-to-end product platform, AI opportunity and signal monitoring, Leads/conversations/insights dashboard, Contextual people search and discovery filters, Content strategy and engagement scoring, Marketing site and waitlist experience
- **Impact:** Shipped the full platform from landing to dashboard. Teams can discover high-intent conversations, build networks with granular search, and plan content from data-backed topic intelligence while staying authentic and ban-safe.

---

## Project 6

| Field | Content |
|-------|---------|
| **Image** | `/assets/pillow-connect-hero.png` |
| **Alt** | Pillow Connect AI gig marketplace |
| **Title** | Pillow Connect global talent platform |
| **Summary** | An AI-driven marketplace for gig and freelance work: hire without borders with talent matching, job discovery, scheduling, and AI interview flows. |
| **Category** | Next.js, AI, Product UI |
| **CTA** | View Project |

**Extended data:**

- **Client:** [Pillow Connect](https://www.pillow-connect.com/)
- **Timeline:** 8 weeks
- **Deliverables:** Marketing site and hero landing, AI talent matching product UI, Job post and discovery flows, Category and freelancer showcase, Waitlist and conversion experience
- **Impact:** Launched a clear product story for global, AI-powered hiring. Unified marketplace, matching, and interview positioning ahead of waitlist growth.

---

## Layout notes

- Responsive bento-style grid (`grid-cols-14`)
- Card min/max height: `440px`
- Hover: dark overlay with blur; title, summary, CTA, and category animate in
- Same component reused on `/work` with header disabled (`disabelHeader`)