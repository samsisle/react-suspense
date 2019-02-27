import React, { Fragment } from "react";

import Modal from "./Modal";

export default function ModalStack({ emojis }) {
  return (
    <Fragment>
      {emojis &&
        emojis.map(emoji => (
          <Modal emoji={emoji.emoji} label={emoji.label} />
        ))}
    </Fragment>
  );
}
