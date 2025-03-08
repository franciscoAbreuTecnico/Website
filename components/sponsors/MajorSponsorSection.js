import styles from "../../styles/MajorSponsorSection.module.scss";

export const headlineText = (
    <p className={styles.headline}>
        We extend our deepest gratitude to all our sponsors for their invaluable support. 
        Your generosity empowers us to reach new heights and achieve remarkable goals together. 
        If you're interested in becoming a sponsor and helping our project thrive, feel free to send us a message. 
        Together, we can make a meaningful impact!
    </p>
);

export default function MajorSponsorSection() {
    return (
        <div className={styles.container}>
            {headlineText}
            <section className={styles.majorSponsor}>
                <div className={styles.logoContainer}>
                    <img src="/images/sponsors/smart_energy.png" alt="Major Sponsor Logo" />
                </div>
                <div className={styles.logoText}>
                    <p>
                        Thank you, <strong>SmartEnergy</strong>, for your unwavering support and generosity.
                        Your partnership plays a pivotal role in driving our vision forward, empowering us to
                        reach new heights and positively impact our community. We are deeply grateful for your 
                        commitment and shared passion for innovation and growth. Together, we will continue to 
                        create meaningful change. Your contribution is truly invaluable, and we look forward 
                        to achieving even greater success together!
                    </p>
                </div>
            </section>
        </div>
    );
}
