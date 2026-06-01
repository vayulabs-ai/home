import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { InfoCards, InfoCardsProps } from "@/components/comparison/info-cards";
import {
  ChipIcon,
  CubeIcon,
  DimondIcon,
  DocsIcon,
  DoorsOpenIcon,
  HandShakeIocn,
  HandsIcon,
  MessageIcon,
  MessageSend,
  NodeLines,
} from "@/components/icons/general";
import { ComparisonTabel, ComparisonData } from "@/components/comparison/comparison-tabel";
import { ComparisonAccordion } from "@/components/comparison/comparison-accordion";
import { Button } from "@/components/button";

const cardsData: InfoCardsProps[] = [
  {
    title: "Instant Onboarding",
    description:
      "Kick off in days, not months. We plug into your stack and roadmap without a long hiring cycle.",
    icon: <DoorsOpenIcon />,
  },
  {
    title: "High Impact, Low Overhead",
    description:
      "Senior design and engineering without agency bloat. One team, clear scope, faster shipping.",
    icon: <DocsIcon />,
  },
  {
    title: "Stress-Free Collaboration",
    description:
      "Transparent process, async-friendly updates, and a partner who owns delivery end to end.",
    icon: <HandsIcon />,
  },
];

const comparisonData: ComparisonData[] = [
  {
    title: "Approach",
    VayuLabs: "Design and engineering in sync",
    traditional: "Disconnected teams",
    icon: <DimondIcon />,
  },
  {
    title: "Process",
    VayuLabs: "Streamlined, transparent, and async",
    traditional: "Endless calls, vague timelines",
    icon: <ChipIcon />,
  },
  {
    title: "Design Philosophy",
    VayuLabs: "Modern, minimal, and purposeful",
    traditional: "Trend-based and cluttered",
    icon: <NodeLines />,
  },
  {
    title: "Development Stack",
    VayuLabs: "Next.js, React, and modern AI tooling",
    traditional: "Outdated stacks",
    icon: <CubeIcon />,
  },
  {
    title: "Communication",
    VayuLabs: "Clear async updates, no middlemen",
    traditional: "Multiple layers and account managers",
    icon: <MessageIcon />,
  },
  {
    title: "Deliverables",
    VayuLabs: "Shipped products and production-ready UI",
    traditional: "Static mockups and slide decks",
    icon: <MessageSend />,
  },
  {
    title: "Support",
    VayuLabs: "Long-term partnership mindset",
    traditional: "One-and-done projects",
    icon: <HandShakeIocn />,
  },
];

export const Comparison = () => {
  return (
    <section className="w-full">
      <Container className="flex flex-col gap-15 py-20 md:py-30">
        <div className="flex flex-col gap-6">
          <Header>VayuLabs VS Traditional Service Providers</Header>
          <div className="block lg:hidden">
            <Button text="Chat with team" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {/* for desktop only */}
          <div className="bg-natural-white hidden w-full rounded-3xl lg:block">
            <ComparisonTabel cards={comparisonData} />
          </div>

          {/* for mobile and tablet */}
          <div className="block w-full lg:hidden">
            <ComparisonAccordion cards={comparisonData} />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {cardsData.map((item) => (
              <InfoCards key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

