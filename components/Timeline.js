import { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Timeline.module.scss";
import TimelineItem from "./TimelineItem";
import timelineData from "./textContent/TimelineSectionTexts";

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const timelineRef = useRef(null);
  const buttonRefs = useRef([]);
  const renderedYears = new Set();

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline} ref={timelineRef}>
        {timelineData.map((item, index) => {
          const isFirstOccurrence = !renderedYears.has(item.year);
          renderedYears.add(item.year);

          return (
            <motion.button
              key={index}
              data-index={item.index}
              ref={(el) => (buttonRefs.current[index] = el)}
              className={`${styles.year} ${isFirstOccurrence ? styles.large : styles.small} ${selectedIndex === item.index ? styles.active : ""}`}
              onClick={() => setSelectedIndex(item.index)}
              whileHover={{ scale: isFirstOccurrence ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: selectedIndex === item.index ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              {isFirstOccurrence && item.year}
            </motion.button>
          );
        })}
      </div>

      <motion.div 
        className={styles.timelineContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {timelineData.map((item) =>
          selectedIndex === item.index ? <TimelineItem key={item.index} {...item} /> : null
        )}
      </motion.div>
    </div>
  );
}
