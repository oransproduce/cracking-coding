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


