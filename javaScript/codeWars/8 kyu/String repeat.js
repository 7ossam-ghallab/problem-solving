/// Question ///
/*

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/



// ========================================== //



/// Answer ///
function repeatStr (n, s) {
  // let final_str ="";
  // for(let i=0; i < n; i++) // while(n--)
  //   final_str+=s;
  // return final_str;
  return s.repeat(n);
}




/*
console.log(repeatStr(6, "I"))
console.log(repeatStr(5, "Hello"))

** output **
IIIIII
HelloHelloHelloHelloHello
*/