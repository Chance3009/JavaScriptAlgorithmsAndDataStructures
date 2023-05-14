function telephoneCheck(str) {
    let temp = str.replace(/\s/g, "");
    let regex = /^1?(\([0-9]{3}\)|[0-9]{3})-?[0-9]{3}-?[0-9]{4}$/;
    return regex.test(temp);
  }
  
  telephoneCheck("555-555-5555");