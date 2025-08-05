/* eslint-disable prettier/prettier */
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, Settings, Trophy } from "lucide-react";
import Image from 'next/image'

const GarageSection = () => {
  const prototypes = [
    {
      name: "TLM01i",
      year: "2014",
      type: "Combustion",
      description: "Our first prototype that started our journey in competitive motorcycling.",
      status: "Completed",
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: "TLM02e",
      year: "2018",
      type: "Electric",
      description: "Our transition to electric power, marking a new era for the team.",
      status: "Evolved",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      name: "TLM03e",
      year: "2021",
      type: "Electric",
      description: "The latest generation showcasing our advanced electric technology.",
      status: "Active",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  return (
    <section id="section5" className="section-snap min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              OUR <span className="hero-text">GARAGE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric to-electric-glow mb-8"></div>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The team has three prototypes built. The first, a combustion one (TLM01i), was completed in 2014, 
              and has been continuously developed and improved up to the present, and the second, already electric (TLM02e), 
              completed in 2018. In 2021, the construction of the third prototype, the second electric one (TLM03e), was completed.
            </p>

            <div className="space-y-6">
              {prototypes.map((prototype, index) => (
                <Card key={prototype.name} className="bg-card/50 backdrop-blur-sm border-border hover:border-electric transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-electric to-electric-glow rounded-full flex items-center justify-center">
                          {prototype.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-electric">{prototype.name}</h3>
                          <p className="text-sm text-muted-foreground">{prototype.year} • {prototype.type}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        prototype.status === "Active" 
                          ? "bg-electric/20 text-electric" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {prototype.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{prototype.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="mt-8 racing-gradient text-foreground hover:scale-105 transition-all duration-300 electric-shadow">
              Learn More About Our Prototypes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="/images/blue_black_background.webp"
                alt="TLMoto Garage"
                width={1200}
                height={600}
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-electric/20">
                  <h4 className="text-lg font-bold text-electric mb-2">State-of-the-Art Facility</h4>
                  <p className="text-sm text-muted-foreground">
                    Our garage is equipped with cutting-edge tools and technology for developing 
                    and maintaining our electric racing motorcycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarageSection;