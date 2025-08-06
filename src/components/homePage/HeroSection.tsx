import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("section2");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="section1"
      className="relative bg-black h-screen text-white flex flex-col justify-center items-center snap-start p-8 overflow-hidden"
    >
      {/* Video Background (large screens) */}
      <video
        className="hidden xl:block absolute inset-0 w-full h-full object-cover filter z-0"
        muted
        autoPlay
        playsInline
        disablePictureInPicture
      >
        <source src="/videos/intro_video_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Image Background (small screens) */}
      <div
        className="block xl:hidden absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/home/moto_blue_black_background.png')" }}
      />

      {/* Content Here */}

      <button
        onClick={scrollToNext}
        className="
          tracking-[.15em]
          absolute 
          left-1/2 
          transform -translate-x-1/2 
          z-10 
          text-tlmoto-cyan 
          hover:text-tlmoto-cyan-light 
          transition-all duration-300 
          animate-bounce
          text-lg md:text-xl font-semibold
          px-4 md:px-4 py-2 md:py-4
          rounded-full
          flex flex-col items-center
          bottom-20 md:bottom-8
        "
      >
        <span className="mb-1">Scroll Down</span>
        <ChevronDown className="w-8 h-8 md:w-14 md:h-14" />
      </button>
    </section>
  );
};

export default HeroSection;
