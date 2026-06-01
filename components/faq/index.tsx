import React from "react";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { CTACard } from "@/components/faq/cta-card";
import {
  AccordionContent,
  AccordionTrigger,
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion";
import Link from "next/link";

const data = [
  {
    question: "What does VayuLabs actually do?",
    answer:
      "We build custom software, AI agents, cloud infrastructure, and government portals. From architecture to deployment to long-term maintenance, we handle the full lifecycle. Think of us as your external engineering team that ships.",
  },
  {
    question: "Do you work with government clients?",
    answer:
      "Yes. We are building toward government work and are currently in the registration process for Bihar, MSME certification, and GeM listing. We do not claim credentials we have not completed yet. If you have a public-sector requirement, reach out and we can discuss timelines, compliance, and how we can support your procurement process.",
  },
  {
    question: "What's a typical use case for your AI work?",
    answer:
      "Document verification pipelines, workflow automation, LLM-powered search and extraction, AI-assisted decision dashboards, and intelligent routing systems. Not chatbots. Real operational automation that replaces manual hours.",
  },
  {
    question: "Can you integrate with our existing stack?",
    answer:
      "Yes. We work with React, Next.js, Python, FastAPI, Node.js, AWS, Azure, PostgreSQL, MongoDB, and most modern stacks. If you have a legacy system, we can migrate incrementally without breaking production.",
  },
  {
    question: "How fast can you start?",
    answer:
      "Most projects kick off within 1 week of agreement. We run 2-week sprints with live demos at each cycle. You get a dedicated project dashboard. No waiting for weekly email updates.",
  },
  {
    question: "What's your typical project size?",
    answer:
      "We work across scopes, from focused quick builds to full-platform deliveries. Government contracts, startup MVPs, and enterprise integrations. No project too small to start, no system too complex to scale.",
  },
  {
    question: "Do you offer maintenance after delivery?",
    answer:
      "Yes. Every project includes free post-delivery maintenance for up to 4 to 5 weeks after handoff. After that window, ongoing support, fixes, and monitoring are chargeable. We can scope a paid maintenance plan if you need longer coverage.",
  },
  {
    question: "Where is VayuLabs based?",
    answer:
      "We are currently in the process of formal registration and setting up operations, with Patna, Bihar and Hyderabad, Telangana as our planned bases. We work remotely with clients across India and internationally today. In-person meetings can be arranged for kick-offs and client workshops as needed.",
  },
];

export const FAQ = () => {
  return (
    <section className="w-full">
      <Container className="grid grid-cols-1 gap-15 py-20 md:py-30 lg:grid-cols-2">
        <div className="flex flex-col gap-15 pt-8">
          <div className="flex flex-col gap-4">
            <Header>Frequently Asked Questions</Header>
            <div className="-tracking-xs text-base leading-6 font-medium md:text-nowrap">
              Have more doubts? Reach out to us at{" "}
              <Link
                href="mailto:hello@vayulabs.in"
                className="text-dusty-green underline underline-offset-3"
              >
                hello@vayulabs.in
              </Link>
            </div>
          </div>
          <CTACard />
        </div>
        <div className="h-full w-full">
          <Accordion defaultValue={[`${data[0].question}-0`]}>
            {data.map((item, index) => (
              <React.Fragment key={`${item.question}-${index}`}>
                <AccordionItem
                  value={`${item.question}-${index}`}
                  className="py-8"
                >
                  <AccordionTrigger className="-tracking-xs text-base leading-6 font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
                {data.length - 1 !== index && (
                  <div className="bg-natural-black/15 h-px w-full" />
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
