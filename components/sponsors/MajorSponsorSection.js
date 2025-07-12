//import styles from '../../styles/sponsor/MajorSponsorSection.module.scss';
import { headlineText, secHeadlineText } from '@/components/textContent/SponsorsSectionTexts';

export default function MajorSponsorSection() {
  return (
    <div className={styles.container}>
      <p className={styles.headline}>{headlineText}</p>
      <p className={styles.secHeadline}>{secHeadlineText}</p>
    </div>
  );
}

// <div className={styles.container}>
//     {headlineText}
//     <section className={styles.majorSponsor}>
//         <div className={styles.logoContainer}>
//             <img src="/images/sponsors/smart_energy.png" alt="Major Sponsor Logo" />
//         </div>
//         <div className={styles.logoText}>
//             <p>
//                 Thank you, <strong>SmartEnergy</strong>, for your unwavering support and generosity.
//                 Your partnership plays a pivotal role in driving our vision forward, empowering us to
//                 reach new heights and positively impact our community. We are deeply grateful for your
//                 commitment and shared passion for innovation and growth. Together, we will continue to
//                 create meaningful change. Your contribution is truly invaluable, and we look forward
//                 to achieving even greater success together!
//             </p>
//         </div>
//     </section>
// </div>
