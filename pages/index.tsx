import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactTooltip from "react-tooltip";

import MainPage from "../components/mainPage";
import ScrollDown from "../components/scrollDown";
import ProfilePage from "../components/profilePage";

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
        <ProfilePage />
      </main>
    </div>
  );
}
