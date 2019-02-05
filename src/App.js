import React from 'react';

import Emoji from './components/emoji/Emoji';
import styles from './styles/App.module.css';

export default function App() {
  return (
    <div className={styles.test}>
      <Emoji label="fire" emoji="🔥" />
      <Emoji label="heart_eyes" emoji="😍" />
    </div>
  );
}
