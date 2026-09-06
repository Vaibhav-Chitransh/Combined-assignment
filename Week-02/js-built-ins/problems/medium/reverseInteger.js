/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
  let str = num.toString();
  let updatedStr = str;
  let isNeg = false;

  if(str[0] == '-') {
    updatedStr = str.slice(1);
    isNeg = true;
  }

  let ans = 0;
  for(let i=updatedStr.length - 1; i>=0; i--) {
    let num = updatedStr[i] - '0';
    ans = ans*10 + num;
  }

  if(isNeg) ans *= -1;
  return ans;
}

module.exports = reverseInteger;
