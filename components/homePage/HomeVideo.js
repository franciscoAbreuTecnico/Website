import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/homePage/HomeSectionVideo.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function MySectionVideo({ video, scrollTo, goToSectionRef, showArrow }) {
  return (
    <div className={styles.section}>
      <video src={video} autoPlay muted loop={false} playsInline onEnded={e => e.target.pause()} />
      {showArrow && (
        <button className={styles.downarrow} onClick={() => scrollTo(goToSectionRef)}></button>
      )}
    </div>
  );
}
