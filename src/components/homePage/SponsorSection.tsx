import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import MyFooter from "../layout/Footer";

type SVGIcon = React.FC<React.SVGProps<SVGSVGElement>>;

const DiamondIcon: SVGIcon = props => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3 9l5-5h8l5 5-9 12L3 9z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M8 4l4 5 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TrophyIcon: SVGIcon = props => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M8 4h8v3a4 4 0 01-4 4 4 4 0 01-4-4V4z" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M9 20h6M12 11v4m7-11h-3v3a4 4 0 006-3zm-14 0h3v3a4 4 0 01-6-3z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const MedalIcon: SVGIcon = props => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 3l4 6 4-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BadgeIcon: SVGIcon = props => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3l2.6 3.8 4.4 1L17 12l.6 4.4-4.4-1L12 20l-1.2-4.6-4.4 1L7 12 5 7.8l4.4-1L12 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

interface Sponsor {
  name: string;
  logo: string;
  website?: string;
}

interface SponsorTier {
  title: string;
  sponsors: Sponsor[];
  chipClass: string;
  Icon: SVGIcon;
}

const sponsorTiers: SponsorTier[] = [
  {
    title: "Diamond Partners",
    sponsors: [{ name: "Galp", logo: "/images/sponsors/diamond/galp.webp" }],
    chipClass:
      "bg-gradient-to-r from-[#39a6ff] to-deepskyblue text-white border border-[#39a6ff]/30 shadow-[0_0_30px_rgba(57,166,255,0.25)]",
    Icon: DiamondIcon,
  },
  {
    title: "Gold Partners",
    sponsors: [
      { name: "Berner", logo: "/images/sponsors/gold/berner.webp" },
      { name: "MCG", logo: "/images/sponsors/gold/mcg.webp" },
    ],
    chipClass:
      "bg-gradient-to-r from-[#39a6ff]/90 to-deepskyblue/90 text-white border border-[#39a6ff]/25",
    Icon: TrophyIcon,
  },
  {
    title: "Silver Partners",
    sponsors: [
      { name: "Rat Rig", logo: "/images/sponsors/silver/ratrig.webp" },
      { name: "Lacovale", logo: "/images/sponsors/silver/lacovale.webp" },
    ],
    chipClass:
      "bg-gradient-to-r from-[#39a6ff]/70 to-deepskyblue/70 text-white border border-[#39a6ff]/20",
    Icon: MedalIcon,
  },
  {
    title: "Bronze Partners",
    sponsors: [
      { name: "Optimal", logo: "/images/sponsors/bronze/optimal.webp" },
      { name: "RMC", logo: "/images/sponsors/bronze/rmc.webp" },
    ],
    chipClass:
      "bg-gradient-to-r from-[#39a6ff]/50 to-deepskyblue/50 text-white border border-[#39a6ff]/15",
    Icon: BadgeIcon,
  },
];

export const SponsorsCarousel: React.FC = () => {
  const [currentTier, setCurrentTier] = useState(0);

  const nextTier = () => setCurrentTier(prev => (prev + 1) % sponsorTiers.length);
  const prevTier = () =>
    setCurrentTier(prev => (prev - 1 + sponsorTiers.length) % sponsorTiers.length);

  const currentSponsorTier = sponsorTiers[currentTier];
  const { Icon } = currentSponsorTier;
  const isSingle = currentSponsorTier.sponsors.length === 1;

  return (
    <section
      className="py-20 relative overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/home/aragon_background.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div
        className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: "12%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 80%, #000 98%, #000 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl 2xl:text-8xl md:text-6xl text-[#39a6ff]">
            <span className="text-[#39a6ff] text-glow">SPONSORS</span>
          </h2>
          <div className="w-18 h-1 bg-gradient-to-r from-electric to-electric-glow mx-auto mt-3" />
          <p className="text-blue-100/90 text-lg 2xl:text-4xl max-w-2xl mx-auto mt-4">
            Powering innovation and excellence in motorsport technology
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="flex justify-center mb-10 px-2">
          <div
            className="
              flex flex-wrap items-center justify-center
              gap-1.5 md:gap-2
              2xl:text-3xl
              bg-[#16263c]/60 backdrop-blur-md
              rounded-2xlf
              p-1.5 md:p-2
              border border-[#39a6ff]/15
              max-w-full overflow-hidden
            "
          >
            {sponsorTiers.map((tier, index) => (
              <button
                key={tier.title}
                onClick={() => setCurrentTier(index)}
                className={`
                  px-3 py-2 md:px-5 md:py-3
                  rounded-full
                  text-sm md:text-base
                  transition-all duration-300 font-medium tracking-tight
                  ${
                    currentTier === index
                      ? "bg-gradient-to-r from-[#39a6ff] to-deepskyblue text-white shadow-[0_0_20px_rgba(57,166,255,0.30)]"
                      : "text-blue-200/80 hover:text-white hover:bg-[#1b2b45]/70 border border-transparent hover:border-[#39a6ff]/30"
                  }
                `}
              >
                <span className="inline-flex items-center gap-1.5 md:gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
                    {index === 0 && <DiamondIcon className="w-4 h-4" />}
                    {index === 1 && <TrophyIcon className="w-4 h-4" />}
                    {index === 2 && <MedalIcon className="w-4 h-4" />}
                    {index === 3 && <BadgeIcon className="w-4 h-4" />}
                  </span>
                  {tier.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative">
          <Card className="p-8 bg-gradient-to-br from-[#111827]/90 via-[#1e293b]/85 to-[#0a192f]/85 backdrop-blur-md border border-[#39a6ff]/15 shadow-xl">
            {/* Tier Chip */}
            <div className="text-center mb-8">
              <div
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${currentSponsorTier.chipClass}`}
              >
                <Icon className="w-5 h-5 text-white/95" />
                <h3 className="text-xl 2xl:text-3xl">{currentSponsorTier.title}</h3>
              </div>
            </div>

            {/* Logos */}
            <div
              className={`grid ${
                isSingle ? "grid-cols-1 place-items-center" : "grid-cols-1 md:grid-cols-2"
              } gap-8`}
            >
              {currentSponsorTier.sponsors.map((sponsor, index) => (
                <div
                  key={`${currentTier}-${index}`}
                  className={`group cursor-pointer animate-slide-in ${
                    isSingle ? "w-full max-w-lg" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="p-6 h-full bg-white backdrop-blur-sm border border-[#39a6ff]/15 hover:border-[#39a6ff]/45 transition-all duration-300 hover:shadow-[0_0_25px_rgba(57,166,255,0.35)] hover:scale-[1.02]">
                    <div className="relative w-full h-24 sm:h-28 md:h-32">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority={index === 0}
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTier}
                className="border-[#39a6ff]/50 bg-blue text-blue-100 hover:border-[#39a6ff] hover:bg-[#39a6ff]/10 hover:shadow-[0_0_25px_rgba(57,166,255,0.35)] transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTier}
                className="border-[#39a6ff]/50 bg-blue text-blue-100 hover:border-[#39a6ff] hover:bg-[#39a6ff]/10 hover:shadow-[0_0_25px_rgba(57,166,255,0.35)] transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {sponsorTiers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTier(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTier === index
                  ? "bg-[#39a6ff] shadow-[0_0_15px_rgba(57,166,255,0.7)] scale-125"
                  : "bg-blue-300/30 hover:bg-blue-300/60"
              }`}
            />
          ))}
        </div>
      </div>
      <MyFooter />
    </section>
  );
};

export default SponsorsCarousel;
