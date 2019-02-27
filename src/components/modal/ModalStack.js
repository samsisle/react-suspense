import React, { Fragment } from "react";

import Modal from "./Modal";

const ModalStack = props => {
  return (
    <Fragment>
      {props.emojis &&
        props.emojis.map(emojis => (
          <Modal emoji={emojis.emoji} label={emojis.label} />
        ))}
    </Fragment>
  );
};

export default ModalStack;
