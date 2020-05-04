import React from "react";

import Emoji from "../emoji/Emoji";
import { hexToEmoji } from "../../services/hexToEmoji";
import { foodDrink } from "../../__data__/foodDrink";
import styles from "../../styles/container.module.css";

export default function FoodDrink() {
  return (
    <div className={styles.nameContainer}>
      <h2 className={styles.emojiType}>Food &amp; Drink</h2>
      <section className={styles.container}>
        {foodDrink.map(emoji => {
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
