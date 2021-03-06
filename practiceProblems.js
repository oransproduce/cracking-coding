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

// 4.4 Check Balanced: Implement a function to check if a binary tree is balanced. For the purpose of this question, a balanced tree is defined to be such that the heights of the two subtrees of any node never differ by more than one.

function checkBalanced(node) {
  function calculateHeight(node) {
    if (node === null) {
      return -1;
    }
    const left = 1 + checkBalanced(node.left);
    if (left === Infinity) {
      return Infinity;
    }
    const right = 1 + checkBalanced(node.right);
    if (right === Infinity) {
      return Infinity
    }
    if (Math.abs(left - right) > 1) {
      return Infinity;
    }
    return left > right ? left : right;
  }
  return calculateHeight(node) === Infinity;
}

// 4.5 Validate BST: Implement a function to check if a binary tree is a binary search tree

function validateBST(node, min=null, max=null) {
  // tree is valid if root is greater than left and less than right
  if (node === null) {
    return true;
  }
  if ((min !== null && node.data < min) || (max !== null && node.data > max)) {
    return false;
  }
  if (!validateBST(node.left, min, node.data) || !validateBST(node.right, node.data, max)){
    return false;
  }
  return true;
}

// 4.6 Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent

function successor(node) {
  if (node.right) {
    // find smallest from node.right as root
    return helper(node.right, 'down');
  }
  if (!node.right && !node.left) {
    if (node.parent === null) {
      return null;
    }
    if (node.parent.data < node.data) {
      return helper(node.parent, 'up')
    } else {
      // right parent
      return node.parent;
    }
  }
  function helper(node, direction) {
    if (direction === 'down') {
      if (node.left) {
        return helper(node.left);
      } else {
        return node;
      }
    } else if (direction === 'up') {
      if (node.parent.data < node.data) {
        return helper(node.parent, 'up');
      } else {
        return node.parent;
      }
    }
  }

}

// 4.7 You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the first project is dependent on the second project). All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

function buildOrder(projects, dependencies) {
  // construct adjacency list
  let projectDependencies = {};
  for (const [dependent, project] of dependencies) {
    if (!projectDependencies[project]) {
      projectDependencies[project] = [dependent];
    } else {
      projectDependencies[project].push(dependent);
    }
  }

  function search(project, path, searchSpace) {
    path.push(project);
    if (path.length === projects.length) {
      return path;
    }
    for (let goTo of searchSpace) {
      let goToPath = search(goTo, path, searchSpace);
      if (goToPath) {
        return goToPath;
      }
    }
    return false;

  }
  let startingPoints = Object.keys(projectDependencies);
  for (let start of startingPoints) {
    let path = search(start, [], projectDependencies[start]);
    if (path) {
      return path;
    }
  }
  throw new Error();
}

//4.8 common ancestor

// 4.10 check subtrees

function checkSubtrees(tree1, tree2) {
  let t1 = [];
  let t2 = [];
  function inOrder(node) {
    if (node.left) {
      inOrder(node.left);
    }
    t1.push(node.value);
    t2.push(node.value)
    if (node.right) {
      inOrder(node.right);
    }
    const shorter = t1.length > t2.length ? t2 : t1;
    const longer = t1.length > t2.length ? t1 : t2;

    const shortString = JSON.stringify(shorter);
    const longString = JSON.stringify(longer);
    for (let i = 0; i < longString.length - shortString.length; i++) {
      if (longString.slice(i, shortString.length + i) === shortString) {
        return true;
      }
    }
    return false;
  }
}

// 4.11 random node

// 4.12 paths with sum:
function pathsWithSum(root, sum) {

  function sum(node) {
    if (node === null) {
      [];
    }
    let left = sum(node.left);
    let right = sum(node.right);

    left = left.map(total => total += node.value);
    left.push(node.value);
    right = right.map(total => total += node.value);
    return left + right;
  }
  return sum(root).filter(total => total === sum).length;
}

// 8.2 robotPaths
function robotPaths(grid, [x, y]) {
  //try right
  if (x === grid.length - 1 && y === grid.length - 1) {
    return grid;
  }
  if (x+1 < grid.length && grid[y][x+1] === 0) {
    grid[y][x+1] = 'x';
    const right = robotPaths(grid, [x+1, y]);
    if (right) {
      return right;
    }
    grid[y][x+1] = 0;
  }
  if (y+1 < grid.length && grid[y+1][x] === 0) {
    grid[y+1][x] = 'x';
    const down = robotPaths(grid, [x, y+1]);
    if (down) {
      return down;
    }
    grid[y+1][x] = 0;
  }
  return null;
}

