import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/MyTimeline.module.scss";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Predefined image counts
const imageCounts = {
  MS18: 3,
  MS21: 9,
  MS22: 10,
  CNV18: 6,
  CNV19: 12,
  CNV20: 9,
};

export default function TimelineItem({ year, title, description, imageFolder }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const folderName = imageFolder.split("/").pop();
    const count = imageCounts[folderName] || 0;

    const imageList = Array.from({ length: count }, (_, i) => `${imageFolder}${i + 1}.webp`);
    setImages(imageList);
  }, [imageFolder]);

  return (
    <motion.div 
      className={styles.timelineItem} 
      initial="hidden" 
      animate="visible" 
      variants={fadeInVariants}
    >
      <h2>{title}</h2>
      <p>{description}</p>

      {images.length > 0 ? (
        <div className={styles.imageGrid}>
          {images.map((imgSrc, index) => {
            const hoverScale = images.length >= 5 ? 2.1 : 1.2;

            return (
              <motion.img 
                key={index} 
                src={imgSrc} 
                alt={`${year} event`} 
                initial="hidden" 
                animate="visible" 
                variants={fadeInVariants}
                whileHover={{ scale: hoverScale, translateY: -25 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            );
          })}
        </div>
      ) : (
        <p className={styles.noImages}>No images available.</p>
      )}
    </motion.div>
  );
}
