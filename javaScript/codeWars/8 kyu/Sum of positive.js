/// Question ///
/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/



// ========================================== //



/// Answer ///
function positiveSum(arr) {
  // let sum = 0;
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     sum += arr[i];
  //   }
  // }
  // return sum;

  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}




/*
console.log(positiveSum([1, -4, 7, 12]))
console.log(positiveSum([10, -20, 30, -40, 50, -60, 70, -80, 90]))

** output **
20
250
*/