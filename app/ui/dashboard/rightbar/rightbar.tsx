import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.</p>
          <button><MdPlayCircleFilled />Watch</button>
      </div>
      <div className={styles.item}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3>New server actions are available, partial pre-rendering is coming up!</h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.</p>
          <button><MdReadMore />Learn</button>
      </div>
    </div>
  );
};

export default Rightbar;