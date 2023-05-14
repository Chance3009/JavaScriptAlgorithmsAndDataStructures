function checkCashRegister(price, cash, cid) {
    let total = cid.reduce((sum, dict) => (sum += dict[1]), 0);
    let change = cash - price;
    let diff = cash - price;
    let arr = [];
    
    if (total == change) return {status: "CLOSED", change: cid};
    
    let money = [["PENNY", 0.01],
                 ["NICKEL", 0.05],
                 ["DIME", 0.1],
                 ["QUARTER", 0.25],
                 ["ONE", 1],
                 ["FIVE", 5],
                 ["TEN", 10],
                 ["TWENTY", 20],
                 ["ONE HUNDRED", 100]];
    
    for (let i=money.length-1; i>=0; i--) {
      let count = 0;
  
      while (cid[i][1] != 0 && diff > 0 && money[i][1] <= diff) {
        diff = (diff - money[i][1]).toFixed(2);
        count = Math.round((count + money[i][1])*100)/100;
        cid[i][1] = cid[i][1] - money[i][1];
      }
  
      if (count != 0) {
        let temp = [cid[i][0] , count];
        arr.push(temp);
      }
  
      if(diff <= 0) break;
    }
  
    if (total < change || diff > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } 
    
    return {status: "OPEN", change: arr};
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])