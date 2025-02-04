import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import styles from '@/styles/MyGarageDetails.module.scss';
import { cards } from '@/components/textContent/GarageSectionTexts';
import MyStatsChart from '@/components/MyStatsChart';
import MyChartToggleButtons from '@/components/MyChartToggleButtons';

export default function MyGarageDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const card = cards.find((card) => card.id === id);
    const videoRef = useRef(null);

    const [showHistory, setShowHistory] = useState(false);

    if (!card) return <p>Card not found</p>;

    return (
        <div className={styles.pageContainer}>
            <video className={styles.backgroundVideo} autoPlay muted ref={videoRef}>
                <source src={card.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.statsWrapper}>
                <MyChartToggleButtons 
                    showHistory={showHistory} 
                    setShowHistory={setShowHistory} 
                    motoId={card.id} 
                />
            <MyStatsChart stats={card.stats} motoId={card.id} showHistory={showHistory} historyText={card.historyText} />
            </div>
        </div>
    );
}
