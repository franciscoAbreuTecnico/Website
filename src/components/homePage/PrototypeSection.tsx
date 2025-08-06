import { MotorbikeCarousel } from './MotorbikeCarousel';

const sectionStyle =
  "tracking-[.17em] h-auto flex flex-col justify-center items-center snap-start " +
  "pt-16 pb-10 px-4 " + // px-10 → px-4 (less for mobile)
  "sm:pt-24 sm:pb-20 sm:min-h-[100vh] " +
  "md:pt-36 md:pb-28 md:min-h-[90vh] " +
  "lg:pt-24 lg:pb-28 lg:min-h-[100vh] " +
  "xl:pt-16 xl:pb-20 xl:min-h-[100vh] " +
  "relative";
  
export const PrototypesSection = () => {
  return (
    <section
      id="section4"
      className={`bg-no-repeat bg-cover bg-center ${sectionStyle}`}
      style={{ backgroundImage: `url('/images/home/aragon_background.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-6">
        <div className="relative z-10 max-w-7xl mx-auto px-0 text-center space-y-4 lg:space-y-6">
          <h2 className="text-5xl sm:text-7xl md:text-6xl lg:text-8xl xl:text-7xl 2xl:text-8xl text-[#39a6ff]">
            Our <span className="text-[#39a6ff] text-glow">Prototypes</span>
          </h2>
          <div className="w-18 h-1 mx-auto -mb-2" />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-2xl 2xl:text-4xl text-white text-muted-foreground 2xl:max-w-full max-w-4xl md:max-w-6xl mx-auto leading-relaxed mb-6 md:mb-10">
            From our first combustion prototype to our latest electric racing machines,
            explore the evolution of TLMoto's engineering excellence.
          </p>
        </div>
        {/* Carousel */}
        <MotorbikeCarousel />
      </div>
    </section>
  );
};
