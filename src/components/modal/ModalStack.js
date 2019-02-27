import React, { Fragment } from "react";

import Modal from "./Modal";

export default function ModalStack({ emojis }) {
  return (
    <Fragment>
      {emojis &&
        emojis.map(emoji => (
          <Modal key={emoji.label} emoji={emoji.emoji} label={emoji.label} />
        ))}
    </Fragment>
  );
}
