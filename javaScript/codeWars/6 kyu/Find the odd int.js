/// Question ///
/*

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/



// ========================================== //



/// Answer ///
function findOdd(A) {
  let nums = [];
  let numsCounter = [];
  let bestNumber = 1;
  for(let i = 0; i < A.length; i++) {
    if(nums.indexOf(A[i]) === -1) {
      nums[nums.length] = A[i];
      numsCounter[nums.length - 1] = 1;
    } else {
      numsCounter[nums.indexOf(A[i])] += 1
    }
  }
  if(numsCounter.length == 0) {
    return A[0];
  } else {
    for(let i = 0; i < numsCounter.length; i++) {
      if(numsCounter[i] > bestNumber && numsCounter[i] % 2 == 1) {
        bestNumber = numsCounter[i]
      }
    }
  }
  return (nums[numsCounter.indexOf(bestNumber)])
}




/*
console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1,1,2]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

** output **
7
0
2
0
4
*/