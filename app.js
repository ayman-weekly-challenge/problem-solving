/*
Question: Write a JavaScript function that takes an array of numbers as input and returns the sum of all even numbers in the array.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: 12 (sum of 2, 4, and 6)
*/

function evenSum(arr) {
  const result = arr.reduce((acc, val) => {
    (val % 2 === 0) && (acc = acc + val);
    return acc;
  }, 0)
  return result;
}


/*
Question: Write a JavaScript function that takes a string as input and returns the reversed version of the string.

Example:
Input: "Hello, World!"
Output: "!dlroW ,olleH"

Hints:
- You can convert the string to an array using the `split` method.
- Use the `reverse` method to reverse the elements of the array.
- Finally, join the array elements back into a string using the `join` method.

Take your time to solve the problem, and let me know when you're ready to discuss your solution or if you need any further hints!
*/

const testingNumberArr = [1, 2, 3, 2, 4, 5, 1, 3];
const testingStringArr = ['apple', 'banana', 'orange', 'apple', 'grape', 'banana', 'orange'];

function reverseString(string) {
  let result = '';
  for (let index = string.length - 1; index >= 0; index--) {
    const element = string[index];
    result += element;
  }
  return result
}
// OR
function reverseStringSecond(string) {
  const result = string.split('').reverse().join('');
  return result;
}
/*

Question: Write a JavaScript function that takes an array of numbers as input and returns a new array with only the unique elements, removing any duplicates.

Example:
Input: [1, 2, 3, 2, 4, 5, 1, 3]
Output: [1, 2, 3, 4, 5]

Take your time to solve the problem, and let me know when you're ready to discuss your solution or if you need any further hints!
*/

function getUniqueElementsFirst(arr) {
  const uniqueArray = Array.from(new Set(arr));
  return uniqueArray;
}

function getUniqueElements(arr) {
  const obj = {}
  arr.forEach(element => {
    if (!obj.hasOwnProperty(obj[element]))
      obj[element] = element
  });
  let result = Object.keys(obj)
  return result
}
getUniqueElements(testingNumberArr)

/*
Question: Write a JavaScript function that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string.

Example:
Input: "Hello, World!"
Output: 3

Take your time to solve the problem, and let me know when you're ready to discuss your solution or if you need any further hints!
*/

function numberOfVowels(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let counter = 0;
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (vowels[i] === string[j].toLowerCase()) {
        counter += 1;
      }
    }
  }
  return counter;
}
/*
**Question:** Write a function called `isPalindrome` that takes a string as input and returns `true` if the string is a palindrome, and `false` otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, disregarding spaces, punctuation, and capitalization.

For example, the string "level" is a palindrome, but the string "hello" is not.

Take your time to think about the solution and let me know when you're ready to share your answer or if you need any hints!
*/

function isPalindrome(string) {
  let mid = parseInt(string.length / 2);
  let first = 0;
  let last = string.length - 1;

  for (let index = 0; index < mid; index++) {
    const firstLetter = string[first]
    const lastLetter = string[last]
    if (firstLetter !== lastLetter) {
      return false;
    }
    first++;
    last--;
  }
  return true
}

/*
Write a JavaScript function that takes a sentence as input and returns the longest word in the sentence. If there are multiple words with the same longest length, return the first occurrence.

For example:
const sentence = "I love programming and solving problems";
console.log(findLongestWord(sentence)); // Output: "programming"
*/
function findLongestWord(sentence) {
  const result = sentence.split(' ');
  let counter = 0;
  let longestWord = ''
  result.forEach(element => {
    if (element.length > counter) {
      counter = element.length;
      longestWord = element
    }
  });
  return longestWord;
}

/*
Write a JavaScript function that takes an array of numbers as input and returns the sum of all the positive numbers in the array.

For example:
const numbers = [3, -2, 8, -1, 5, -4, 7];
console.log(sumPositiveNumbers(numbers)); // Output: 23
*/
function sumPositiveNumbers(numbers) {
  const result = numbers.reduce((acc, val) => { 
    val > 0 && (acc += val)
      return acc;
  }, 0)
  return result
}
