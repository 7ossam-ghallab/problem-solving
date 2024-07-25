/// Question ///
/*

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

*/



// ========================================== //



/// Answer ///
function numberToString(num) {
  // return ""+num;
  return num.toString(); 
}




/*
console.log(numberToString(123), typeof(numberToString(123)))
console.log(123, typeof(123))

** output **
123 string
123 number
*/