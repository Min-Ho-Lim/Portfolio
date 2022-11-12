import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Min Ho Lim - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <a className={styles.topLeftText}>MHL</a>
          <div className={styles.titlegroup}>
            <a className={styles.titletext}>👋 Hello, my name is</a>
            <a className={styles.titletextgradient}> Min Ho Lim</a>
          </div>
          <p className={styles.subtitle}>
            I'm a <b>software engineer 👨‍💻</b> based in <b>the United States</b>
          </p>

          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
        </h1>

        <p className={styles.description}>
          This is my portfolio website. I am a software engineer.
        </p>
        <div className={styles.grid}>
          {/* <Link href="/about">
                        <a className={styles.card}>
                            <h2>About &rarr;</h2>
                            <p>Learn about me</p>
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a className={styles.card}>
                            <h2>Blog &rarr;</h2>
                            <p>Read my blog</p>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className={styles.card}>
                            <h2>Projects &rarr;</h2>
                            <p>Check out my projects</p>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={styles.card}>
                            <h2>Contact &rarr;</h2>
                            <p>Get in touch with me</p>
                        </a>
                    </Link> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
