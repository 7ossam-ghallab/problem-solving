/// Question ///
/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/



// ========================================== //



/// Answer ///
function getCount(str) {
  // let vowelsCount = 0;
  // str.split("").forEach((x) => {
  //   if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ||
  //     x == "A" || x == "E" || x == "I" || x == "O" || x == "U"){
  //     vowelsCount += 1;
  //   }
  // });  
  // return vowelsCount;

  // return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
  
  return (str.match(/[aeiou]/ig)||[]).length;
}




/*
console.log(getCount("abcdefghij")) // a, e, i [3]
console.log(getCount("i am front-end dev")) // i, a, o, e, e [5]
console.log(getCount("hello world")) // e, o, o [3]
console.log(getCount("!!!!!!")) // [0]

** output **
3
5
3
0
*/