import React, { useState, useEffect } from "react";

import useInterval from "../../services/useInterval";
import styles from "./banner.module.css";

const emojis = [
  "1f61c",
  "1f602",
  "1f607",
  "1f60b",
  "1f4a9",
  "1f624",
  "1f608",
  "1f47d",
  "1f60d",
  "1f31a",
  "1f525",
  "1f351",
  "1f345",
  "1f36a",
  "1f369",
  "1f3c0",
  "1f52e",
  "1f4a3",
  "1f497"
];

const random = array => {
  return Math.floor(Math.random() * array.length);
};

export default function Banner() {
  const [index, setIndex] = useState(random(emojis));
  const image = require("../../assets/svgs/" + emojis[index] + ".svg");
  const checkRandom = array => {
    let randomNum = random(emojis);
    console.log(randomNum);
    // if (index === randomNum) {
    //   random(emojis);
    // } else return randomNum;
    return randomNum;
  };
  const handleIndex = _ => {
    setIndex(checkRandom(emojis));
  };
  // useEffect(
  //   _ => {
  useInterval(
    _ => {
      handleIndex(index);
    },
    1000,
    index
  );
  //   },
  //   [index]
  // );
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>
        em
        <img
          className={styles.titleEmoji}
          src={image}
          // alt="peach"
          onMouseOver={handleIndex}
          onClick={handleIndex}
        />
        ji
      </h1>
      <p />
    </div>
  );
}
