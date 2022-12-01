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
            Since childhood, I have always loved solving problems and
            challenging difficulties on the computer. So whenever I see a
            problem, I try to solve it first in any way. Then I think about
            whether there is any way to solve it more efficiently. This is what
            has driven the programming world. I love new programming challenges
            and am glad that I can use my skills to contribute to the world.
          </a>
        </div>

        <div className={styles.profileImageContainer}>
          <div className={styles.menphis}></div>
          <div className={styles.profileBackBorder}></div>
          <Image
            src="/profile-picture.jpeg"
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
