/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s = str.trim().toLowerCase();

  let i = 0;
  let j = s.length - 1;

  while(i < j) {
    if(!(s[i] >= 'a' && s[i] <= 'z')) {
      i++;
      continue;
    }
    if(!(s[j] >= 'a' && s[j] <= 'z')) {
      j--;
      continue;
    }
    if(s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;