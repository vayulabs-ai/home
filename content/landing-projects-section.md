# Landing Page — Projects Section

**Source:** `components/projects/index.tsx`
**Page:** Home (`app/page.tsx`) — rendered after Bento One, before Testimonials
**Section heading (visible):** Projects

---

## Project 1

| Field | Content |
|-------|---------|
| **Image** | `/assets/enclave-dashboard.png` |
| **Alt** | Enclave — Sovereign Company Brain |
| **Title** | Enclave — sovereign company brain |
| **Summary** | Sovereign AI for regulated teams: deploys inside your AWS account, connects Slack, Drive, GitHub, Confluence, and Jira, and delivers permission-aware, sourced answers without data leaving your perimeter. |
| **Category** | Next.js, AWS, RAG, PostgreSQL |
| **CTA** | View Project |

**Extended data:**

- **Client:** [Enclave](https://getenclave.ai)
- **Timeline:** 8 weeks
- **Deliverables:** Product site & positioning, Customer-VPC deployment model, Workplace integrations (Slack, Drive, GitHub, Confluence, Jira), Permission-aware search & Q&A, KMS / CloudTrail sovereignty narrative
- **Impact:** Built for regulated companies blocked by SaaS AI compliance — your data stays in your AWS VPC with customer-held keys, full audit logs, and no vendor training on company content. Alternative to 8–12 month internal RAG builds that stall in security review.

---

## Project 2

| Field | Content |
|-------|---------|
| **Image** | `/assets/yoursizer-app.png` |
| **Alt** | YourSizer — AI fashion sizing platform |
| **Title** | YourSizer — AI fit for fashion |
| **Summary** | An AI sizing assistant for fashion brands — product-page size recommendations, visual fit previews, and personalized guidance that helps shoppers buy with confidence. |
| **Category** | AI, Computer Vision, E-commerce |
| **CTA** | View Project |

**Extended data:**

- **Client:** [YourSizer](https://yoursizer.com)
- **Timeline:** 10 weeks
- **Deliverables:** Marketing site & product positioning, AI size recommendation engine, Visual fit experience, Store embed widget, Product & size analytics
- **Impact:** Helps brands reduce size-related returns and lift conversion with body-aware recommendations — not generic size charts. Embeds on product pages in a few lines of code.

---

## Project 3

| Field | Content |
|-------|---------|
| **Image** | `/assets/allude-dashboard.png` |
| **Alt** | Cloud Infrastructure Migration |
| **Title** | Cloud infra migration & DevOps |
| **Summary** | Migrated a legacy on-premise system to AWS with auto-scaling, CI/CD pipelines, and 99.9% uptime — at 40% lower infra cost. |
| **Category** | AWS, Docker, Kubernetes |
| **CTA** | View Project |

**Extended data:**

- **Client:** Mid-size SaaS company
- **Timeline:** 6 weeks
- **Deliverables:** AWS architecture, Terraform IaC, CI/CD pipeline, Monitoring stack, Disaster recovery setup
- **Impact:** Infra cost reduced 40%. Deployment time from 4 hours to 8 minutes. Zero downtime during migration.

---

## Project 4

| Field | Content |
|-------|---------|
| **Image** | `/assets/agreedpro-dashboard.png` |
| **Alt** | Scalable Examination Platform |
| **Title** | Online examination platform |
| **Summary** | A cloud-hosted CBT platform handling 50,000+ concurrent candidates with real-time scoring, anti-cheat monitoring, and instant results. |
| **Category** | React, Python, AWS, WebSocket |
| **CTA** | View Project |

**Extended data:**

- **Client:** Recruitment and assessment body
- **Timeline:** 10 weeks
- **Deliverables:** Candidate portal, Exam engine, Admin panel, Real-time proctoring, Result processing pipeline
- **Impact:** Conducted 12 examination cycles with zero downtime. Average result processing time: 4 seconds per candidate.

---

## Project 5

| Field | Content |
|-------|---------|
| **Image** | `/assets/project-5.webp` |
| **Alt** | Enterprise Data Dashboard |
| **Title** | Real-time analytics dashboard |
| **Summary** | A decision-support dashboard pulling from 8 data sources, giving leadership a single view of operations, revenue, and compliance. |
| **Category** | Next.js, D3.js, FastAPI |
| **CTA** | View Project |

**Extended data:**

- **Client:** Enterprise operations
- **Timeline:** 5 weeks
- **Deliverables:** Executive dashboard, Data pipeline, Role-based access, PDF report generation, Mobile view
- **Impact:** Replaced 6 separate spreadsheets. Leadership review meetings cut from 3 hours to 40 minutes.

---

## Project 6

| Field | Content |
|-------|---------|
| **Image** | `/assets/project-6.webp` |
| **Alt** | Mobile App for Field Operations |
| **Title** | Field operations mobile app |
| **Summary** | An offline-first Android app for field teams — GPS tracking, photo capture, form submissions, and auto-sync when connectivity returns. |
| **Category** | Flutter, Firebase, Node.js |
| **CTA** | View Project |

**Extended data:**

- **Client:** Infrastructure and logistics company
- **Timeline:** 7 weeks
- **Deliverables:** Android app, Offline storage engine, Admin web panel, Auto-sync queue, GPS route logging
- **Impact:** Field reporting accuracy improved from 60% to 95%. Data available in real-time instead of next-day manual entry.

---

## Layout notes

- Responsive bento-style grid (`grid-cols-14`)
- Card min/max height: `440px`
- Hover: dark overlay with blur; title, summary, CTA, and category animate in
- Same component reused on `/work` with header disabled (`disabelHeader`)