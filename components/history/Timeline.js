import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/history/Timeline.module.scss';
import TimelineItem from './TimelineItem';
import timelineData from '../textContent/TimelineSectionTexts';

// Group events by year BEFORE useState
const groupedData = timelineData.reduce((acc, item) => {
  if (!acc[item.year]) {
    acc[item.year] = [];
  }
  acc[item.year].push(item);
  return acc;
}, {});

export default function Timeline() {
  // Set the first available year as the default selection
  const [selectedYear, setSelectedYear] = useState(Object.keys(groupedData)[0]);
  const timelineRef = useRef(null);
  const buttonRefs = useRef([]);

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline} ref={timelineRef}>
        {Object.keys(groupedData).map((year, index) => (
          <motion.button
            key={index}
            ref={el => (buttonRefs.current[index] = el)}
            className={`${styles.year} ${styles.large} ${selectedYear === year ? styles.active : ''}`}
            onClick={() => setSelectedYear(year)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: selectedYear === year ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            {year}
          </motion.button>
        ))}
      </div>

      {/* White Box to Show All Events for the Selected Year */}
      <motion.div
        className={styles.timelineContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {groupedData[selectedYear].map(item => (
          <TimelineItem key={item.index} {...item} />
        ))}
      </motion.div>
    </div>
  );
}
