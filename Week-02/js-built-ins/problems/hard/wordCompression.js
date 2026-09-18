/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/


function compressWords(arr) {
  let len = arr.length;
  if(len <= 1) return arr;

  let prev = arr[0];
  let freq = 1;
  let iter = 1;

  let res = [];

  while(iter < len) {
    let curr = arr[iter];
    if(curr == prev) freq++;
    else {
      let word = prev;
      if(freq > 1) word += freq.toString();

      res.push(word);
      prev = curr;
      freq = 1;
    }

    iter++;
  }

  let word = prev;
  if(freq > 1) word += freq.toString();
  res.push(word);

  return res;
}


module.exports = compressWords;
