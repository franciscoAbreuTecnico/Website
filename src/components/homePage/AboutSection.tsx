import { Card, CardContent } from "../ui/card";
import { Zap, Target, Lightbulb } from "lucide-react";

const sectionStyle =
  "tracking-[.15em] h-auto flex flex-col justify-center items-center snap-start " +
  "pt-8 pb-8 px-10 " +
  "md:pt-32 md:pb-32 " +
  "md:min-h-screen " +
  "relative";

const AboutSection = () => {
  return (
    <section id="section2" className={`bg-no-repeat bg-cover bg-center ${sectionStyle}`}>
      <div
        className="
          absolute inset-0
          bg-[url('/images/home/team_background.png')]
          bg-cover bg-center
          filter
          -z-10
        "
      />

      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-7xl mb-3 text-[#39a6ff]">
          ABOUT <span className="hero-text">US</span>
        </h2>
          <div className="w-18 h-1 bg-gradient-to-r from-electric to-electric-glow mx-auto -mb-1" />
        <p className="text-xl md:text-3xl text-white text-muted-foreground max-w-4xl md:max-w-6xl mx-auto leading-relaxed mb-6 md:mb-10">
          We are a passionate team of engineering students from the University of Lisbon, 
          united by our commitment to advancing electric motorcycle technology and sustainable motorsport.
        </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 mt-12">
    {[
      { icon: <Zap />, title: "Innovation", text: "Pushing the boundaries…" },
      { icon: <Target />, title: "Competition", text: "Competing at the highest level…" },
      { icon: <Lightbulb />, title: "Education", text: "Learning through hands-on…" },
    ].map(({ icon, title, text }) => (
      <Card
        key={title}
        className="
          bg-[#16263c]/70
          border border-[#39a6ff]/25 hover:border-[#39a6ff]/60
          shadow-lg shadow-black/30
          backdrop-blur-sm
          transition-all duration-300
          group hover:scale-[1.02]
        "
      >
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-b from-[#39a6ff] to-[#19376d] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#39a6ff]">
            {title}
          </h3>
          <p className="text-white text-base">{text}</p>
        </CardContent>
      </Card>
    ))}
  </div>

 <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-40 pt-1 max-w-5xl mx-auto">
  <div className="text-center animate-slide-in-left">
    <div className="flex justify-center space-x-1 md:space-x-2">
      <span className="text-5xl sm:text-7xl md:text-7xl font-extrabold text-[#39a6ff] text-tlmoto-cyan tlmoto-glow">7</span>
      <span className="text-5xl sm:text-7xl md:text-7xl font-extrabold text-[#39a6ff] text-tlmoto-cyan tlmoto-glow">0</span>
      <span className="text-4xl sm:text-5xl md:text-4xl font-bold text-[#39a6ff] align-top">+</span>
    </div>
    <div className="text-2xl sm:text-3xl md:text-4xl text-white mt-4 tracking-[.20em]">
      MEMBERS
    </div>
  </div>
  <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
    <div className="flex justify-center space-x-1 md:space-x-2">
      <span className="text-5xl sm:text-7xl md:text-7xl font-extrabold text-[#39a6ff] text-tlmoto-cyan tlmoto-glow">1</span>
      <span className="text-5xl sm:text-7xl md:text-7xl font-extrabold text-[#39a6ff] text-tlmoto-cyan tlmoto-glow">0</span>
      <span className="text-4xl sm:text-5xl md:text-4xl font-bold text-[#39a6ff] align-top">+</span>
    </div>
    <div className="text-2xl sm:text-3xl md:text-4xl text-white mt-4 tracking-[.20em]">
      COMPETITIONS
    </div>
  </div>
  <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
    <div className="flex justify-center space-x-1 md:space-x-2">
      <span className="text-5xl sm:text-7xl md:text-7xl font-extrabold text-[#39a6ff] text-tlmoto-cyan tlmoto-glow">4</span>
      <span className="text-4xl sm:text-5xl md:text-4xl font-bold text-[#39a6ff] align-top">+</span>
    </div>
    <div className="text-2xl sm:text-3xl md:text-4xl text-white mt-4 tracking-[.20em]">
      PROTOTYPES
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default AboutSection;
