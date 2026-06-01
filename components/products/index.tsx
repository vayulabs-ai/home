import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { HoverCard, CardItem } from "@/components/products/hover-card";
import { EnclaveLogo } from "@/components/logos/enclave-logo";

const data: CardItem[] = [
  {
    logo: "/assets/trace-logo.png",
    name: "trace",
    description: "Find patterns. Live better.",
    badge: "Coming Soon",
    image: "/assets/trace-poster.png",
    imageClassName:
      "absolute inset-0 h-full w-full object-cover object-left-top",
    feature: [
      "Voice-first health tracking",
      "Personal health intelligence engine",
      "Daily actionable insights",
      "Doctor-ready health summaries",
      "Private, on-device by default",
    ],
  },
  {
    logoElement: <EnclaveLogo className="h-7 w-auto sm:h-8" />,
    name: "Enclave",
    description:
      "Sovereign AI for regulated teams. Permission-aware answers inside your AWS perimeter.",
    image: "/assets/enclave-dashboard.png",
    imageClassName: "absolute inset-0 h-full w-full object-cover object-top",
    feature: [
      "Deploys inside your AWS VPC",
      "Slack, Drive, GitHub, Confluence, Jira",
      "Permission-aware search and Q&A",
      "Customer-held keys and full audit logs",
    ],
  },
];

export const Products = () => {
  return (
    <section className="w-full">
      <Container className="flex w-full flex-col gap-20 py-20 md:py-30">
        <Header>Always Pushing the Boundaries in Tech</Header>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {data.map((item, index) => (
            <HoverCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
