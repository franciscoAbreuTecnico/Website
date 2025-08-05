/* eslint-disable prettier/prettier */
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

const sectionStyle = "h-screen text-white flex flex-col justify-center items-center snap-start p-8";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "info@tlmoto.tecnico.ulisboa.pt",
      href: "mailto:info@tlmoto.tecnico.ulisboa.pt"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      detail: "+351 21 841 7000",
      href: "tel:+351218417000"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      detail: "Instituto Superior Técnico, Lisboa",
      href: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  return (
    <section id="section6" className={`bg-black ${sectionStyle}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="hero-text">CONTACT</span> US
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-electric-glow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to join the electric revolution in motorsport? Get in touch with us to learn more 
            about our team, our projects, or opportunities to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-electric">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="bg-card/50 backdrop-blur-sm border-border hover:border-electric transition-all duration-300 group">
                  <CardContent className="p-6">
                    <a href={info.href} className="flex items-center space-x-4 group-hover:text-electric transition-colors duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-electric to-electric-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-muted-foreground">{info.detail}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-electric">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-br from-electric to-electric-glow rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 text-background"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Racing Quote */}
            <div className="mt-12 p-6 bg-gradient-to-r from-electric/10 to-electric-glow/10 rounded-xl border border-electric/20">
              <blockquote className="text-lg italic text-muted-foreground">
                &quot;Racing towards the future with electric innovation and student passion.
              </blockquote>
              <cite className="text-electric font-semibold mt-2 block">- TLMoto Team</cite>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-electric">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" className="bg-background/50 border-border focus:border-electric" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="bg-background/50 border-border focus:border-electric" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border focus:border-electric" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="Interested in joining the team" className="bg-background/50 border-border focus:border-electric" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your interest in electric motorcycles and our team..."
                      className="bg-background/50 border-border focus:border-electric min-h-[120px] w-full rounded-md p-2"
                    />
                  </div>
                  
                  <Button className="w-full racing-gradient text-foreground hover:scale-105 transition-all duration-300 electric-shadow">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 TLMoto - Instituto Superior Técnico. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;