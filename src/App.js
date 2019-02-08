import React from "react";

import SmileysPeople from "./components/smileys_people/SmileysPeople";
import Emoji from "./components/emoji/Emoji";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.test}>
      <SmileysPeople />
    </div>
  );
}
