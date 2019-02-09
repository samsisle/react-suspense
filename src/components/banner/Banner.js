import React from "react";

import styles from "./banner.module.css";

const images = require("../../assets/svgs/" + "1f351" + ".svg");

const Banner = _ => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>
        em
        {/* <span className={styles.titleEmoji} role="img" aria-label="peach">
          🍑
        </span> */}
        <img className={styles.titleEmoji} src={images} alt="peach" />
        ji
      </h1>
      <p />
    </div>
  );
};

export default Banner;
