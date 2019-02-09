import React from "react";

import styles from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <input className={styles.input} placeholder="Search emoji" />
      </div>
    </div>
  );
}