//8.3 Magic Index
//A magic in dex in an array A[0...n-1] is defined to be an index uch that A[i] = i Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in Array A

function magicIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > i) {
      i = arr[i]
    } else if (arr[i] === i) {
      return i;
    }
  }
  return null;
}

//8.4 Power Set:
//Write a method to return all subsets of a set
//set of n
function powerSet(set, index) {
  if (index === set.length) {
    return [[]];
  } else {
    const all = powerSet(set, index + 1);
    const item = set[index];
    const more = [];
    for (const subset of all) {
      const newSubset = subset.slice();
      newSubset.push(item);
      more.push(newSubset);
    }
    return all.concat(more);
  }
}

// 8.5 recursive multiply

function recursiveMultiply(int1, int2) {
  if (int1 === 1) {
    return int2;
  }
  return int2 + recursiveMultiply(int1 - 1, int2);
}




// 8.6 towers of hanoi

// 8.7 permutations without dups write a method to compute all permutations of a string of unique characters
// function permutationsNoDups(str) {
//   let permutations = [];
//   function recurse(curr, remaining) {
//     if (remaining.length === 1) {
//       permutations.push(curr + remaining[0]);
//     } else {
//       for (let char of remaining) {
//         let filtered = remaining.filter(x => x !== char);
//         recurse(curr + char, filtered);
//       }
//     }
//   }
//   recurse('', str.split(''));
//   return permutations;
// }

function permutationsNoDups(str, memo) {
  let permutations = [];
  if (memo[str]) {
    return memo[str];
  }
  if (str.length === 1) {
    permutations.push(str);
  } else {
    for (let i = 0; i < str.length; i++) {
      const curr = str[i];
      const subPermutations = permutationsNoDups(str.slice(0, i) + str.slice(i+1), memo);
      for (let i = 0; i < subPermutations.length; i++) {
        permutations.push(curr + subPermutations[i]);
      }
    }
  }

  memo[str] = permutations;
  return permutations;
}

function permutationsWithDups(str, memo) {
  const permutations = [];
  if (memo[str]) {
    return memo[str];
  }
  if (str.length === 1) {
    permutations.push(str);
  } else {
    const unique = {};
    for (let char of str) {
      unique[char] = true;
    }
    unique = Object.keys(unique);
    let count = 0;
    for (let i = 0; i < unique.length; i++) {
      const curr = unique[count];
      const subPermutations = permutationsWithDups(str)
    }
  }
}

// 8.9 Parens: Implement an algorithm to print all valid (e.g. properly opened and closed) combinations of n pairs of parentheses.
// 2 => (()) ()()
// 3 => ()()() ((())) (())
function parentheses(n) {
  const combinations = [];
  if (n === 1) {
    return ['()'];
  }
  const subParens = parentheses(n-1);
  for (let sub of subParens) {
    if (sub === '()'.repeat(n-1)) {
      combinations.push('()' + sub);
      combinations.push('(' + sub + ')');
    } else {
      combinations.push('()' + sub)
      combinations.push('(' + sub + ')');
      combinations.push(sub + '()');
    }

  }
  return combinations;
}

// 8.10 paint fill implement the "paint fill" function that one might see on many image editing programs. That is given a screen represented by a two dimensional array of colors, a point, and a new color fill in the surrounding area until the color changes from the original color

function paintFill(pixels, point, color) {
  const [x, y] = point;
  const initialColor = pixels[y][x];
  const visited = {};
  function recursor(x, y) {
    if (visited[[x, y]]) {
      return;
    }
    visited[[x, y]] = true;
    if (!pixels[y] || !pixels[y][x]) {
      return;
    }
    if (pixels[y][x] !== initialColor) {
      return;
    } else {
      pixels[y][x] = color;
      recursor(x + 1, y);
      recursor(x - 1, y);
      recursor(x, y + 1);
      recursor(x, y - 1);
    }
  }
  recursor(x, y);
}

// 8.11 Coins, given an infinite number of quarters, dimes, nickels, and pennies, write code to calculate the number of ways of representing n cents

