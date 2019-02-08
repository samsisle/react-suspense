import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import { travelPlaces } from "../../__data__/travelPlaces";
import styles from "../../styles/container.module.css";

export default function TravelPlaces() {
  return (
    <section className={styles.container}>
      {travelPlaces.map(emoji => {
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
