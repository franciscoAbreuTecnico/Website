/* eslint-disable prettier/prettier */
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Users, Zap, Code, Wrench, ArrowRight } from "lucide-react";

const sectionStyle = "h-screen text-white flex flex-col justify-center items-center snap-start p-8";

const TeamSection = () => {
  const departments = [
    {
      name: "Electrical Engineering",
      icon: <Zap className="w-8 h-8" />,
      description: "Battery systems, motor control, and power electronics",
      color: "from-electric to-electric-glow"
    },
    {
      name: "Mechanical Engineering", 
      icon: <Wrench className="w-8 h-8" />,
      description: "Chassis design, suspension, and aerodynamics",
      color: "from-racing to-tech"
    },
    {
      name: "Software Engineering",
      icon: <Code className="w-8 h-8" />,
      description: "Control systems, telemetry, and data analysis",
      color: "from-tech to-electric"
    }
  ];

  return (
    <section id="section4" className={`bg-gray-800 ${sectionStyle}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            OUR <span className="hero-text">TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-electric-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A multidisciplinary team of passionate engineering students from the University of Lisbon, 
            working together to push the boundaries of electric motorcycle technology.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-card/50 to-card/30 rounded-2xl border border-electric/20 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-electric to-electric-glow rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-background" />
            </div>
            <div className="text-3xl font-bold text-electric electric-glow mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-card/50 to-card/30 rounded-2xl border border-electric/20 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-racing to-tech rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-background" />
            </div>
            <div className="text-3xl font-bold text-racing mb-2">5</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-card/50 to-card/30 rounded-2xl border border-electric/20 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-tech to-electric rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-background" />
            </div>
            <div className="text-3xl font-bold text-tech mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-card/50 to-card/30 rounded-2xl border border-electric/20 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-electric-glow to-racing rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-background" />
            </div>
            <div className="text-3xl font-bold text-electric-glow mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Electric Focus</div>
          </div>
        </div>

        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <Card key={dept.name} className="bg-card/50 backdrop-blur-sm border-border hover:border-electric transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-electric">{dept.name}</h3>
                  <p className="text-muted-foreground">{dept.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center bg-gradient-to-r from-card/30 to-card/10 rounded-2xl p-12 border border-electric/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Join the <span className="hero-text">Future</span> of Racing
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Are you passionate about electric vehicles, engineering, and competition? 
              We&#39;re always looking for talented students to join our multidisciplinary team 
              and help shape the future of sustainable motorsport.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="racing-gradient text-foreground hover:scale-105 transition-all duration-300 electric-shadow">
                <Users className="w-5 h-5 mr-2" />
                Apply to Join
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-electric text-electric hover:bg-electric hover:text-background transition-all duration-300">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;