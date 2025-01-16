import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./MySection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MySection({
  image,
  video,
  headline,
  text,
  scrollTo,
  goToSectionRef,
  showArrow,
  children,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    if (!video) {
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
        image && (
          <div className={styles.imageWithText}>
            <Image src={image} alt="Section Image" fill />
            <div className={styles.copy}>
              {headline && <h2 className={styles.headline} ref={headlineRef}>{headline}</h2>}
              {text && <p>{text}</p>}
            </div>
          </div>
        )
      )}
      {children}
      {showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => scrollTo(goToSectionRef)}
        ></button>
      )}
    </div>
  );  
}
