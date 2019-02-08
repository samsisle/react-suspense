import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import { peopleFaces } from "../../__data__/peopleFaces";
import styles from "./smileysPeople.module.css";

export default function SmileysPeople() {
  return (
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
  );
}
