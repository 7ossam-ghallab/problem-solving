/// Question ///
/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/



// ========================================== //



/// Answer ///
function squareSum(numbers){
  // let sum = 0;
  // numbers.forEach((n) =>
  //   sum += n * n
  // );
  // return sum;
  return numbers.reduce((sum, n) => (n*n) + sum, 0)
}




/*
console.log(squareSum([1, 2, 2]))
console.log(squareSum([1, 2, 3, 4, 5])) // (1*1) + (2*2) + (3*3) + (4*4) + (5*5) = 1 + 4 + 9 + 16 + 25 = 55

** output **
9
55
*/