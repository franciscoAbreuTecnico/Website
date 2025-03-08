import styles from '@/styles/garage/ChartToggleButtons.module.scss';
import { backgrounds } from '@/components/textContent/GarageSectionTexts';
import { TransitionLink } from '@/components/utils/TransitionLink';

export default function MyChartToggleButtons({ showHistory, setShowHistory, motoId }) {
    const backgroundStyle = backgrounds[motoId] || backgrounds.m01;

    const shadowColor = backgroundStyle.includes("rgba(0, 82, 212") 
        ? "rgba(0, 82, 212, 0.5)"
        : backgroundStyle.includes("rgba(255, 204, 0") 
        ? "rgba(255, 204, 0, 0.5)"
        : "rgba(255, 0, 0, 0.5)";

    const hoverShadowColor = shadowColor.replace("0.5", "0.8");

    return (
        <div className={styles.buttonContainer}>
            <button 
                className={styles.historyButton} 
                onClick={() => setShowHistory(!showHistory)}
                style={{
                    backgroundImage: backgroundStyle,
                    borderColor: shadowColor,
                    boxShadow: `0px 4px 8px ${shadowColor}`,
                }}
                onMouseEnter={(e) => e.target.style.boxShadow = `0px 6px 12px ${hoverShadowColor}`}
                onMouseLeave={(e) => e.target.style.boxShadow = `0px 4px 8px ${shadowColor}`}
            >
                {showHistory ? "Stats" : "History"}
            </button>
            <TransitionLink href="/garage">
                <button 
                    className={styles.backButton} 
                    style={{
                        backgroundImage: backgroundStyle,
                        borderColor: shadowColor,
                        boxShadow: `0px 4px 8px ${shadowColor}`,
                    }}
                    onMouseEnter={(e) => e.target.style.boxShadow = `0px 6px 12px ${hoverShadowColor}`}
                    onMouseLeave={(e) => e.target.style.boxShadow = `0px 4px 8px ${shadowColor}`}
                >
                    Back
                </button>
            </TransitionLink>
        </div>
    );
}
