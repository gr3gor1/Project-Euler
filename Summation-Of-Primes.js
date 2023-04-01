/*
Description:The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.

Examples:
primeSummation(17) should return 41.
primeSummation(2001) should return 277050.
primeSummation(140759) should return 873608362.
primeSummation(2000000) should return 142913828922.
*/

function primeSummation(n) {
    //store the prime numbers
    let primes = [];
    //each index from 0 to n-1 contains the false value
    let isComposite = new Array(n).fill(false);
    //the sum of the primes
    let sum = 0;
  
    for (let i = 2; i < n; i++) {
      //if the number at the i index of isComposite is false
      //then add it to the sum
      if (!isComposite[i]) {
        primes.push(i);
        sum += i;
  
        // mark all multiples of i as composite
        for (let j = i * i; j < n; j += i) {
          isComposite[j] = true;
        }
      }
    }
  
    console.log(sum);
    return sum;
  }
  
  primeSummation(140759);