import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/ProjectPage.module.css";
import ReactTooltip from "react-tooltip";
import { Swiper, SwiperSlide } from "swiper/react";

import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

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
  github?: string;
  demo?: string;
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
          src={props.image}
          alt={props.title}
          width={500}
          height={500}
          className={styles.projectImage}
        />
        <a className={styles.projectTitle}>{props.title}</a>
        <a className={styles.projectDescription}>{props.description}</a>

        <div className={styles.buttonGroup}>
          {props.github && (
            <AwesomeButtonSocial type="github" href={props.github}>
              Source Code
            </AwesomeButtonSocial>
          )}
          {props.demo && (
            <AwesomeButton type="instagram" size="medium" href={props.demo}>
              Demo
            </AwesomeButton>
          )}
        </div>
      </div>
    </div>
  );
};

const projectOneProps = {
  title: "Protfolio Website",
  description:
    "My personal portfolio website follow with agile methodology. No extra CSS library. Created from the complete scratch. You are just seeing the demo!",
  image: "/project-1.png",
  github: "https://github.com/Min-Ho-Lim/Portfolio",
  demo: "#",
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
        <SwiperSlide>{DisplayProject(false, projectOneProps)}</SwiperSlide>
        {/* <SwiperSlide>{DisplayProject(true, temporaryProps)}</SwiperSlide>
        <SwiperSlide>{DisplayProject(false, temporaryProps)}</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
