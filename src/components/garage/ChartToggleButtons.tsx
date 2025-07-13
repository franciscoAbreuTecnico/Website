//import styles from '@/styles/garage/ChartToggleButtons.module.scss';
import { backgrounds } from '@/components/textContent/GarageSectionTexts';

export default function MyChartToggleButtons({
  showHistory,
  setShowHistory,
  motoId,
  onThemeClick,
}) {
  const backgroundStyle = backgrounds[motoId] || backgrounds.m01;

  const shadowColor = backgroundStyle.includes('rgba(0, 82, 212')
    ? 'rgba(0, 82, 212, 0.5)'
    : backgroundStyle.includes('rgba(255, 204, 0')
      ? 'rgba(255, 204, 0, 0.5)'
      : 'rgba(255, 0, 0, 0.5)';

  const hoverShadowColor = shadowColor.replace('0.5', '0.8');

  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          className={styles.historyButton}
          onClick={() => setShowHistory(true)}
          style={{
            backgroundImage: backgroundStyle,
            borderColor: shadowColor,
            boxShadow: `0px 4px 8px ${shadowColor}`,
            opacity: showHistory ? 1 : 0.5,
          }}
          onMouseEnter={e => (e.target.style.boxShadow = `0px 6px 12px ${hoverShadowColor}`)}
          onMouseLeave={e => (e.target.style.boxShadow = `0px 4px 8px ${shadowColor}`)}
        >
          History
        </button>

        <button
          className={styles.statsButton}
          onClick={() => setShowHistory(false)}
          style={{
            backgroundImage: backgroundStyle,
            borderColor: shadowColor,
            boxShadow: `0px 4px 8px ${shadowColor}`,
            opacity: !showHistory ? 1 : 0.5,
          }}
          onMouseEnter={e => (e.target.style.boxShadow = `0px 6px 12px ${hoverShadowColor}`)}
          onMouseLeave={e => (e.target.style.boxShadow = `0px 4px 8px ${shadowColor}`)}
        >
          Stats
        </button>
      </div>

      <div className={styles.themeButtonWrapper}>
        <button
          className={styles.themeButton}
          onClick={onThemeClick}
          style={{
            backgroundImage: backgroundStyle,
            borderColor: shadowColor,
            boxShadow: `0px 4px 8px ${shadowColor}`,
          }}
          onMouseEnter={e => (e.target.style.boxShadow = `0px 6px 12px ${hoverShadowColor}`)}
          onMouseLeave={e => (e.target.style.boxShadow = `0px 4px 8px ${shadowColor}`)}
        >
          Theme
        </button>
      </div>
    </>
  );
}
