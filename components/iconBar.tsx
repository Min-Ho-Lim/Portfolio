import Image from "next/image";
import styles from "../styles/IconBar.module.css";
import ReactTooltip from "react-tooltip";

// Since the icon bar is used in multiple pages, I decided to make it a common component
export default function IconBar() {
  return (
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
  );
}
