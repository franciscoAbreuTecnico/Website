import { getImages } from "../../components/utils/FetchFolderImages";
import MyDefaultPage from "../../components/DefaultPage";
import { timelineData, TimelineDataItem } from "@/src/components/textContent/TimelineSectionTexts";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import TiltedCard from "@/src/components/extras/TiltedCard";
import { motion, AnimatePresence } from "framer-motion";

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
  // inside History component
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
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
          <div className="absolute top-0 left-0 w-full h-[0.5vh] bg-sky-400 z-50" />

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
          className="relative w-[85%] bg-white/85 text-black px-6 py-2 rounded-lg shadow-lg mx-auto text-center animate-fadeIn mb-[7.5vh] md:mt-[5vh] md:w-[65%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {timelineData[selectedYear].map((item: TimelineDataItem) => (
            <div key={item.title} className="mt-[2.5vh] mb-[2.5vh] lg:mb-[0vh] xl:mb-[10vh]">
              <h3 className="text-4xl font-bold mb-[0.125vh]">{item.title}</h3>
              <p className="text-xl mb-[2vh]">{item.description}</p>
              <div className="grid grid-cols-2 gap-y-[1.5vh] justify-items-center md:grid-cols-3 lg:gap-x-[1.5vw] lg:gap-y-[1.5vh] lg:grid-cols-4 xl:gap-x-[2vw] xl:gap-y-[2vh]">
                {yearData[item.imageFolder].map((element: string) => (
                  <div key={element} onClick={() => setFullscreenImage(element)}>
                    <TiltedCard
                      imageSrc={element}
                      containerHeight="clamp(125px, 35vw, 200px)"
                      containerWidth="clamp(125px, 35vw, 200px)"
                      imageHeight="clamp(125px, 35vw, 200px)"
                      imageWidth="clamp(125px, 35vw, 200px)"
                      rotateAmplitude={12}
                      scaleOnHover={1.5}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={true}
                      overlayContent=""
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullscreenImage(null)}
            >
              <motion.img
                src={fullscreenImage}
                alt="Fullscreen"
                className="max-h-screen max-w-[85] rounded-lg object-contain mt-[10vh]"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={e => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MyDefaultPage>
  );
}
