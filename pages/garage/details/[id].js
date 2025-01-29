import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import styles from '@/styles/MyGarageDetails.module.scss';
import { cards } from '@/components/textContent/GarageSectionTexts';
import MyStatsChart from '@/components/MyStatsChart';
import MyChartToggleButtons from '@/components/MyChartToggleButtons';

export default function GarageDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const card = cards.find((card) => card.id === id);
    const videoRef = useRef(null);

    const [showHistory, setShowHistory] = useState(false); // State for toggling

    if (!card) return <p>Card not found</p>;

    return (
        <div className={styles.pageContainer}>
            <video className={styles.backgroundVideo} autoPlay muted ref={videoRef}>
                <source src={card.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <MyChartToggleButtons showHistory={showHistory} setShowHistory={setShowHistory} /> 

            <div className={styles.statsContainer}>
                
                {!showHistory ? (
                    <MyStatsChart stats={card.stats} motoId={card.id} />
                ) : (
                    <div className={styles.historyContainer}>
                        <h3>History of {card.title}</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum vel libero sapien. 
                            Donec aliquam neque vel ligula malesuada, sit amet interdum velit tincidunt.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
