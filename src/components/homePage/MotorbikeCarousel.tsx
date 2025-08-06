import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface MotorbikeData {
  id: number;
  name: string;
  model: string;
  year: string;
  description: string;
  image: string;
  specs: {
    power: string;
    weight: string;
    topSpeed: string;
  };
}

const motorbikes: MotorbikeData[] = [
  {
    id: 1,
    name: "TLM01i",
    model: "Combustion Prototype",
    year: "2014",
    description:
      "Our first prototype, a combustion-powered racing motorcycle that marked the beginning of our journey in competitive motorsports.",
    image: "/images/garage/01.jpg",
    specs: {
      power: "85 HP",
      weight: "125 kg",
      topSpeed: "180 km/h",
    },
  },
  {
    id: 2,
    name: "TLM02e",
    model: "Electric Prototype",
    year: "2018",
    description:
      "The transition to electric power. This prototype represents our commitment to sustainable racing technology and innovation.",
    image: "/images/garage/02.jpg",
    specs: {
      power: "75 kW",
      weight: "110 kg",
      topSpeed: "165 km/h",
    },
  },
  {
    id: 3,
    name: "TLM03e",
    model: "Advanced Electric",
    year: "2021",
    description:
      "Our latest electric racing machine featuring cutting-edge technology and aerodynamic design for maximum performance.",
    image: "/images/garage/03.jpg",
    specs: {
      power: "90 kW",
      weight: "105 kg",
      topSpeed: "185 km/h",
    },
  },
];

export const MotorbikeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === motorbikes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? motorbikes.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111827]/90 via-[#1e293b]/80 to-[#0a192f]/80 border border-[#39a6ff]/10">
        <div
          className="flex transition-transform duration-500 ease-electric"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {motorbikes.map((motorbike) => (
            <div key={motorbike.id} className="w-full flex-shrink-0">
              {/* Responsive grid: col on mobile, row on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 p-4 sm:p-6 lg:p-12 2xl:max-w-1xl">
                {/* Image: center always */}
                <div className="relative w-full max-w-[240px] mx-auto group">
                  <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl bg-gradient-to-t from-[#39a6ff]/20 to-transparent flex items-center justify-center">
                    <img
                      src={motorbike.image}
                      alt={motorbike.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute top-4 -left-9 2xl:left-4 bg-[#39a6ff]/80 backdrop-blur-sm text-white text-background px-3 py-1 rounded-full text-sm font-semibold">
                    {motorbike.year}
                  </div>
                </div>
                {/* Text: center on mobile, left on desktop */}
                <div className="flex flex-col justify-center items-center lg:items-start space-y-6 text-base md:text-lg lg:text-xl 2xl:text-2xl text-center lg:text-left">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#39a6ff] mb-2">
                      {motorbike.name}
                    </h3>
                    <p className="text-blue-300 text-lg font-medium mb-4">
                      {motorbike.model}
                    </p>
                    <p className="text-blue-100 leading-relaxed">
                      {motorbike.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
                    <div className="bg-[#16263c]/70 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-[#39a6ff]/25">
                      <div className="text-blue-300 text-xs sm:text-sm font-medium">Power</div>
                      <div className="text-base sm:text-lg font-bold text-white">{motorbike.specs.power}</div>
                    </div>
                    <div className="bg-[#16263c]/70 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-[#39a6ff]/25">
                      <div className="text-blue-300 text-xs sm:text-sm font-medium">Weight</div>
                      <div className="text-base sm:text-lg font-bold text-white">{motorbike.specs.weight}</div>
                    </div>
                    <div className="bg-[#16263c]/70 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-[#39a6ff]/25">
                      <div className="text-blue-300 text-xs sm:text-sm font-medium">Top Speed</div>
                      <div className="text-base sm:text-lg font-bold text-white">{motorbike.specs.topSpeed}</div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-fit border-[#39a6ff] bg-blue-50 text-black hover:bg-[#39a6ff] hover:text-white transition-all duration-300 mt-2"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="group absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#16263c]/80 backdrop-blur-sm border border-[#39a6ff]/25 hover:bg-[#39a6ff] hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-[#39a6ff] group-hover:text-white transition-colors duration-200" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="group absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#16263c]/80 backdrop-blur-sm border border-[#39a6ff]/25 hover:bg-[#39a6ff] hover:text-white transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-[#39a6ff] group-hover:text-white transition-colors duration-200" />
        </Button>
      </div>

      <div className="flex justify-center space-x-3 mt-6">
        {motorbikes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#39a6ff] shadow-md shadow-[#39a6ff]/40'
                : 'bg-blue-200/30 hover:bg-[#39a6ff]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
