import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../../styles/homePage/HomeSection.module.scss";
import { TransitionLink } from "../utils/TransitionLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CountUp from "react-countup";
gsap.registerPlugin(ScrollTrigger);

export default function MySection({
  image,
  secImage = null,
  headline,
  text,
  animatedNumbers=[],
  buttons = [],
  whiteBox = [],
  scrollTo,
  goToSectionRef,
  showArrow,
}) {
  const [startCount, setStartCount] = useState(false);
  const [enterCount, setEnterCount] = useState(0);
  const [selectedText, setSelectedText] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
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
  useEffect(() => {
    if (animatedNumbers.length > 0) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && enterCount < 2) {
            setStartCount(true);
            setEnterCount((prev) => prev + 1);
          }
        },
        { threshold: 0.6 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);

      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }
  }, [animatedNumbers, enterCount]);
return (
    <div className={styles.section} ref={sectionRef}>
      <div className={styles.copy}>
          <h2 ref={headlineRef}>{headline}</h2>
          <div className={styles.sectionContent}>{text}</div>
          {animatedNumbers.length > 0 && (
          <div className={styles.animatedNumbers}>
            {animatedNumbers.map((num, index) => (
              <p key={index}>
                <CountUp
                  end={num.value}
                  duration={3}
                  className={styles.countUpNumbers}
                  start={startCount ? 0 : undefined}
                  delay={0.3}
                />
                <span className={styles.numLabel}>{num.label}</span>
              </p>
            ))}
          </div>
        )}
          <div className={styles.buttonsContainer}>
  {buttons.map((button, index) =>
    button.href ? (
      <TransitionLink key={index} href={button.href} className={styles.button}>
        {button.label}
      </TransitionLink>
    ) : (
      <button
        key={index}
        className={`${styles.button} ${activeIndex === index ? styles.active : ""}`}
        onClick={() => {
          setActiveIndex(index); // Set active button
          const foundBox = whiteBox.find((box) => box.label === button.label);
          setSelectedText(foundBox ? foundBox.text : "No content found!");
        }}
      >
        {button.label}
      </button>
    )
  )}
</div>
          {selectedText && (
            <div className={styles.whiteBox}>
              <p>{selectedText}</p>
            </div>
          )}
        </div>
        <Image src={image} fill />
        {secImage && <div className={styles.secImage}>
            <Image src={secImage} fill />
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