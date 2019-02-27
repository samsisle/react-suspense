import React from "react";

import styles from "./modal.module.css";

export default function Modal({ emoji, label }) {
  return (
    <div className={styles.container}>
      <span>copied: </span>
      <img className={styles.emojiImage} src={emoji} alt={label} />
    </div>
  );
}
