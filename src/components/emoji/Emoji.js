import React from 'react';

export default function Emoji({ label, symbol }) {
  return (
    <span
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  );
}
