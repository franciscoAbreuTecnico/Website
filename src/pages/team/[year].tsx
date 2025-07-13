import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getTeamImages, getAvailableYears } from "../../components/utils/FetchFolderImages";
import MyDefaultPage from "../../components/DefaultPage";
//import styles from '@/styles/Team.module.scss';
//import defaultPage from '@/styles/DefaultPage.module.scss';

export async function getStaticProps({ params }) {
  const { year } = params;
  const teamData = getTeamImages(year);

  return { props: { teamData, year } };
}

export async function getStaticPaths() {
  const years = getAvailableYears();

  const paths = years.map(year => ({
    params: { year },
  }));

  return { paths, fallback: false };
}

export default function Team({ teamData, year }) {
  const router = useRouter();
  const [focusedImage, setFocusedImage] = useState(null);
  const [focusedCardImage, setFocusedCardImage] = useState(null);

  const MIN_TEAM_YEAR = 2022;
  const MAX_TEAM_YEAR = 2024;

  const currentYear = parseInt(year, 10);

  const handleYearChange = direction => {
    const newYear = direction === "next" ? currentYear + 1 : currentYear - 1;
    return router.push(`/team/${newYear}`);
  };

  useEffect(() => {
    setFocusedCardImage(teamData.team);
  }, [teamData]);
  /* <div className={defaultPage.container}>
      <div className={defaultPage.background}></div>
      <div className={defaultPage.row}>
        <button
          onClick={() => handleYearChange('prev')}
          className={`${styles.yearButton} ${currentYear <= MIN_TEAM_YEAR ? styles.hiddenButton : ''}`}
        >
          {'<'}
        </button>

        <h1 className={defaultPage.title}>
          <span className={defaultPage.white}>{'Team '}</span>
          <span className={defaultPage.blue}>{year}</span>
        </h1>

        <button
          onClick={() => handleYearChange('next')}
          className={`${styles.yearButton} ${currentYear >= MAX_TEAM_YEAR ? styles.hiddenButton : ''}`}
        >
          {'>'}
        </button>
      </div>

      <div className={styles.sidetoside}>
        <div>
          {teamData.data.length === 0 ? (
            <p>No data available for {year}</p>
          ) : (
            teamData.data.map(({ name, images }) => (
              <div key={name} className={styles.teamSection}>
                <div className={styles.area}>
                  <img src="/images/team/raio.webp" alt="Team Icon" className={styles.teamIcon} />
                  <h2>{name}</h2>
                </div>
                <div className={defaultPage.imageGrid}>
                  {images.map(image => (
                    <Image
                      key={image}
                      src={image}
                      alt={name}
                      width={125}
                      height={125}
                      loading="lazy" // Enable lazy loading
                      className={`${styles.teamImage} ${focusedImage === image ? styles.focused : ''}`}
                      onClick={() => {
                        setFocusedImage(image);
                        setFocusedCardImage(image.slice(0, -5) + '_carta.webp');
                      }}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {focusedCardImage && (
          <Image
            src={focusedCardImage}
            alt="Focused Image"
            width={300}
            height={400}
            loading="lazy"
            className={styles.mainImage}
          />
        )}
      </div>
    </div> */
  return (
    <MyDefaultPage>
      <div></div>
    </MyDefaultPage>
  );
}
