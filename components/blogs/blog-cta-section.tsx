import { Button } from "@/components/button";
import { Container } from "@/components/container";

export const BlogCtaSection = () => {
  return (
    <section>
      <Container className="flex items-center justify-center pt-30 pb-50">
        <div className="flex w-full max-w-200 flex-col gap-6">
          <span className="-tracking-sm text-3xl leading-10 font-medium">
            Production AI is not a chatbot on your homepage. It is a workflow
            your team trusts every day.
          </span>
          <span className="-tracking-xs text-muted-foreground text-base leading-6 font-medium">
            VayuLabs builds scoped automation: retrieval with permissions,
            voice and document pipelines with quality gates, and full-stack
            delivery inside your cloud when compliance matters.
          </span>
          <span className="-tracking-xs text-muted-foreground text-base leading-6 font-medium">
            If you are planning an AI feature, start with the job to be done.
            We help founders and regulated teams ship the whole system, not
            just a demo.
          </span>
          <div>
            <Button text="Start a Project" />
          </div>
        </div>
      </Container>
    </section>
  );
};
