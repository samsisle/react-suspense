import React from "react";

import styles from "./banner.module.css";

const images = require("../../assets/svgs/" +
  "1f351" +
  ".svg");

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>
        em
        <img
          className={styles.titleEmoji}
          src={images}
          alt="peach"
        />
        ji
      </h1>
      <p />
    </div>
  );
};
