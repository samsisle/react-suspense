import React from "react";

import styles from "./modal.module.css";

export default function Modal({ emoji, label }) {
  return (
    <div className={styles.container}>
      <img className={styles.emojiImage} src={emoji} alt={label} />
      <span>Copied to your clipboard!</span>
    </div>
  );
}
