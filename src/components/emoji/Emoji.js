import React, { useContext } from "react";
import { CopyToClipboard as CTP } from "react-copy-to-clipboard";

import Context from "../modal/Context";
import styles from "./emoji.module.css";

export default function Emoji({ label, emoji, emojiHex }) {
  const value = useContext(Context);
  const imageSrc = require("../../assets/svgs/" + emojiHex + ".svg");
  const onCopy = _ => value(imageSrc, label);
  return (
    <CTP text={emoji} onCopy={onCopy}>
      <span
        className={styles.emoji}
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
      >
        <img className={styles.emojiImage} src={imageSrc} alt={label} />
      </span>
    </CTP>
  );
}
