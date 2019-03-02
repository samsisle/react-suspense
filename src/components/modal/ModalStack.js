import React from "react";
import shortid from "shortid";

import Modal from "./Modal";
import Expire from "../expire/Expire";

export default function ModalStack({ emoji }) {
  return (
    <>
      <Expire key={shortid.generate()} delay={2000}>
        <Modal emoji={emoji.emoji} label={emoji.label} />
      </Expire>
    </>
  );
}
