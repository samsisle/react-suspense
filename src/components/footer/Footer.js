import React from "react";

import styles from "./footer.module.css";
import GitHub from "../../assets/icons/GitHub-Mark-32px.png";

const Footer = _ => {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>&copy; 2019 </span>
      <a
        className={styles.link}
        href="https://github.com/samsisle/react-suspense"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.icons} src={GitHub} alt="github" />
      </a>
    </footer>
  );
};

export default Footer;
