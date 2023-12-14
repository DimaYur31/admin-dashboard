import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>some project</p>
      <span>© All rights reserved.</span>
    </div>
  );
};

export default Footer;