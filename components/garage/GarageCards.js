import styles from '@/styles/garage/GarageCards.module.scss';
import { cards } from '@/components/textContent/GarageSectionTexts';
import { TransitionLink } from '../utils/TransitionLink';

export default function MyGarageCards() {
  return (
    <div className={styles.wrapper}>
      <video className={styles.backgroundVideo} autoPlay muted>
        <source src="/videos/garage/garage_menu.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {cards.map((card, index) => (
        <div className={styles.card} key={index}>
          <div className={`${styles.face} ${styles.front}`}>
            <img src={card.imageSrc} alt={card.title} />
            <h3>{card.title}</h3>
          </div>

          <TransitionLink href={card.detailsLink} className={styles.cardLink}>
            <div className={`${styles.face} ${styles.back}`}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className={styles.link}>
                <TransitionLink href={card.detailsLink}>Details</TransitionLink>
              </div>
            </div>
          </TransitionLink>
        </div>
      ))}
    </div>
  );
}
