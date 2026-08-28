/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let s = str.toLowerCase();
    let cnt = 0;

    for(let i=0; i<s.length; i++) {
      let ch = s[i];
      if((ch === 'a') || (ch === 'e') || (ch === 'i') || (ch === 'o') || (ch === 'u')) cnt++;
    }

    return cnt;
}

module.exports = countVowels;