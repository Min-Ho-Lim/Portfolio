import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const arrayOfTen = Array(10).fill(0);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Min Ho Lim - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.mainPage}>
          <a className={styles.topLeftText}>MHL</a>
          <div className={styles.titlegroup}>
            <a className={styles.titletext}>👋 Hello, my name is</a>
            <a className={styles.titletextgradient}> Min Ho Lim</a>
          </div>
          <p className={styles.subtitle}>
            I'm a <b>software engineer 👨‍💻</b> based in <b>the United States</b>
          </p>
        </div>
        {/* Create 10 of spans */}
        {arrayOfTen.map((_, i) => (
          <span key={i} className={styles.span} />
        ))}
      </main>
    </div>
  );
}
