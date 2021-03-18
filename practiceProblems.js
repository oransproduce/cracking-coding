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
