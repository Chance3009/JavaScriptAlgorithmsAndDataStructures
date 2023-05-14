function palindrome(str) {
  let temp = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  for (let i=0; i<Math.floor(temp.length/2); i++) {
    if(temp[i] != temp[temp.length-1-i]) return false;
  }  
  return true;
}

palindrome("eye");