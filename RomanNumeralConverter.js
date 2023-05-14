function convertToRoman(num) {
    let arr = num.toString().split("");
    
    let tenthRoman = {1: "I", 10: "X", 100: "C", 1000: "M"};
    let fifthRoman = {5: "V", 50: "L", 500: "D"};
  
    let ansArr = [];
   
    for (let i=0; i<arr.length; i++) {
      switch (true) {
        case (arr[i] == "0"): break;
        case(arr[i] == "4"): 
          ansArr.push(Object.values(tenthRoman)[arr.length-i-1] + Object.values(fifthRoman)[arr.length-i-1]);
          break;
        case(arr[i] == "9"): 
          ansArr.push(Object.values(tenthRoman)[arr.length-i-1] + Object.values(tenthRoman)[arr.length-i]);
          break;
        case (arr[i] >= "5"): 
          ansArr.push(Object.values(fifthRoman)[arr.length-i-1]);
        case (arr[i] >= "6" || arr[i] <= "3"):
          ansArr.push(Object.values(tenthRoman)[arr.length-i-1].repeat(arr[i] % 5));
      }
    }
    return ansArr.join("");
  }
  
  convertToRoman(999);