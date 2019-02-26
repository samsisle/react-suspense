import React, { useContext } from "react";
import { CopyToClipboard as CTP } from "react-copy-to-clipboard";

import Bruh from "../../Bruh";
import Portal from "../modal/portal";
import style from "./emoji.module.css";

export default function Emoji({ label, emoji, emojiHex }) {
  const value = useContext(Bruh);
  const onCopy = _ => value();
  const images = require("../../assets/svgs/" + emojiHex + ".svg");
  return (
    <CTP text={emoji} onCopy={onCopy}>
      <span
        className={style.emoji}
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
      >
        <img className={style.emojiImage} src={images} alt={label} />
      </span>
    </CTP>
  );
}
