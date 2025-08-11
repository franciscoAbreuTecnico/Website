import { getImages } from "../../components/utils/FetchFolderImages";
import MyDefaultPage from "../../components/DefaultPage";
import { timelineData, TimelineDataItem } from "@/src/components/textContent/TimelineSectionTexts";
import { useRef, useState } from "react";
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
  const [showDropdown, setShowDropdown] = useState(false);
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
        <div className="flex md:hidden items-center justify-center gap-4 my-4 mt-35">
          {/* Previous Year */}
          <button
            onClick={() => {
              const idx = years.indexOf(selectedYear);
              if (idx > 0) router.push(`/history/${years[idx - 1]}`);
            }}
            disabled={selectedYear === years[0]}
            className="text-2xl text-white disabled:opacity-40"
          >
            &lt;
          </button>

          {/* Dropdown for Year Selection */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(prev => !prev)}
              className="bg-[#39a6ff] text-white px-4 py-2 rounded-md font-bold"
            >
              {selectedYear}
            </button>
            {showDropdown && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md z-20">
                {years.map(year => (
                  <div
                    key={year}
                    onClick={() => {
                      setShowDropdown(false);
                      router.push(`/history/${year}`);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Next Year */}
          <button
            onClick={() => {
              const idx = years.indexOf(selectedYear);
              if (idx < years.length - 1) router.push(`/history/${years[idx + 1]}`);
            }}
            disabled={selectedYear === years[years.length - 1]}
            className="text-2xl text-white disabled:opacity-40"
          >
            &gt;
          </button>
        </div>

        {/* White Box for Events */}
        <motion.div
          className="md:mt-10 relative top-[6.32vh] w-[95%] sm:w-4/5 lg:w-2/3 bg-white/85 text-black p-6 sm:p-10 lg:p-12 rounded-lg shadow-lg mx-auto text-center animate-fadeIn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {timelineData[selectedYear].map((item: TimelineDataItem) => (
            <div key={item.title} className="mb-15">
              <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <div className="flex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-2 lg:flex justify-items-center">
                {yearData[item.imageFolder].map((element: string) => (
                  <TiltedCard
                    key={element}
                    imageSrc={element}
                    containerHeight="clamp(100px, 20vw, 200px)"
                    containerWidth="clamp(100px, 20vw, 200px)"
                    imageHeight="clamp(100px, 20vw, 200px)"
                    imageWidth="clamp(100px, 20vw, 200px)"
                    rotateAmplitude={12}
                    scaleOnHover={1.15}
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
