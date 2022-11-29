import Image from "next/image";
import styles from "../styles/SummaryPage.module.css";
import ReactTooltip from "react-tooltip";
import IconBar from "./iconBar";

export default function SummaryPage() {
  return (
    <div className={styles.SummaryPageContainer}>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryTextContainer}>
          <a className={styles.summaryTopText}>Summary</a>
          <a className={styles.summaryMiddleText}>Do you wish to contact me?</a>
          <a className={styles.summaryBottomText}>
            👍 Thanks for visiting my website.
            <br />
            If you wish to contact me, <br />
            Please contact me via 📧email or 🔗LinkedIn or you may use the
            contact form here
            <br />
            🙏 I am looking forward to hearing from you soon ❤️
          </a>
        </div>
        <IconBar />
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <div className={styles.contactTitle}>Contact Me</div>
          <div className={styles.contactSubTitle}>
            Fill out the form to send me an email and I will get back to you as
            soon as possible.
          </div>
        </div>
      </div>
    </div>
  );
}
