import Head from "next/head";
import MySection from "@/components/MySection";
import styles from "@/styles/Home.module.scss";
import { useRef } from "react";
import { aboutUsText, animatedNumbers, competitionText, prototypeText } from "@/components/textContent/SectionTexts";

export default function Home() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className={`container ${styles.container}`}>
      <Head>
        <title>TLMOTO</title>
        <meta name="description" content="TLMOTO Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={section1}>
        <MySection
          video={`/videos/intro_video_background.mp4`}
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}
        >
        </MySection>
      </div>
      <div ref={section2}>
        <MySection
          image={`/images/index_resources/team_background.png`}
          headline={`ABOUT US`}
          text={aboutUsText}
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
          animatedNumbers={animatedNumbers}
        />
      </div>
      <div ref={section3}>
        <MySection
          image={`/images/index_resources/aragon_background.jpg`}
          headline={`COMPETITIONS`}
          text={competitionText}
          scrollTo={scrollTo}
          goToSectionRef={section4}
          showArrow={true}
          buttons={[{ label: "MS"}, { label: "CNV"}, { label: "MEI"}]}
        />
      </div>
      <div ref={section4}>
        <MySection
          image={`/images/index_resources/prototype_background.jpg`}
          headline={`PROTOTYPES`}
          text={prototypeText}
          scrollTo={scrollTo}
          goToSectionRef={section5}
          showArrow={true}
          buttons={[{ label: "LEARN MORE", href: "/garage" }]}
          />
      </div>
      <div ref={section5}>
        <MySection
          image={`/images/index_resources/blue_black_background.png`}
          secondaryImage={`/images/index_resources/sponsors_background.png`}
          showArrow={false}
        />
      </div>
    </div>
  );
}
