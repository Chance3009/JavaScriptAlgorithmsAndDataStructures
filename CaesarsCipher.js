function rot13(str) {
    let arr = [...str].map(char => char.charCodeAt(0)).map(charValue => (65 <= charValue && charValue<= 90)? ((((charValue % 65) + 13) % 26) + 65) : charValue);
    return String.fromCharCode(...arr);
  }
  
  rot13("SERR PBQR PNZCA");