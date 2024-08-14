/// Question ///
/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/



// ========================================== //



/// Answer ///
function solution(number){
  let sum = 0;
  if(number <= 2) {
    // console.log(0);
    return 0;
  } else {
    while(--number) {
      if(number % 3 == 0 || number % 5 == 0) {
        // console.log(number)
        sum += number
      }
    }
  }
  return sum;
}




/*
console.log(solution(-10)) // 0
console.log(solution(10)) // 3, 5, 6, 9 => 23
console.log(solution(12)) // 3, 5, 6, 9, 10 => 23
console.log(solution(15)) // 3, 5, 6, 9, 10, 12 => 45
console.log(solution(30)) // 3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27 => 195

** output **
0
23
33
45
195
*/