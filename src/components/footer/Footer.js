import React from "react";

import GitHub from "../../assets/icons/GitHub-Mark-32px.png";
import styles from "./footer.module.css";

const shrimp = require("../../assets/svgs/1f990.svg");
const avocado = require("../../assets/svgs/1f951.svg");

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>&copy; 2019 </span>
      <a
        className={styles.link}
        href="https://github.com/samsisle/react-suspense/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.icons} src={GitHub} alt="github" />
      </a>
      <a
        className={styles.link}
        href="https://github.com/catsaremlg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.icons} src={shrimp} alt="catsaremlg" />
      </a>
      <a
        className={styles.link}
        href="https://github.com/samsisle/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.icons} src={avocado} alt="samsisle" />
      </a>
    </footer>
  );
}
