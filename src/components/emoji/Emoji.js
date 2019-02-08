import React from 'react';
import { CopyToClipboard as CTP } from 'react-copy-to-clipboard';

export default function Emoji({ label, emoji }) {
  const onCopy = () => alert('Copied!');

  return (
    <CTP text={emoji} onCopy={onCopy}>
      <span
        role="img"
        aria-label={label ? label : ''}
        aria-hidden={label ? 'false' : 'true'}
      >
        {emoji}
      </span>
    </CTP>
  );
}
