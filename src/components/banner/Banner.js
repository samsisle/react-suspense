import React, { useState } from "react";

import titleEmojis from "../../__data__/titleEmojis";
import uniqueRNG from "../../services/uniqueRNG";
import useInterval from "../../services/useInterval";
import styles from "./banner.module.css";

export default function Banner() {
  const [array] = useState(titleEmojis);
  const [index, setIndex] = useState(uniqueRNG(array.length - 1, 0, null));

  const image = require("../../assets/svgs/" + array[index].unicode + ".svg");

  const handleIndex = _ => setIndex(uniqueRNG(array.length - 1, 0, index));

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
        ji
      </h1>
      <p />
    </div>
  );
}
