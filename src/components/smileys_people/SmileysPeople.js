import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import { peopleFaces } from "../../__data__/peopleFaces";
import styles from "../../styles/container.module.css";

export default function SmileysPeople() {
  return (
    <div className={styles.nameContainer}>
      <h2 className={styles.emojiType}>Smileys &amp; People</h2>
      <section className={styles.container}>
        {peopleFaces.map(emoji => {
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
