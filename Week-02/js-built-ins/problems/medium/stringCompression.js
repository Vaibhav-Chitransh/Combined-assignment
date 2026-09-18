/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/
function compression(str) {
  const len = str.length;
  if(len <= 1) return str;

  let cnt = 1;
  let prev = str[0];

  let res = "";
  let iter = 1;
  while(iter < len) {
    let curr = str[iter];
    if(curr == prev) {
      cnt++;
    } else {
      res = res + prev;
      if(cnt > 1) res = res + cnt.toString();
      cnt = 1;
      prev = curr;
    }

    iter++;
  }

  res = res + prev;
  if(cnt > 1) res = res + cnt.toString();

  return res;
}

module.exports = compression;