const denominations = [25, 10, 5, 1];
const coinSymbols = ['q', 'd', 'n', 'p']

function coins(n) {
  const combinations = [];
  function recurse(wallet, total, index) {
    if (index === 4) {
      return;
    }
    if (total === 0) {
      combinations.push(wallet);
      return;
    }
    if (total < 0) {
      return;
    }
    let newTotal = total;
    const skipWallet = Object.fromEntries(Object.entries(wallet));
    recurse(skipWallet, total, index + 1);
    while (newTotal > 0) {
      const newWallet = Object.fromEntries(Object.entries(wallet));
      newWallet[coinSymbols[index]] += 1;
      recurse(newWallet, total - denominations[index], index + 1);
      newTotal -= denominations[index]
    }
  }
  const wallet = {
    q: 0,
    d: 0,
    n: 0,
    p: 0,
  }
  recurse(wallet, n, 0);
  return combinations;
}

// class Board {
//   constructor(n) {
//     this._array = makeNewBoard(n);
//   }
//   togglePiece(x, y) {
//     this._array[y][x] = 1;
//   }
//   testHorizontal() {

//   }
//   testHorizontals() {
//     let count = 0;
//     for (let row of this._array) {
//       if (row.filter(piece => piece === 1).length > 1) {
//         return false;
//       }
//     }
//     return true;
//   }
//   testVertical() {

//   }
//   testVerticals() {
//     const col = [];
//     for (let row of this._array) {
//       col.push(row[isNaN])
//     }
//   }
//   testDiagnol() {

//   }
//   testMajorDiagnols() {

//   }
//   testMinorDiagnols() {

//   }
// }

// function makeNewBoard(n) {
//   const board = [];
//   for (i = 0; i < n; i++) {
//     const row = []
//     for (j = 0; j < n; j++) {
//       row.push(0);
//     }
//     board.push(row);
//   }
//   return board;
// }

// // 8.12 N Queens

// // 8.13 Stack of Boxes
// // You have a stack of n boxes, with widths wi, heights hi, and depths di. The boxes cannot be rotated and can only be stacked
// // on top of one another if each box in the stack is strictly larger than the box above it in width, height, and depth. Implement
// // a method to compute the height of the tallest possible stack. The height of a stack is the sum of the heights of each box 

// class Box {
//   constructor(width, height, depth) {
//     this.width = width;
//     this.height = height;
//     this.depth = depth;
//   }

//   volume() {
//     return this.width*this.height*this.depth;
//   }
// }

// class Stack {
//   constructor() {
//     this._storage = [];
//     this.size = 0;
//   }
//   push(value) {
//     this._storage.push(value);
//     this.size += 1;
//   }
//   pop() {
//     if (this.size > 1) {
//       this.size -= 1;
//       return this._storage.pop();
//     }
//   }
//   peek() {
//     if (this.size > 1) {
//       return this._storage[this.size - 1];
//     }
//   }
// }

// Bubblesort 

// const bubbleSort = function(arr) {
//   for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length - j - 1; i++) {
//       if (arr[i] > arr[i+1]) {
//         swap(arr, i, i+1);
//       }
//     }
//   }
//   return arr;
// }

// const bubbleSort = function(arr) {
//   const swap = function (i1, i2) {
//     const save = arr[i1];
//     arr[i1] = arr[i2];
//     arr[i2] = save;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j+1]) {
//         swap(j, j+1);
//       }
//     }
//   }
//   return  arr;

// }

function swap(arr, i1, i2) {
  let save = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = save;
}

const bubbleSort = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}
// Selection sort

// const selectionSort = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minValue = arr[i];
//     let minIndex = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < minValue) {
//         minValue = arr[j];
//         minIndex = j;
//       }
//     }
//     swap(arr, i, minIndex);
//   }
//   return arr;
// }

