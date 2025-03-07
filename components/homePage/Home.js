import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/homePage/HomeSection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MySection({
  image,
  secImage = null,
  headline,
  text,
  animatedNumbers=[],
  buttons = [],
  scrollTo,
  goToSectionRef,
  showArrow,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);
  return (
    <div className={styles.section} ref={sectionRef}>
      <div className={styles.copy}>
        <h2 ref={headlineRef}>{headline}</h2>
        <div className={styles.sectionContent}>{text}</div>
        <div className={styles.animatedNumbers}>
            {animatedNumbers.map((num, index) => (
                <p key={index}>
                {num.value}
                <span className={styles.numLabel}>{num.label}</span>
                </p>
            ))}
        </div>
        <div className={styles.buttonsContainer}>
            {buttons.map((button, index) => (
              <button key={index} className={styles.button}>
                {button.label}
              </button>
            ))}
        </div>
      </div>
      <Image src={image} layout={`fill`} />
      {secImage && <div className={styles.secImage}>
        <Image src={secImage} layout={`fill`} />
      </div>}
      {showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => scrollTo(goToSectionRef)}
        ></button>
      )}
    </div>
  );
}