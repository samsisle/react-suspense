import React from "react";

import Modal from "./Modal.js";

const ModalStack = props => {
  return (
    <div>
      {props.emojis &&
        props.emojis.map(emojis => (
          <Modal emoji={emojis.emoji} label={emojis.label} />
        ))}
    </div>
  );
};

export default ModalStack;
