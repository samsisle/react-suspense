import React from 'react';

export default function Emoji({ label, emoji }) {
  return (
    <span
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {emoji}
    </span>
  );
}
