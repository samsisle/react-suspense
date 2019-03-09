import React, { useState } from "react";

import { titleEmojis } from "../../__data__/titleEmojis";
import { ReactComponent as PurpleHeart } from "../../assets/svgs/1f49c.svg";
import uniqueRNG from "../../services/uniqueRNG";
import useInterval from "../../services/useInterval";
import styles from "./banner.module.css";

export default function Banner() {
  const [array] = useState(titleEmojis);
  const [index, setIndex] = useState(uniqueRNG(array.length - 1, 0, null));

  const image = require("../../assets/svgs/" + array[index].unicode + ".svg");
  const handleIndex = _ => setIndex(uniqueRNG(array.length, 0, index));

  useInterval(_ => handleIndex(index), 5000);

  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>
        em
        <img
          className={styles.titleEmoji}
          src={image}
          alt={array[index].alt}
          onClick={handleIndex}
        />
        jiest
      </h1>
      <a
        className={styles.share}
        href="https://twitter.com/intent/tweet?text=feeling%20cozy%20and%20Emoji%20https%3A%2F%2Femojiest.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
      <div className={styles.motto}>
        Cue the emoji extravaganza <PurpleHeart className={styles.heart} />
      </div>
    </div>
  );
}
