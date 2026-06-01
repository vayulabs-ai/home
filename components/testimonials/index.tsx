"use client";

import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { TestimonialsCard } from "@/components/testimonials/card";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  quote: string;
  brand: string;
}

const data: Testimonial[] = [
  {
    author: {
      name: "Kerem",
      title: "Co-founder, YourSizer",
      avatar: "/avatar/avatar-3.webp",
    },
    quote:
      "Working with Shashank has been a real privilege. He's careful, deep-thinking, reliable under pressure, and always builds things the right way. His communication and positive energy made the journey genuinely enjoyable.",
    brand: "/logos/clients/your-sizer.svg",
  },
  {
    author: {
      name: "Arif",
      title: "Co-founder, YourSizer",
      avatar: "/avatar/avatar-2.webp",
    },
    quote:
      "It's hard to see him go, but we respect his decision and appreciate how smooth the transition has been. Thank you for the late nights and belief you put into YourSizer. He's left a strong impact and will always be part of our story.",
    brand: "/logos/clients/your-sizer.svg",
  },
  {
    author: {
      name: "Srinidhi Ranganath",
      title: "CEO, Citron AI",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    quote:
      "Shashank brings strong work ethic, professionalism, and dependability to every task. During Zoho testing, he went above and beyond. His dedication and responsiveness were key to a smooth, successful integration.",
    brand: "/logos/clients/pro.png",
  },
  {
    author: {
      name: "Arun Venkatraman",
      title: "CTO, AgreedPro",
      avatar: "/avatar/avatar-4.webp",
    },
    quote:
      "Shashank is polite, dependable, and puts in the effort to get things done right. As he grows, a sharper business lens and LLM workflow optimization mindset will further align his work with product goals and partner impact.",
    brand: "/logos/clients/pro.png",
  },
  {
    author: {
      name: "Manthan Gupta",
      title: "Co-founder, Pillow Connect",
      avatar: "/avatar/jonathan.webp",
    },
    quote:
      "I hired Shashank to build our hiring platform MVP. He nailed it with creative touches, strong execution, and a great customer experience. His multitasking and cross-domain knowledge are rare. I'd put his work in the top 10% of talent because of his experience and expertise.",
    brand: "/logos/clients/pillow-connect.png",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDistance, setSlideDistance] = useState(0);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateSlideDistance = () => {
      if (!firstCardRef.current) {
        return;
      }

      const cardWidth = firstCardRef.current.getBoundingClientRect().width;
      setSlideDistance(cardWidth + 24);
    };

    updateSlideDistance();

    const resizeObserver = new ResizeObserver(updateSlideDistance);

    if (firstCardRef.current) {
      resizeObserver.observe(firstCardRef.current);
    }

    window.addEventListener("resize", updateSlideDistance);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSlideDistance);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % data.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full">
      <Container className="relative flex flex-col gap-15 py-20 md:py-30 lg:gap-20">
        <div className="flex flex-col items-center justify-between gap-8 md:items-start lg:flex-row lg:items-center">
          <Header className="text-center md:text-left">
            See Insights straight from our users
          </Header>
          <Button text="Chat with team" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="_overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(-${activeIndex * slideDistance}px, 0, 0)`,
              }}
            >
              {data.map((testimonial, index) => (
                <TestimonialsCard
                  key={index}
                  ref={index === 0 ? firstCardRef : undefined}
                  {...testimonial}
                />
              ))}
            </div>
          </div>
          {/* dots */}
          <div className="flex w-full items-center justify-center">
            <div className="bg-natural-white shadow-card-lg mx-auto flex h-fit w-fit items-center justify-center gap-3 rounded-full px-4 py-3">
              {data.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "size-2 cursor-pointer rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-heading"
                      : "bg-natural-black/15 hover:bg-natural-black/30",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

