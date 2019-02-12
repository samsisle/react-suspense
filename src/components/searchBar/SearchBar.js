import React from "react";

import styles from "./searchBar.module.css";

const images = require("../../assets/svgs/" + "1f50d" + ".svg");

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <img className={styles.searchIcon} src={images} alt="search icon" />
        <input className={styles.input} placeholder="Search for emojis" />
      </div>
    </div>
  );
}
