import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/ProjectPage.module.css";
import ReactTooltip from "react-tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
// core version + navigation, pagination modules:
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SingleProject = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.boxContainer}>
        <span className={styles.boxDecoration} />
        <span className={styles.boxDecorationOutline} />
      </div>
      <div className={styles.carousel}>
        <Image
          src="/van-life.svg"
          alt="Project-1"
          width={500}
          height={500}
          className={styles.projectImage}
        />
        <a className={styles.projectTitle}>VanLife</a>
        <a className={styles.projectDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </a>
      </div>
      <span className={styles.menphis} />
    </div>
  );
};

export default function ProjectPage() {
  return (
    <div className={styles.projectPageContainer}>
      <div className={styles.textsContainer}>
        <a className={styles.topText}>SHOWCASE</a>
        <a className={styles.mainText}>My Personal Projects</a>
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.swiper}
      >
        <SwiperSlide>{SingleProject()}</SwiperSlide>
        <SwiperSlide>{SingleProject()}</SwiperSlide>
      </Swiper>
    </div>
  );
}
