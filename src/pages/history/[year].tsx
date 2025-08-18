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
  return (
    <MyDefaultPage>
      <div className="flex flex-col mb-[5%]">
        {/* Timeline Years */}
        <div
          ref={timelineRef}
          className="hidden md:flex items-center mt-[10%] relative w-2/3 mx-auto
    "
        >
          {/* Horizontal line on top */}
          <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-sky-500" />

          {(() => {
            const idx = years.indexOf(selectedYear);

            return (
              <div className="grid grid-cols-11 items-start w-full">
                {/* Prev year (col 1) */}
                <div className="flex justify-center">
                  <motion.button
                    className="flex flex-col items-center group cursor-pointer"
                    onClick={() => idx > 0 && router.push(`/history/${years[idx - 1]}`)}
                  >
                    {idx > 0 ? (
                      <>
                        <div className="w-[0.5vh] h-[7.5vh] bg-sky-400 group-hover:bg-sky-400 transition-colors" />
                        <motion.div
                          className="mt-2 text-xl font-bold tracking-wide text-white opacity-60 
              group-hover:text-sky-400 group-hover:opacity-100 transition-all"
                        >
                          {years[idx - 1]}
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <div className="w-[0.5vh] h-[7.5vh] opacity-0" />
                        <span className="mt-2 text-xl font-bold opacity-0">-</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Ticks col 2 */}
                <div className="flex justify-center">
                  {idx > 0 ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <div className="w-[0.5vh] h-[5vh] bg-sky-500 opacity-50" />
                    </div>
                  ) : (
                    <div className="h-20" /> // placeholder
                  )}
                </div>

                {/* Ticks col 3 */}
                <div className="flex justify-center">
                  {idx > 0 ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <div className="w-[0.5vh] h-[5vh] bg-sky-500 opacity-50" />
                    </div>
                  ) : (
                    <div className="h-20" />
                  )}
                </div>

                {/* Ticks col 4 */}
                <div className="flex justify-center">
                  {idx > 0 ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <div className="w-[0.5vh] h-[5vh] bg-sky-500 opacity-50" />
                    </div>
                  ) : (
                    <div className="h-20" /> // placeholder
                  )}
                </div>

                {/* Ticks col 5 */}
                <div className="flex justify-center">
                  {idx > 0 ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <div className="w-[0.5vh] h-[5vh] bg-sky-500 opacity-50" />
                    </div>
                  ) : (
                    <div className="h-20" /> // placeholder
                  )}
                </div>

                {/* Current year (col 6) */}
                <div className="flex justify-center">
                  <motion.div className="flex flex-col items-center">
                    <div className="w-[0.5vh] h-[10vh] bg-sky-400" />
                    <motion.div className="mt-2 text-xl font-bold tracking-wide text-sky-400 scale-125">
                      {years[idx]}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Ticks col 7 */}
                <div className="flex justify-center">
                  {idx < years.length - 1 ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <div className="w-[0.5vh] h-[5vh] bg-sky-500 opacity-50" />
                    </div>
                  ) : (
                    <div className="h-20" />
                  )}
                </div>

                {/* Ticks col 8 */}
                <div className="flex justify-center">
                  {idx < years.length - 1 ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <div className="w-[0.5vh] h-[5vh] bg-sky-500 opacity-50" />
                    </div>
                  ) : (
                    <div className="h-20" />
                  )}
                </div>

                {/* Ticks col 9 */}
                <div className="flex justify-center">
                  {idx < years.length - 1 ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <div className="w-[0.5vh] h-[5vh] bg-sky-500 opacity-50" />
                    </div>
                  ) : (
                    <div className="h-20" />
                  )}
                </div>

                {/* Ticks col 10 */}
                <div className="flex justify-center">
                  {idx < years.length - 1 ? (
                    <div className="flex flex-col items-center gap-y-2">
                      <div className="w-[0.5vh] h-[5vh] bg-sky-500 opacity-50" />
                    </div>
                  ) : (
                    <div className="h-20" />
                  )}
                </div>

                {/* Next year (col 11) */}
                <div className="flex justify-center">
                  <motion.button
                    className="flex flex-col items-center group cursor-pointer"
                    onClick={() =>
                      idx < years.length - 1 && router.push(`/history/${years[idx + 1]}`)
                    }
                  >
                    {idx < years.length - 1 ? (
                      <>
                        <div className="w-[0.5vh] h-[7.5vh] bg-sky-400 group-hover:bg-sky-400 transition-colors" />
                        <motion.div
                          className="mt-2 text-xl font-bold tracking-wide text-white opacity-60 
              group-hover:text-sky-400 group-hover:opacity-100 transition-all"
                        >
                          {years[idx + 1]}
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <div className="w-[0.5vh] h-[7.5vh] opacity-0" />
                        <span className="mt-2 text-xl font-bold opacity-0">-</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            );
          })()}
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
          className="relative w-[85%] bg-white/85 text-black p-6 rounded-lg shadow-lg mx-auto text-center animate-fadeIn mb-[7.5vh] md:mt-[5vh] md:mb-[0vh] md:w-[65%] lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {timelineData[selectedYear].map((item: TimelineDataItem) => (
            <div key={item.title} className="mb-[2vh]">
              <h3 className="text-4xl font-bold mb-[0.125vh]">{item.title}</h3>
              <p className="text-xl mb-[2vh]">{item.description}</p>
              <div className="grid grid-cols-2 gap-[1.5vh] justify-items-center md:grid-cols-3 lg:grid-cols-4">
                {yearData[item.imageFolder].map((element: string) => (
                  <TiltedCard
                    key={element}
                    imageSrc={element}
                    containerHeight="clamp(100px, 30vw, 200px)"
                    containerWidth="clamp(100px, 30vw, 200px)"
                    imageHeight="clamp(100px, 30vw, 200px)"
                    imageWidth="clamp(100px, 30vw, 200px)"
                    rotateAmplitude={12}
                    scaleOnHover={1.5}
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
