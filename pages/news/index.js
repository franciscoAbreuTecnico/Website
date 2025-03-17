import SubscribePopup from "@/components/utils/SubscribePopup";
import { useState, useEffect } from "react";
import MyNews from "@/components/news/NewsCoverflowEffect";
import defaultPage from "@/styles/DefaultPage.module.scss";
import styles from "@/styles/news/SubscribeButton.module.scss"; // Import new styles

export default function News() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsPopupOpen(true);
        }, 500);
    }, []);

    return (
        <div className={defaultPage.background}>
            <MyNews />
            <button 
                className={styles.subscribeButton} 
                onClick={() => setIsPopupOpen(true)}
            >
                Subscribe
            </button>
            <SubscribePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
    );
}
