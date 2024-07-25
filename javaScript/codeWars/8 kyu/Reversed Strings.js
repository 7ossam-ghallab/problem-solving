/// Question ///
/*

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/



// ========================================== //



/// Answer ///
function solution(str){
  // var output = '';
  // for (var i = str.length - 1; i >= 0; i--)
  //   output += str[i];
  // return output;
  return str.split('').reverse().join('');
}




/*
console.log(solution("hello"))
console.log(solution("world"))
console.log(solution("word"))

** output **
olleh
dlrow
drow
*/