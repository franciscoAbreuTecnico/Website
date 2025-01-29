import { useRouter } from 'next/router';
import styles from '@/styles/MyChartToggleButtons.module.scss';

export default function ChartToggleButtons({ showHistory, setShowHistory }) {
    const router = useRouter();

    return (
        <div className={styles.buttonContainer}>
            <button className={styles.historyButton} onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? "Show Stats" : "History"}
            </button>
            <button className={styles.backButton} onClick={() => router.back()}>
                Back
            </button>
        </div>
    );
}
