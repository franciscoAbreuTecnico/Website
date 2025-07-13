import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
//import styles from '@/styles/news/News.module.scss';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const availableYears = ['2021', '2022', '2023', '2024'];

export default function MyNewsCoverflowEffect() {
  const swiperRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    const newsletterData = {
      2021: ['january.png', 'may.png', 'august.png', 'november.png'],
      2022: ['february.png', 'may.png', 'august.png', 'november.png'],
      2023: ['march.png', 'june.png', 'october.png', 'december.png'],
      2024: ['march.png'],
    };

    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
    }

    setNewsletters(newsletterData[selectedYear] || []);

    swiperRef.current = new Swiper('.swiper', {
      modules: [EffectCoverflow, Navigation, Pagination],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 0,
      speed: 500,
      preventClicks: true,
      slidesPerView: 1.5,
      spaceBetween: 30,
      breakpoints: {
        1100: { slidesPerView: 2 },
        900: { slidesPerView: 1.8 },
        700: { slidesPerView: 1.5 },
        500: { slidesPerView: 1.2 },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: `swiper-pagination-bullet ${styles.swiperPaginationBullet}`,
        bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiperPaginationBulletActive}`,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 120,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      },
      on: {
        click(event) {
          if (swiperRef.current) {
            swiperRef.current.slideTo(event.clickedIndex);
          }
        },
      },
    });
  }, [selectedYear]); // Runs every time the selected year changes

  return (
    <>
      {/* Year Selection Buttons */}
      <div className={styles.yearButtons}>
        {availableYears.map(year => (
          <button
            key={year}
            className={`${styles.yearButton} ${year === selectedYear ? styles.active : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Swiper Carousel */}
      <div className={`swiper ${styles.swiper}`}>
        <div className={`swiper-wrapper ${styles.swiperWrapper}`}>
          {newsletters.map((newsletter, index) => (
            <div key={index} className={`swiper-slide ${styles.swiperSlide}`}>
              <img
                src={`/images/newsletter/${selectedYear}/${newsletter}`}
                alt={`${selectedYear} Newsletter`}
              />
            </div>
          ))}
        </div>
        <div className={`swiper-pagination ${styles.swiperPagination}`}></div>
      </div>
      <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
      <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div>
    </>
  );
}
