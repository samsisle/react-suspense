import React from 'react';

export default function Emoji({ label, emoji }) {
  return (
    <a data-clipboard-text={emoji}>
      <span
        role="img"
        aria-label={label ? label : ''}
        aria-hidden={label ? 'false' : 'true'}
      >
        {emoji}
      </span>
    </a>
  );
}
