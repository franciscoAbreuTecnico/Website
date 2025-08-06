import AboutSection from "../components/homePage/AboutSection";
import CompetitionsSection from "../components/homePage/CompetitionSection";
import HeroSection from "../components/homePage/HeroSection";
import { PrototypesSection } from "../components/homePage/PrototypeSection";
import { SponsorSection } from "../components/homePage/SponsorSection";

const buttonStyle =
  "block w-full text-center py-3 px-4 rounded-md border border-transparent transform hover:scale-105 transition duration-300";

const sectionStyle = "h-screen text-white flex flex-col justify-center items-center snap-start p-8";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-full overflow-auto h-screen no-mobile-snap snap-y snap-mandatory">
        <HeroSection />
        <AboutSection />
        <CompetitionsSection />
        <PrototypesSection />
        {/* <SponsorSection /> */}
      </div>
    </div>
  );
}
