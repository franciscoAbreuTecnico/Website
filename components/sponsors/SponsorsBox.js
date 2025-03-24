import styles from "../../styles/sponsor/SponsorsBox.module.scss";
import { sponsorInformation } from "../textContent/SponsorsSectionTexts";
import Image from "next/image";

export default function MySponsorsBox({ type }) {
    const sponsors = sponsorInformation[type] || [];
    const sectionTitle = type.charAt(0).toUpperCase() + type.slice(1) + " Sponsors";

    return (
        <section className={`${styles.sponsorSection} ${styles[type]}`}>
            <h2>{sectionTitle}</h2>
            <div className={styles.logoGrid}>
                {sponsors.map((sponsor, index) => (
                    <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                        <Image
                        src={sponsor.logo}
                        alt={`Sponsor ${sponsor.name}`}
                        width={160}
                        height={90}
                        style={{ objectFit: "contain" }}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}
