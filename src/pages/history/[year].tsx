import { getImages } from "../../components/utils/FetchFolderImages";
import MyDefaultPage from "../../components/DefaultPage";
import { timelineData, TimelineDataItem } from "@/src/components/textContent/TimelineSectionTexts";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import TiltedCard from "@/src/components/extras/TiltedCard";

export async function getStaticProps({ params }: { params: { year: string } }) {
  const { year } = params;

  const events = timelineData[year] || [];
  const yearData = events.reduce(
    (acc, event) => {
      acc[event.imageFolder] = getImages(event.imageFolder);
      return acc;
    },
    {} as Record<string, string[]>
  );

  return { props: { yearData, selectedYear: year } };
}

export async function getStaticPaths() {
  const years = Object.keys(timelineData)
    .map(String)
    .sort((a, b) => Number(a) - Number(b));

  const paths = years.map(year => ({
    params: { year },
  }));

  return { paths, fallback: false };
}

export default function History({
  yearData,
  selectedYear,
}: {
  yearData: { [key: string]: string[] };
  selectedYear: string;
}) {
  const router = useRouter();
  const years = Object.keys(timelineData).map(String);

  const timelineRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <MyDefaultPage>
      <div className="flex flex-col">
        {/* Timeline Years */}
        <div
          ref={timelineRef}
          className="hidden md:flex justify-evenly items-center mt-35 relative w-2/3 mx-auto
    before:content-[''] before:absolute before:w-full before:h-1 
    before:bg-gradient-to-r before:from-[#39a6ff] before:to-white 
    before:top-[14.7vh] before:z-0"
        >
          {years.map((year, index) => (
            <motion.button
              key={index}
              ref={el => {
                buttonRefs.current[index] = el;
              }}
              className={`border-4 border-white rounded-full text-white font-bold relative transition-all duration-300 ease-in-out tracking-[1.7px] z-10 mr-[-20px]
      w-[65px] h-[65px] text-lg
      after:content-[''] after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full after:top-[12vh] after:left-1/2 after:-translate-x-1/2
      ${
        selectedYear === year
          ? "bg-[#39a6ff] shadow-[0_0_10px_white] scale-110 after:bg-sky-400"
          : "opacity-60 hover:bg-[#39a6ff] hover:shadow-[0_0_10px_white] hover:scale-110"
      }
    `}
              onClick={() => router.push(`/history/${year}`)}
            >
              {year}
            </motion.button>
          ))}
        </div>

        {/* Timeline Years - Mobile */}
        <div className="flex items-center text-white text-5xl justify-center gap-4 my-4 mt-35 md:hidden">
          {/* Previous Year */}
          <button
            onClick={() => {
              const idx = years.indexOf(selectedYear);
              if (idx > 0) router.push(`/history/${years[idx - 1]}`);
            }}
            disabled={selectedYear === years[0]}
            className="disabled:opacity-40"
          >
            &lt;
          </button>

          {/* Dropdown for Year Selection */}
          <div className="relative">
            <text>{selectedYear}</text>
          </div>

          {/* Next Year */}
          <button
            onClick={() => {
              const idx = years.indexOf(selectedYear);
              if (idx < years.length - 1) router.push(`/history/${years[idx + 1]}`);
            }}
            disabled={selectedYear === years[years.length - 1]}
            className="disabled:opacity-40"
          >
            &gt;
          </button>
        </div>

        {/* White Box for Events */}
        <motion.div
          className="relative w-[85%] bg-white/85 text-black p-6 rounded-lg shadow-lg mx-auto text-center animate-fadeIn md:top-[10vh] md:w-[65%] lg:p-12 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {timelineData[selectedYear].map((item: TimelineDataItem) => (
            <div key={item.title} className="mb-15">
              <h3 className="text-4xl font-bold mb-2">{item.title}</h3>
              <p className="text-xl mb-4">{item.description}</p>
              <div className="grid grid-cols-2 gap-5 justify-items-center md:grid-cols-3 2xl:grid-cols-4 2xl:justify-items-stretch">
                {yearData[item.imageFolder].map((element: string) => (
                  <TiltedCard
                    key={element}
                    imageSrc={element}
                    containerHeight="clamp(125px, 25vw, 250px)"
                    containerWidth="clamp(125px, 25vw, 250px)"
                    imageHeight="clamp(125px, 25vw, 250px)"
                    imageWidth="clamp(125px, 25vw, 250px)"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent=""
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </MyDefaultPage>
  );
}
