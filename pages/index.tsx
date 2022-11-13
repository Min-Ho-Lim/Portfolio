import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactTooltip from "react-tooltip";

import MainPage from "../components/mainPage";
import ScrollDown from "../components/scrollDown";

const arrayOfTen = Array(10).fill(0);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Min Ho Lim - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainPage />
        <ScrollDown />
        <div className={styles.secondPage}>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
        </div>
      </main>
      {/* create another page */}
      {/* <div className={styles.secondPage}>
        <a className={styles.secondPageContentLeftTopText}>About Me</a>
      </div> */}
    </div>
  );
}
