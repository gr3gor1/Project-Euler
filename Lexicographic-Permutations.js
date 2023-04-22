/*
Description: A permutation is an ordered arrangement of objects. For example, 3124 is
one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are 
listed numerically or alphabetically, we call it lexicographic order. The lexicographic 
permutations of 0, 1 and 2 are:
012   021   102   120   201   210
What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?


*/
function lexicographicPermutations(n) {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = 0;
  
    for (let i = 9; i >= 0; i--) {
      const f = factorial(i);
      const index = Math.floor(n / f);
      result = result * 10 + digits[index];
      digits.splice(index, 1);
      n %= f;
    }
  
    return result;
  }
  
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }