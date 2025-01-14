import Head from "next/head";
import Mysection from "@/components/MySection";
import styles from "@/styles/Home.module.scss";
import { useRef } from "react";
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer";

export default function Home() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({
      behavior:"smooth"
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
        <Mysection 
          video={`/videos/intro_video_background.mp4`}
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}
        />
      </div>
      <div ref={section2}>
        <Mysection 
          image={`/images/index_resources/team_background.png`}
          headline={`About Us`}
          text={`A team composed of students from various courses at the University of Lisbon, who share the same passion: electric competition motorcycles`}
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
        />
      </div>
      <div ref={section3}>
        <Mysection 
          image={`/images/index_resources/aragon_background.jpg`}
          headline={`Competitions`}
          text={`The TLMoto is involved in a major competition: MotoStudent, an international university competition, based in Spain. The team has also participated in the Campeonato Nacional de Velocidade, a professional competition that takes place in Portugal.`}
          scrollTo={scrollTo}
          goToSectionRef={section4}
          showArrow={true}
        />
      </div>
      <div ref={section4}>
        <Mysection 
          image={`/images/index_resources/prototype_background.jpg`}
          headline={`Prototypes`}
          text={`The team has three prototypes built. The first, a combustion one (TLM01i), was completed in 2014, and has been continuously developed and improved up to the present, and the second, already electric (TLM02e), completed in 2018. In 2021, the construction of the third prototype, the second electric one (TLM03e), was completed`}
          scrollTo={scrollTo}
          goToSectionRef={section5}
          showArrow={true}
        />
      </div>
      <div ref={section5}>
        <Mysection 
          image={`/images/index_resources/sponsors_background.png`}
          headline={`Sponsors`}
          showArrow={false}
        />
      </div>
    </div>
  );
}
