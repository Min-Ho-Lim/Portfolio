import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReactTooltip from "react-tooltip";

import MainPage from "../components/mainPage";
import ProfilePage from "../components/profilePage";
import ProjectPage from "../components/projectPage";
import SummaryPage from "../components/summaryPage";
import Footer from "../components/footer";

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
        <ProjectPage />
        <SummaryPage />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
