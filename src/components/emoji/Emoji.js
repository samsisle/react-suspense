import React from "react";
import { CopyToClipboard as CTP } from "react-copy-to-clipboard";

import style from "./emoji.module.css";

export default function Emoji({ label, emoji, emojiHex }) {
  const onCopy = () => alert("Copied!");
  const images = require("../../assets/svgs/" + emojiHex + ".svg");
  console.log(images);
  return (
    <CTP text={emoji} onCopy={onCopy}>
      <span
        className={style.emoji}
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
      >
        <img src={images} width="70px" alt={label} />
      </span>
    </CTP>
  );
}
