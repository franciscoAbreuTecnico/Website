import AboutSection from "../components/homePage/AboutSection";
import CompetitionsSection from "../components/homePage/CompetitionSection";
import HeroSection from "../components/homePage/HeroSection";

const buttonStyle =
  "block w-full text-center py-3 px-4 rounded-md border border-transparent bg-gray-700 hover:bg-gray-600 transform hover:scale-105 transition duration-300";
const sectionStyle = "h-screen text-white flex flex-col justify-center items-center snap-start p-8";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="ml-auto overflow-auto h-screen no-mobile-snap snap-y snap-mandatory">
        <HeroSection />
        <AboutSection />
        <CompetitionsSection />
        <section id="section4" className={`bg-gray-800 ${sectionStyle}`}>
          <h1 className="text-4xl mb-6">Section 4: Conclusion</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-2">Concept 1</h2>
              <p>
                Concept 1 is all about understanding the core principles. These principles form the
                backbone of everything we do. By mastering these, you’ll be well-prepared to tackle
                more complex ideas.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-2">Concept 2</h2>
              <p>
                Concept 2 dives deeper into the details. We explore specific applications and
                provide examples to illustrate how these concepts work in real-world scenarios.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-2">Concept 3</h2>
              <p>
                Concept 3 is where we start connecting the dots. This section ties together the
                ideas from Concept 1 and 2, showing you how they interrelate and build upon each
                other.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
