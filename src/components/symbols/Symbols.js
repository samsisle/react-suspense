import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import { symbols } from "../../__data__/symbols";
import styles from "../../styles/container.module.css";

export default function Symbols() {
  return (
    <section className={styles.container}>
      {symbols.map(emoji => {
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
