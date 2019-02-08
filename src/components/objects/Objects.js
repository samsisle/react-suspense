import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import { objectsMedia } from "../../__data__/objectsMedia";
import styles from "../../styles/container.module.css";

export default function Objects() {
  return (
    <section className={styles.container}>
      {objectsMedia.map(emoji => {
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
  );
}
