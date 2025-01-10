import Head from "next/head";
import Image from "next/image";
import Mysection from "@/components/Mysection";
import styles from "@/styles/Home.module.scss";
import { useRef } from "react";
import MyNavbar from "@/components/MyNavbar";

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
      <MyNavbar />
      <div ref={section1}>
        <Mysection 
          image={`/images/index_resources/blue_black_background.png`}
          headline={`Lore Ipsum Dolor Sit Amet 1`}
          scrollTo={scrollTo}
          goToSectionRef={section2}
          showArrow={true}
        />
      </div>
      <div ref={section2}>
        <Mysection 
          image={`/images/index_resources/blue_black_background.png`}
          headline={`Lore Ipsum Dolor Sit Amet 2`}
          scrollTo={scrollTo}
          goToSectionRef={section3}
          showArrow={true}
        />
      </div>
      <div ref={section3}>
        <Mysection 
          image={`/images/index_resources/blue_black_background.png`}
          headline={`Lore Ipsum Dolor Sit Amet 3`}
          scrollTo={scrollTo}
          goToSectionRef={section4}
          showArrow={true}
        />
      </div>
      <div ref={section4}>
        <Mysection 
          image={`/images/index_resources/blue_black_background.png`}
          headline={`Lore Ipsum Dolor Sit Amet 4`}
          scrollTo={scrollTo}
          goToSectionRef={section5}
          showArrow={true}
        />
      </div>
      <div ref={section5}>
        <Mysection 
          image={`/images/index_resources/blue_black_background.png`}
          headline={`Lore Ipsum Dolor Sit Amet 5`}
          showArrow={false}
        />
      </div>
    </div>
  );
}
