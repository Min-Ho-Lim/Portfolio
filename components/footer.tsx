import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.copyRight}>
        Copyright ©2022 All rights reserved to{" "}
        <a className={styles.minholim}>Min Ho Lim</a> | Design is Created by{" "}
        <a href="https://twitter.com/timeo_chauvin" className={styles.timeo}>
          Timeo Chauvin
        </a>
      </div>
    </div>
  );
}
