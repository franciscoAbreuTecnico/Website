"use client";
import { useRef, useState, useEffect } from "react";
import MySection from "../components/homePage/Home";
import MySectionVideo from "../components/homePage/HomeVideo";
import {
  aboutUsText,
  animatedNumbers,
  competitionText,
  prototypeText,
  whiteBoxText,
} from "@/components/textContent/HomeSectionTexts";
import MyDefaultPage from "../components/DefaultPage";

export default function Home() {
  const sections = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollTo(index) {
    sections[index].current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.5 };

    const observers = sections.map((sectionRef, index) => {
      return new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      }, observerOptions);
    });

    sections.forEach((section, index) => {
      if (section.current) observers[index].observe(section.current);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <MyDefaultPage>
      <div></div>
    </MyDefaultPage>
  );
  // The following block is commented out for now:
  /*
    <div>
      <div className={`container ${styles.container}`}>
        <div ref={sections[0]}>
          <MySectionVideo
            video={`/videos/intro_video_background.mp4`}
            goToSectionRef={1}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>
        <div ref={sections[1]}>
          <MySection
            image={`/images/home/team_background.png`}
            headline={`ABOUT US`}
            animatedNumbers={animatedNumbers}
            text={aboutUsText}
            goToSectionRef={2}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>
        <div ref={sections[2]}>
          <MySection
            image={`/images/home/aragon_background.jpg`}
            headline={`COMPETITIONS`}
            text={competitionText}
            buttons={[{ label: 'MS' }, { label: 'CNV' }, { label: 'MEI' }]}
            whiteBox={whiteBoxText}
            goToSectionRef={3}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>
        <div ref={sections[3]}>
          <MySection
            image={`/images/home/prototype_background.jpg`}
            headline={`PROTOTYPES`}
            text={prototypeText}
            buttons={[{ label: 'LEARN MORE', href: '/garage' }]}
            goToSectionRef={4}
            scrollTo={scrollTo}
            showArrow={true}
          />
        </div>
        <div ref={sections[4]}>
          <MySection
            image={`/images/blue_black_background.webp`}
            secImage={`/images/home/sponsors_background.png`}
            scrollTo={scrollTo}
            showArrow={false}
          />
        </div>
      </div>

      <div className={styles.dotsContainer}>
        {sections.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => scrollTo(index)}
          ></div>
        ))}
      </div>
    </div>
    */
}
