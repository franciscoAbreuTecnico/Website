import { useState, useEffect } from "react";
import styles from "@/styles/utils/SubscribePopup.module.scss";

export default function SubscribePopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2 className={styles.title}>Subscribe to our Newsletter</h2>
        <input type="email" placeholder="Enter your email" className={styles.input} />
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
    </div>
  );
}
