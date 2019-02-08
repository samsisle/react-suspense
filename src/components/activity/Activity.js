import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import { activitySports } from "../../__data__/activitySports";
import styles from "../../styles/container.module.css";

export default function Activity() {
  return (
    <section className={styles.container}>
      {activitySports.map(emoji => {
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