// selection sort iterate through find the min value then put it in sorted portion
// const selectionSort = function(arr) {
//   const swap = function(i1, i2) {
//     const save = arr[i1];
//     arr[i1] = arr[i2];
//     arr[i2] = save;
//   }
//   for (let swapIx = 0; swapIx < arr.length; swapIx++) {
//     let minValue = arr[swapIx];
//     let minIx = swapIx; 
//     for (let i = swapIx+1; i < arr.length; i++) {
//       if (arr[minIx] > arr[i]) {
//         minValue = arr[i];
//         minIx = i;
//       }
//     }
//     swap(swapIx, minIx);
//   }
//   return arr;
// }
const selectionSort = function(arr) {
  let swapValue;
  let swapIx;
  for (let i = 0; i < arr.length; i++) {
    swapValue = arr[i];
    swapIx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < swapValue) {
        swapValue = arr[j];
        swapIx = j;
      }
    }
    swap(arr, i, swapIx);
  }
  return arr;
}

// Insertion sort

// const insertionSort = function(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (var j = i - 1; j >= 0; j--) {
//       if (arr[j] > currentVal) {
//         arr[j+1] = arr[j];
//       } else {
//         break;
//       }
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }

const insertionSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insertValue = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (insertValue < arr[j]) {
        swap(arr, j, j+1);
      } else {
        
        break;
      }
    }
    swap(arr, i, j);
  }
  return arr;
}



// insertion sort take value and put into the spot in sorted array 
// const insertionSort = function(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i];
//     for (var j = i; arr[j] < currentVal && j > -1; j--) {
//       arr[j] = arr[j-1];
//     }
//     j++;
//     arr[j] = currentValue;
//   }
//   return arr;
// }

// bubble sort: start from index 0, loop through array, and swap adjacent values if the left
// most is bigger. each iteration of the outer loop you can go one less on the inner loop

// selection sort: loop through array and find smallest and swap with starting point. iterate the starting point
// as the array's left side becomes sorted

// insertion sort: divide array in two. slowly move divider right, each time bubbling up a space in the sorted left portion 
// and inserting the new value shifted from the right

// tradeoffs: all worst case quadratic (n^2), but for nearly sorted data, bubblesort and insertion sort work in linear time which
// is an advantage over the faster algorithms

// const merge = function (arr1, arr2) {
//   if (!arr1) {
//     return arr2;
//   }
//   if (!arr2) {
//     return arr1;
//   }
//   const output = [];
//   let arr1Index = 0;
//   let arr2Index = 0;
//   while (arr1Index < arr1.length && arr2Index < arr2.length) {
//     if (arr1[arr1Index] < arr2[arr2Index]) {
//       output.push(arr1[arr1Index]);
//       arr1Index++;
//     } else {
//       output.push(arr2[arr2Index]);
//       arr2Index++;
//     }
//   }
//   if (arr1Index !== arr1.length) {
//     output.push(...arr1.slice(arr1Index));2
//   }
//   if (arr2Index !== arr2.length) {
//     output.push(...arr2.slice(arr2Index));
//   }
//   return output;
// }

// const mergeSort = function(arr) {
//   if (arr.length === 1 || arr.length === 0) {
//     return arr;
//   }
//   const midIx = Math.floor(arr.length/2);
//   const left = mergeSort(arr.slice(0, midIx));
//   const right = mergeSort(arr.slice(midIx));
//   return merge(left, right);
// }

const merge = function(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  const merged = [];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      merged.push(arr1[index1]);
      index1++;
    } else {
      merged.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < arr1.length) {
    merged.push(arr1[index1]);
    index1++;
  }

  while (index2 < arr2.length) {
    merged.push(arr2[index2]);
    index2++;
  }
  return merged;
}

const mergeSort = function(arr) {
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, middleIndex));
  const right = mergeSort(arr.slice(middleIndex));
  return merge(left, right);
}

// const pivot = function(arr, start=0, end=arr.length-1) {
//   const pivotValue = arr[start];
//   let pivotIx = start;
//   for (let i = start+1; i <= end; i++) {
//     if (arr[i] < pivotValue) {
//       pivotIx++;
//       swap(arr, pivotIx, i);
//     }
//   }
//   swap(arr, start, pivotIx);
//   return pivotIx;
// }

// const quickSort = function(arr, left=0, right=arr.length-1) {
//   debugger
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     quickSort(arr, 0, pivotIndex-1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }

const pivot = function(arr, start, end) {
  const swap = function(i1, i2) {
    let save = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = save;
  }
  const pivotValue = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++;
      swap(pivotIndex, i);
    }
  }
  swap(pivotIndex, start);
  return pivotIndex;
}

const quickSort = function(arr, left=0, right=arr.length - 1) {
  debugger;
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}


