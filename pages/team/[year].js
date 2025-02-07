import Image from 'next/image';
import { getTeamImages, getAvailableYears } from '@/components/utils/FetchFolderImages';
import styles from '@/styles/MyTeam.module.scss';
import defaultPage  from '@/components/MyDefaultPage.module.scss';

export async function getStaticProps({ params }) {
    const { year } = params;
    const teamData = getTeamImages(year);

    return { props: { teamData, year } };
}

export async function getStaticPaths() {
    const years = getAvailableYears();

    const paths = years.map(year => ({
        params: { year }
    }));

    return { paths, fallback: false };
}

export default function Team({ teamData, year }) {
    return (
        <div className={defaultPage.container}>
            <div className={defaultPage.background}></div>
            <div className={defaultPage.row}>
                <h1 className={defaultPage.title}>
                    <span className={defaultPage.white}>{'Team '}</span>
                    <span className={defaultPage.blue}>{year}</span>
                </h1>
            </div>
            {teamData.length === 0 ? (
                <p>No data available for {year}</p>
            ) : (
                teamData.map(({ name, images }) => (
                <div key={name}className={styles.teamSection}>
                    <div className={styles.area}>
                        <img src="\images\team\raio.png" alt="Team Icon" className={styles.teamIcon}/>
                        <h2>{name}</h2>
                    </div>
                    <div className={defaultPage.imageGrid}>
                        {images.map(image => (
                            <Image
                                key={image}
                                src={image}
                                alt={name}
                                width={150}
                                height={200}
                                className={styles.teamImage}
                            />
                        ))}
                    </div>
                </div>
                ))
            )}
        </div>
    );
}
