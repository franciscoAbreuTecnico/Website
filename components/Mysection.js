import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/MySection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CountUp from "react-countup";
import { TransitionLink } from "./utils/TransitionLink";
gsap.registerPlugin(ScrollTrigger);

export default function MySection({
  image,
  secondaryImage, // New prop for the additional image
  video,
  headline,
  text,
  scrollTo,
  goToSectionRef,
  showArrow,
  children,
  animatedNumbers,
  buttons,
}) {
  const headlineRef = useRef();
  const textRef = useRef();
  const numbersRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    if (!video) {
      const animationTargets = [headlineRef.current, textRef.current, numbersRef.current];
      
      animationTargets.forEach((target) => {
        if (target) {
          gsap.fromTo(
            target,
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
                trigger: target,
                start: "top 60%",
                end: "bottom 0%",
                toggleActions: "play none restart reverse",
              },
            }
          );
        }
      });
    }
  
    return () => {};
  }, [video]);
  
  return (
    <div className={styles.section} ref={sectionRef}>
      {video ? (
        <video
          className={styles.video}
          src={video}
          autoPlay
          muted
          loop={false}
          playsInline
          onEnded={(e) => e.target.pause()}
        />
      ) : (
        <div className={styles.imageContainer}>
          {image && (
            <Image
              src={image}
              alt="Primary Section Image"
              className={styles.image}
              fill
            />
          )}
          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt="Secondary Section Image"
              className={styles.secondaryImage}
              fill
            />
          )}
          <div className={styles.copy}>
            {headline && <h2 className={styles.headline} ref={headlineRef}>{headline}</h2>}
            {text && <p className={styles.sectionContent} ref={textRef}>{text}</p>}
            {animatedNumbers && (
              <div className={styles.sectionContent} ref={numbersRef}>
                {animatedNumbers.map(({ label, value }) => (
                  <div key={label}>
                    <CountUp
                      end={value}
                      duration={10}
                      className={styles.animatedNumber}
                    />
                    <span> {label}</span>
                  </div>
                ))}
              </div>
            )}
            {buttons && (
              <div className={styles.buttonsContainer}>
                {buttons.map((button, index) => (
                  button.href ? (
                    <TransitionLink
                      key={index}
                      href={button.href}
                      className={styles.button}
                    >
                      {button.label}
                    </TransitionLink>
                  ) : (
                    <button
                      key={index}
                      className={styles.button}
                      onClick={button.onClick}
                    >
                      {button.label}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {children}
      {showArrow && (
        <>
          <button
            className={styles.downarrow}
            onClick={() => scrollTo(goToSectionRef)}
          ></button>
        </>
      )}
    </div>
  );
}

