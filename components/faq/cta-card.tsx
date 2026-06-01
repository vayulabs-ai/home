import { Button } from "@/components/button";

export const CTACard = () => {
  return (
    <div className="bg-natural-white flex w-full flex-col gap-8 rounded-3xl px-6 py-8 shadow-card-md lg:max-w-lg">
      <div className="flex flex-col gap-3">
        <span className="-tracking-sm text-2xl leading-8 font-medium">
          Need a fast-moving team to build your next product?
        </span>
        <span className="text-muted-foreground -tracking-xs text-base leading-6 font-medium">
          VayuLabs brings AI engineers, full-stack developers, and cloud
          architects, ready to ship from week one.
        </span>
      </div>
      <div>
        <Button text="Start a Project" />
      </div>
    </div>
  );
};
