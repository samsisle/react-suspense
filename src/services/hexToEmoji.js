export default function toUTF16(hex) {
  let decimal = parseInt(hex, 16);
  var TEN_BITS = parseInt("1111111111", 2);
  function u(codeUnit) {
    return "\\u" + codeUnit.toString(16).toUpperCase();
  }

  if (decimal <= 0xffff) {
    return u(decimal);
  }
  //   decimal -= 0x10000;

  // Shift right to get to most significant 10 bits
  var leadSurrogate = 0xd800 + (decimal >> 10);

  // Mask to get least significant 10 bits
  var tailSurrogate = 0xdc00 + (decimal & TEN_BITS);
  //   return u(leadSurrogate) + u(tailSurrogate);

  return String.fromCodePoint(decimal);
}
