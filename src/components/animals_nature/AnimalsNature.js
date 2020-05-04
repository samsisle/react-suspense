import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import { animalsNature } from "../../__data__/animalsNature";
import styles from "../../styles/container.module.css";

export default function AnimalsNature() {
  return (
    <div className={styles.nameContainer}>
      <h2 className={styles.emojiType}>Animals &amp; Nature</h2>
      <section className={styles.container}>
        {animalsNature.map(emoji => {
          return (
            <Emoji
              key={emoji.unicode}
              label={emoji.label}
              emojiHex={emoji.unicode}
              emoji={hexToEmoji(emoji.unicode)}
            />
          );
        })}
      </section>
    </div>
  );
}
