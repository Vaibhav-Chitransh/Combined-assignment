/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(s) {
  let str = s.trim();
  if(str == "") return null;
  let freq = {};

  for(let i=0; i<str.length; i++) {
    let key = str[i];
    if(key == ' ') continue;
    if(key in freq) freq[key] = freq[key] + 1;
    else freq[key] = 1;
  }

  for(let i=0; i<str.length; i++) {
    let ch = str[i];
    if(freq[ch] == 1) return str[i];
  }

  return null;
}
module.exports = nonrepeat;
