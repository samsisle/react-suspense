import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import styles from "../../styles/container.module.css";

export default function AnimalsNature(props) {
  return (
    <div className={styles.nameContainer}>
      <h2 className={styles.emojiType}>Search Results</h2>
      <section className={styles.container}>
        {props.emojis.map(emoji => {
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
