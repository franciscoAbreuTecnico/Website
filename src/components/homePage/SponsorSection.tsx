/* components/homePage/SponsorSection.tsx */
import React from "react";
import { Card, CardContent } from "../ui/card";

const sectionStyle = "h-screen text-white flex flex-col justify-center items-center snap-start p-8";

const sponsors = [
  { name: "ACME Corp", logo: "/images/sponsors/acme.png" },
  { name: "Volt Industries", logo: "/images/sponsors/volt.png" },
  { name: "GreenRide", logo: "/images/sponsors/greenride.png" },
];

export const SponsorSection: React.FC = () => (
    <section id="section5" className={`bg-gray-800 ${sectionStyle}`}>
    <h2 className="text-4xl mb-6">Our Sponsors</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
      {sponsors.map(({ name, logo }) => (
        <Card
          key={name}
          className="flex flex-col items-center bg-gray-800 border border-gray-700 shadow-lg p-4 hover:scale-105 transition-transform"
        >
          <img src={logo} alt={`${name} logo`} className="h-24 object-contain mb-4" />
          <CardContent>
            <h3 className="text-2xl font-bold text-center">{name}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);
