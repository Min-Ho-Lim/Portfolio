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

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  demoLink?: string;
};

/**
 * If all of the projects use the same decorations and styles, then it would be quite
 * boring to see. So, I decided to depend on its index use the different decorations.
 * @param isEven Check if the project is even or odd
 * @returns return with decorations depends on the project index is even or odd
 */
const GenerateDecorations = (isEven: boolean) => {
  return !isEven ? (
    <>
      <div className={styles.boxContainer}>
        <span className={styles.boxDecoration} />
        <span className={styles.boxDecorationOutline} />
      </div>
      <span className={styles.menphis} />
    </>
  ) : (
    <>
      <div className={styles.boxContainerOther}>
        <span className={styles.boxDecorationOther} />
        <span className={styles.boxDecorationOutlineOther} />
      </div>
      <span className={styles.menphisOther} />
    </>
  );
};

const DisplayProject = (isEven: boolean, props: ProjectProps) => {
  return (
    <div className={styles.projectContainer}>
      {GenerateDecorations(isEven)}
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
    </div>
  );
};

// This is just a temporary props for showing the project page
// TODO: Remove this
const temporaryProps = {
  title: "VanLife",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  image: "/van-life.svg",
};

export default function ProjectPage() {
  return (
    <div className={styles.projectPageContainer}>
      <div className={styles.textsContainer}>
        <a className={styles.topText}>SHOWCASE</a>
        <a className={styles.mainText}>My Personal Projects</a>
      </div>

      {/* TODO: Take props from other files */}
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.swiper}
      >
        <SwiperSlide>{DisplayProject(false, temporaryProps)}</SwiperSlide>
        <SwiperSlide>{DisplayProject(true, temporaryProps)}</SwiperSlide>
        <SwiperSlide>{DisplayProject(false, temporaryProps)}</SwiperSlide>
      </Swiper>
    </div>
  );
}
