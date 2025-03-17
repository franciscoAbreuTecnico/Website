import React, { useEffect, useRef } from 'react';
import styles from '@/styles/news/News.module.scss';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function MyNewsCoverflowEffect() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper', {
      modules: [EffectCoverflow, Navigation, Pagination],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 2,
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
  }, []);  

  return (
    <>
      <div className={`swiper ${styles.swiper}`}>
        <div className={`swiper-wrapper ${styles.swiperWrapper}`}>
          <div className={`swiper-slide ${styles.swiperSlide}`}>
            <img src="/images/newsletter/2023/march.png" alt="March Newsletter" />
            <div className={`title ${styles.title}`}>
              <span>March 2023</span>
            </div>
          </div>
          <div className={`swiper-slide ${styles.swiperSlide}`}>
            <img src="/images/newsletter/2023/june.png" alt="June Newsletter" />
            <div className={`title ${styles.title}`}>
              <span>June 2023</span>
            </div>
          </div>
          <div className={`swiper-slide ${styles.swiperSlide}`}>
            <img src="/images/newsletter/2023/october.png" alt="October Newsletter" />
            <div className={`title ${styles.title}`}>
              <span>October 2023</span>
            </div>
          </div>
          <div className={`swiper-slide ${styles.swiperSlide}`}>
            <img src="/images/newsletter/2023/december.png" alt="December Newsletter" />
            <div className={`title ${styles.title}`}>
              <span>December 2023</span>
            </div>
          </div>
        </div>
        <div className={`swiper-pagination ${styles.swiperPagination}`}></div>
      </div>
        <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
        <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div>
    </>
  );
}
