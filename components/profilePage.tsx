import Image from "next/image";
import styles from "../styles/ProfilePage.module.css";
import ReactTooltip from "react-tooltip";

export default function ProfilePage() {
  return (
    <div className={styles.background}>
      <div className={styles.profileContainer}>
        <div className={styles.profileTextContainer}>
          <a className={styles.profileTopText}>ABOUT MYSELF</a>
          <a className={styles.profileMiddleText}>New Journey</a>
          <a className={styles.profileBottomText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
            nullam vehicula ipsum a. A diam maecenas sed enim. Sem viverra
            aliquet eget sit amet. Arcu risus quis varius quam. Habitant morbi
            tristique senectus et netus et malesuada fames ac. Ipsum a arcu
            cursus vitae congue. Vel pharetra vel turpis nunc eget lorem.
          </a>
        </div>

        <div className={styles.profileImageContainer}>
          <div className={styles.menphis}></div>
          <div className={styles.profileBackBorder}></div>
          <Image
            src="/duck.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className={styles.profile}
          />
        </div>
      </div>
    </div>
  );
}
