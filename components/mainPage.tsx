import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactTooltip from "react-tooltip";

import ScrollDown from "../components/scrollDown";

const arrayOfTen = Array(10).fill(0);

export default function MainPage() {
  return (
    <div className={styles.spanCover}>
      <div className={styles.mainPage}>
        <a className={styles.topLeftText}>MHL</a>
        <div className={styles.iconBarContainer}>
          <div className={styles.iconBarStickBar} />
          <ReactTooltip place="right" type="dark" effect="float" />
          <a href="https://github.com/Min-Ho-Lim">
            <Image
              src="/github-icon.svg"
              alt="Github Icon"
              width={35}
              height={35}
              data-tip="My Github URL"
            />
          </a>
          <a href="https://www.linkedin.com/in/min-ho-lim/">
            <Image
              src="/linkedin-icon.svg"
              height={35}
              width={35}
              alt={"LinkedIn Icon"}
              className={styles.icon}
              data-tip="My LinkedIn Profile"
            />
          </a>
          <a href="mailto:minholim@outlook.com">
            <Image
              src="/mail-icon.svg"
              height={35}
              width={35}
              alt={"Mail Icon"}
              className={styles.icon}
              data-tip="My Email Address"
            />
          </a>
          <div className={styles.iconBarStickBar} />
        </div>
        <div className={styles.titlegroup}>
          <a className={styles.titletext}>👋 Hello, my name is</a>
          <a className={styles.titletextgradient}> Min Ho Lim</a>
        </div>
        <p className={styles.subtitle}>
          I'm a <b>software engineer 👨‍💻</b> based in <b>the United States</b>
        </p>

        <div className={styles.mainButton}>
          <a className={styles.mainButtonText}>My Résumé</a>
        </div>

        <ScrollDown />
      </div>
      {arrayOfTen.map((_, i) => (
        <span key={i} className={styles.span} />
      ))}
    </div>
  );
}
