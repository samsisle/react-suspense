import React from "react";

import Emoji from "../emoji/Emoji";
import hexToEmoji from "../../services/hexToEmoji";
import { peopleFaces } from "../../__data__/peopleFaces";

export default function SmileysPeople() {
  return (
    <section>
      {peopleFaces.map(emoji => {
        return <Emoji label={emoji.label} emoji={hexToEmoji(emoji.unicode)} />;
      })}
    </section>
  );
}
