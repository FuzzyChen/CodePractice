//1. one transition 
//two loop 
function maxProfitBasic(priceHistory) {
  let profit = 0;
  if (priceHistory.length < 2) {
    return profit
  }
  for (let i = 0; i < priceHistory.length - 1; i++) {
    // j = i +1 !!!!!!!!!!!!!
    for (let j = i + 1; j < priceHistory.length; j++) {
      //
      if (priceHistory[j] - priceHistory[i] > profit) {
        profit = priceHistory[j] - priceHistory[i]
      }
      // profit=Math.max((priceHistory[j]-priceHistory[i]),profit)
    }
  }
  return profit
}
//one loop 
function maxProfitLoop(arr) {
  let profit = 0;
  if (arr.length < 2) {
    return profit
  }
  let buyprice = arr[0]; // change this to Inifinity
  for (let i = 1; i < arr.length; i++) {
    buyprice = Math.min(buyprice, arr[i]);
    // console.log(arr[j]-arr[i]);
    profit = Math.max((arr[i] - buyprice), profit)
  }
  return profit
}
console.log(maxProfitBasic([7, 1, 5, 3, 6, 4]))
console.log(maxProfitLoop([7, 1, 5, 3, 6, 4]))

//2. multiple transition

function maxProfitMultiple(arr) {
  let profit = 0;
  if (arr.length < 2) {
    return profit
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 0) { profit += arr[i + 1] - arr[i] }
  }
  return profit
}

console.log(maxProfitMultiple([7, 1, 5, 3, 6, 4]))

//largestRectangleArea
function largestRectangleArea(bars) {
  let area = 0
  for (let i = 0; i < bars.length; i++) {
    let minHeight = bars[i];
    let maxAreaIndex = 0;
    for (let j = i; j < bars.length; j++) {
      minHeight = Math.min(bars[j], minHeight)
      let currentArea = minHeight * (j - i + 1);
      maxAreaIndex = Math.max(currentArea, maxAreaIndex);
    }
    area = Math.max(maxAreaIndex, area);
  }
  return area
};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
//