/// Question ///
/*

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 181181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/



// ========================================== //



/// Answer ///
function squareDigits(num){
  // let final_result = '';
  // num.toString().split("").forEach(element => {
  //   final_result += (element * element).toString();
  // });
  // return +final_result;

  // let string = num.toString();
  // let results = [];
  // for (var i = 0; i < string.length; i++){
  //     results[i] = string[i] * string[i];
  // }
  // return +(results.join(''));

  return +(num.toString().split('').map(i => i*i).join(''));
}




/*
console.log(squareDigits(1234))
console.log(squareDigits(9119))
console.log(squareDigits(765))

** output **
14916
811181
493625
*/