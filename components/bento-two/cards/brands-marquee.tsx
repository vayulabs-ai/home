import { BeaconLogo } from "@/components/logos/beacon-logo";
import { EnclaveLogo } from "@/components/logos/enclave-logo";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

const clients = [
  {
    name: "Enclave",
    logo: <EnclaveLogo className="h-5 w-auto sm:h-6" />,
  },
  {
    name: "YourSizer",
    src: "/logos/clients/your-sizer.svg",
  },
  {
    name: "Allude",
    src: "/logos/clients/allude.png",
  },
  {
    name: "AgreedPro",
    src: "/logos/clients/pro.png",
  },
  {
    name: "Pillow Connect",
    src: "/logos/clients/pillow-connect.png",
  },
  {
    name: "Beacon",
    logo: <BeaconLogo className="h-6 w-auto" />,
  },
] as const;

export const BrandsMarquee = () => {
  return (
    <div className="relative flex h-full items-center">
      <Marquee className="flex h-full max-h-22 items-center">
        <MarqueeFade side="left" className="from-natural-white" />
        <MarqueeFade side="right" className="from-natural-white" />
        <MarqueeContent direction="right" className="h-full">
          {clients.map((client) => (
            <MarqueeItem
              className="shadow-card-md flex h-12 min-w-[120px] items-center justify-center rounded-lg px-4 py-2"
              key={client.name}
            >
              {"src" in client ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-6 w-auto max-w-[120px] object-contain"
                />
              ) : (
                client.logo
              )}
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};
