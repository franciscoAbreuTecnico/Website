/* eslint-disable prettier/prettier */
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Trophy, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

const sectionStyle =
  "tracking-[.15em] h-auto flex flex-col justify-center items-center snap-start " +
  "pt-8 pb-8 px-10 " +
  "md:pt-32 md:pb-32 " +
  "md:min-h-screen " +
  "relative";

const CompetitionsSection = () => {
  const competitions = [
    {
      name: "MotoStudent",
      location: "Aragon, Spain",
      type: "International",
      description:
        "An engineering competition where university teams develop electric motorcycles and compete in various challenges, including MS1 (project evaluation) and MS2 (prototype testing) phases.",
      achievements: ["Debut in 2014", "Electric category focus", "Continuous participation"],
      status: "Annual",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      name: "Campeonato Nacional de Velocidade",
      location: "Portugal",
      type: "National",
      description:
        "A professional racing competition that takes place in P...where we test our prototypes against established racing teams.",
      achievements: ["Professional level", "Real-world testing", "Performance validation"],
      status: "Seasonal",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="section3"
      className={`bg-no-repeat bg-cover bg-center ${sectionStyle}`}
      style={{
        backgroundImage: `url('/images/home/aragon_background.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
      <div className="max-w-[95rem] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-7xl mb-3 text-[#39a6ff]">
            <span className="hero-text">COMPETITIONS</span>
          </h2>
          <div className="w-18 h-1 bg-gradient-to-r from-electric to-electric-glow mx-auto -mb-2" />
          <p className="text-xl md:text-3xl text-white text-muted-foreground max-w-4xl md:max-w-6xl mx-auto leading-relaxed mb-6 md:mb-10">
            The TLMoto team is involved in major competitions that challenge our engineering skills
            and validate our electric motorcycle technologies against the best in the world.
          </p>
      </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Competition Image */}
          <div className="animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/images/home/aragon_background.jpg"
                width={600}
                height={450}
                alt="Racing Competition"
                className="w-full h-[450px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
              <Button
                variant="ghost"
                className="w-full justify-between text-base text-gray-200 hover:text-[#39a6ff] hover:text-lg hover:scale-105 transition-all duration-200"
              >                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Competition Details */}
          <div className="animate-slide-in-right space-y-6 md:space-y-8">
            {competitions.map((competition) => (
              <Card
                key={competition.name}
                className="bg-gradient-to-br from-[#111827]/90 via-[#1e293b]/80 to-[#0a192f]/80 backdrop-blur-md border-[#39a6ff]/10 hover:border-[#39a6ff]/40 shadow-xl transition-all duration-300 group hover:scale-[1.02]"
              >
                <CardContent className="p-4 sm:p-3 md:p-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-b from-[#39a6ff] to-deepskyblue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#39a6ff]/20">
                        {competition.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#39a6ff]">
                          {competition.name}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-xs sm:text-sm text-blue-300/80 mt-1 space-y-1 sm:space-y-0">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#39a6ff]" />
                            <span>{competition.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-deepskyblue" />
                            <span>{competition.status}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <Users className="w-5 h-5 text-blue-400/60" />
                  </div>

                  <p className="text-blue-100 mb-12 leading-relaxed text-base">
                    {competition.description}
                  </p>

                  <div className="space-y-4 mt-4">
                    <h4 className="text-xl font-semibold bg-gradient-to-r from-[#39a6ff] to-deepskyblue bg-clip-text text-transparent">
                      Key Achievements:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {competition.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gradient-to-r from-[#39a6ff]/20 to-deepskyblue/20 border border-[#39a6ff]/30 rounded-full text-sm text-blue-300/90 hover:border-[#39a6ff]/50 transition-colors duration-200"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competition Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10 mt-2">
          <div className="text-center p-4 bg-[#16263c]/70 backdrop-blur-sm rounded-lg border border-[#39a6ff]/25 hover:border-[#39a6ff]/60 transition-all duration-300 hover:scale-105 shadow-lg shadow-black/30">
            <div className="text-2xl md:text-4xl text-white mb-1 drop-shadow">
              2014
            </div>
            <div className="text-2xl md:text-2xl text-blue-100">First Competition</div>
          </div>
          <div className="text-center p-4 bg-[#16263c]/70 backdrop-blur-sm rounded-lg border border-[#39a6ff]/25 hover:border-[#39a6ff]/60 transition-all duration-300 hover:scale-105 shadow-lg shadow-black/30">
            <div className="text-2xl md:text-4xl text-white mb-1 drop-shadow">
              5
            </div>
            <div className="text-2xl md:text-2xl text-blue-100">International Events</div>
          </div>
          <div className="text-center p-4 bg-[#16263c]/70 backdrop-blur-sm rounded-lg border border-[#39a6ff]/25 hover:border-[#39a6ff]/60 transition-all duration-300 hover:scale-105 shadow-lg shadow-black/30">
            <div className="text-2xl md:text-4xl text-white mb-1 drop-shadow">
              2
            </div>
            <div className="text-2xl md:text-2xl text-blue-100">Major Championships</div>
          </div>
          <div className="text-center p-4 bg-[#16263c]/70 backdrop-blur-sm rounded-lg border border-[#39a6ff]/25 hover:border-[#39a6ff]/60 transition-all duration-300 hover:scale-105 shadow-lg shadow-black/30">
            <div className="text-2xl md:text-4xl text-white mb-1 drop-shadow">
              3
            </div>
            <div className="text-2xl md:text-2xl text-blue-100">Racing Prototypes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
