// 1.1
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
function uniqueCharacters(string) {
  let chars = {};
  for (let char of string) {
    if (char in chars) {
      return false;
    } else {
      chars[char] = 1;
    }
  }
  return true;
}

// 1.1 unique characters in place
function uniqueCharactersInPlace(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (i === j) {
        continue;
      }
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}

// 1.2 check permutation
// given two strings, write a method to decide if one is a permutation of the other

// assume that str1 is shorter than str2
function checkPermutation (str1, str2) {
  function characterCount (str) {
    const chars = {};
    for (let char of str) {
      if (!chars[char]) {
        chars[char] = 1;
      } else {
        chars[char] += 1;
      }
    }
    return chars;
  }
  const chars1 = characterCount(str1);
  for (let i = 0; i < str2.length - str1.length + 1; i++) {
    let sliced = str2.slice(i, i + str1.length);
    let chars2 = characterCount(sliced);
    if (JSON.stringify(Object.keys(chars1)) === JSON.stringify(Object.keys(chars2)) && JSON.stringify(Object.values(chars1)) === JSON.stringify(Object.values(chars2))) {
      return true;
    }
  }
  return false;
}

// 1.3 URLify
// Write a method to replace all spaces in a string with %20. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the true length of the string.
function urlify(str) {
  let split = str.split('');
  split = split.map((char) => char === ' ' ? '%20' : char);
  return split.join('');
}

// 1.4 Palindrome Permutation
//recursive slow solution
// function palindromePermutation(str, remaining) {
//   if (!remaining) {
//     remaining = str.split('');
//     str = '';
//   }
//   if (remaining.length === 0) {
//     console.log(str);
//     return str === str.split('').reverse().join('');
//   } else {
//     let result = false;
//     let count = 0;
//     for (let remainChar of remaining) {
//       let newRemaining = remaining.filter((c, i) => c !== remainChar || count !== i);
//       result = result || palindromePermutation(str + remainChar, newRemaining);
//       count++;
//     }
//     return result;
//   }
// }

function palindromePermutation(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  let counts = Object.values(charCount);
  let odd = 0;
  let even = 0;
  for (let count of counts) {
    if (count % 2 === 1) {
      odd += 1;
    } else {
      even += 1;
    }
  }
  return odd <= 1;
}

// 1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway (str1, str2) {
  if (str1 === str2) {
    return true;
  }
  if (str1.length === str2.length) {
    // test for replacement
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count += 1;
      }
    }
    return count < 2;
  } else {
    if (str1.length > str2.length + 1) {
      return false;
    }
    const shorter = str1.length > str2.length ? str2 : str1;
    const longer = str1.length > str2.length ? str1 : str2;

    const characterIndex = {};

    for (let i = 0; i < longer.length; i++) {
      characterIndex[longer[i]] = i;
    }

    for (let j = 0; j < shorter.length; j++) {
      if (j >= characterIndex[shorter[j]] + 2) {
        return false;
      }
    }
    return true;
  }
}

function stringCompression (str) {
  let outputString = '';
  let compressed = false;
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let counter = 1;
    while (str[i + 1] === current) {
      compressed = true;
      counter += 1;
      i += 1;
      if (i === str.length - 2) {
        if (current === str[str.length - 1]) {
          counter ++;
          i ++;
          outputString += current + counter;
          return outputString;
        } else {
          outputString += current + counter;
          outputString += str[str.length - 1] + '1';
          return outputString;
        }
      }
    }
    outputString += current + counter;
  }
  if (!compressed) {
    return str;
  }
}

// 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees in place
function rotateMatrix(matrix) {
  for (let y = 0; y < Math.floor(matrix.length / 2); y++) {
    for (let x = 0; x < matrix.length; x++) {
      let top = matrix[y][x];
      matrix[y][x] = matrix[matrix.length - 1 - y][x];
      matrix[matrix.length - 1 - y][x] = top;
    }
  }
  for (let x = 0; x < Math.floor(matrix.length / 2); x++) {
    for (let y = 0; y < matrix.length; y++) {
      let left = matrix[y][x];
      matrix[y][x] = matrix[y][matrix.length - 1 - x];
      matrix[y][matrix.length - 1 - x] = left;
    }
  }
  console.log(matrix);
}

// 1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0
function zeroMatrix(matrix) {
  const zeroCol = {};
  const zeroRow = {};
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[y][x] === 0) {
        zeroCol[x] = 1;
        zeroRow[y] = 1;
      }
    }
  }
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix.length; x++) {
      if (!zeroRow[y] && !zeroCol[x]) {
        continue;
      } else {
        matrix[y][x] = 0;
      }
    }
  }
}

//1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
function stringRotation(str1, str2) {
 // str1: abcd
 // str2: cdab

 let test = str1 + str2;

 for (let i = 0; i < str1.length - 1; i++) {
   let sliced = test.slice(0 + i, str1.length + i);
   if (test === str2) {
     return true;
   }
 }
 return false;
}