
describe('string problems', function() {
  describe('1.1 string is unique', function() {
    it('correctly identifies false strings', function() {
      expect(uniqueCharacters('aab')).to.equal(false);
    });
    it('correctly identifies true strings', function() {
      expect(uniqueCharacters('abc')).to.equal(true);
    });
  });

  describe('1.1 string is unique in place', function() {
    it('correctly identifies false strings', function() {
      expect(uniqueCharactersInPlace('aab')).to.equal(false);
    });
    it('correctly identifies true strings', function() {
      expect(uniqueCharactersInPlace('abc')).to.equal(true);
    });
  });

  describe('1.2 string permutation', function() {
    it('correctly identifies false cases', function() {
      expect(checkPermutation('aab', 'slabxalslwj')).to.equal(false);
    });
    it('correctly identifies true cases', function() {
      expect(checkPermutation('aab', 'slabalslwj')).to.equal(true);
    });
    it('correctly identifies true cases at end of str2', function() {
      expect(checkPermutation('aab', 'xbaa')).to.equal(true);
    });
  });

  describe('1.3 urlify', function() {
    it('works for test string', function() {
      expect(urlify(' a a s 2')).to.equal('%20a%20a%20s%202');
    });
  });

  describe('1.4 palindrome permutation', function() {
    it('return true for correct cases', function() {
      expect(palindromePermutation('tactcoa')).to.equal(true);
    });
    it('works for test string', function() {
      expect(palindromePermutation('rarda')).to.equal(true);
    });
    it('works for test string', function() {
      expect(palindromePermutation('aweefsss')).to.equal(false);
    });
  });

  describe('1.5 one away', function() {
    it('return true for correct cases', function() {
      expect(oneAway('pale', 'ple')).to.equal(true);
    });
    it('works for test string', function() {
      expect(oneAway('pales', 'pale')).to.equal(true);
    });
    it('works for test string', function() {
      expect(oneAway('pale', 'bale')).to.equal(true);
    });
    it('works for test string', function() {
      expect(oneAway('pale', 'bake')).to.equal(false);
    });
  });

  describe('1.6 string compression', function() {
    it('works on string of three a\'s', function() {
      expect(stringCompression('aaa')).to.equal('a3');
    });
    it('works on string without compression at end', function() {
      expect(stringCompression('aabc')).to.equal('a2b1c1');
    });
  });

  describe('1.7 rotate matrix', function() {
    it('works on matrix of 1-9', function() {
      let input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      rotateMatrix(input);
      let rotated = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ];
      for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input.length; x++) {
          expect(input[y][x]).to.equal(rotated[y][x]);
        }
      }

    });
  });

  describe('1.8 zero matrix', function() {
    it('works for matrix', function() {
      let input = [
        [0, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
      ];
      zeroMatrix(input);
      let expected = [
        [0, 0, 0],
        [0, 5, 0],
        [0, 0, 0]
      ];
      for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input.length; x++) {
          expect(input[y][x]).to.equal(expected[y][x]);
        }
      }

    });
  });
});
describe('graph tree problems', () => {
  describe('4.7 build order', function() {
    it('works for test input output', function() {
      const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
      const dependencies = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];
      expect(buildOrder(projects, dependencies)).to.deep.equal(['f', 'e', 'a', 'b', 'd', 'c']);
    });
  });

});

describe('chapter 8 recursion', () => {
  describe('8.2 robot paths', function() {
    it('works for test input output', function() {
      const grid = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1],
        [0, 1, 0, 0, 0]
      ];
      const expected = [
        [0, 0, 0, 0, 0],
        ['x', 1, 1, 1, 0],
        ['x', 'x', 'x', 1, 0],
        [0, 1, 'x', 1, 1],
        [0, 1, 'x', 'x', 'x']
      ];
      let path = robotPaths(grid, [0, 0]);
      expect(path).to.deep.equal(expected)
    });
  });
  describe('8.4 powerset', () => {
    it('works for set of [1, 2, 3]', () => {
      const set = [1, 2, 3];
      const output = powerSet(set, 0);
      console.log(output);
      const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1,2,3]];
    })
  })
  describe('8.5 recursive multiply', function() {
    it('works for test input output', function() {
      expect(recursiveMultiply(3, 5)).to.equal(15);
    });
    it('works for test input output', function() {
      expect(recursiveMultiply(1, 5)).to.equal(5);
    });
    it('works for test input output', function() {
      expect(recursiveMultiply(3, 2)).to.equal(6);
    });
  });

  describe('8.7 permutations no duplicates', function() {
    it('works for test input output', function() {
      const output = permutationsNoDups('abc', {});
      const output4 = permutationsNoDups('abcd', {});
      console.log(output4);
      expect(output).to.have.members(['abc', 'acb', 'bac', 'bca', 'cba', 'cab']);
    });
  });

  describe('8.9 parens', function() {
    it('works for test input output', function() {
      const output = parentheses(3);
      console.log(output);
      const output4 = parentheses(4);
      console.log(output4);
      const expected = ['((()))', '()(())', '(()())', '(())()', '()()()'];
      expect(output).to.have.members(expected);
    });
  });

  describe('8.10 paint fill', function() {
    it('works for test input output', function() {
      const input = [
        [1, 1, 2, 3, 3],
        [1, 2, 2, 2, 3],
        [2, 2, 2, 3, 3],
        [1, 1, 2, 2, 3],
        [2, 2, 2, 2, 2]
      ];
      const expected = [
        [1, 1, 5, 3, 3],
        [1, 5, 5, 5, 3],
        [5, 5, 5, 3, 3],
        [1, 1, 5, 5, 3],
        [5, 5, 5, 5, 5]
      ];
      paintFill(input, [2, 0], 5);
      expect(input).to.deep.equal(expected);
    });
  });

  describe('8.11 coins', function() {
    it('works for test input output', function() {
      console.log(coins(5, {}));
      console.log(coins(10, {}));
      expect(coins(5, {})).to.have.members([['n'], ['p', 'p', 'p', 'p', 'p']]);

      expect(coins(10, {})).to.have.members([['n', 'p', 'p', 'p', 'p', 'p'], ['p', 'p', 'p', 'p', 'p'], ['n', 'n'], ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']])
    });
  });
});


