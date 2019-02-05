import React from 'react';

import Emoji from './components/emoji/Emoji';
import styles from './styles/App.module.css';

export default function App() {
  return (
    <div className={styles.test}>
      <Emoji emoji="🔥" label="fire" />
      <Emoji emoji="😍" label="heart_eyes" />
    </div>
  );
}
