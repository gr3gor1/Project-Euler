/*
Description: By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?

Examples:
nthPrime(6) should return 13.
nthPrime(10) should return 29.
nthPrime(100) should return 541.
nthPrime(1000) should return 7919.
nthPrime(10001) should return 104743.
*/

function nthPrime(n) {
    //first prime is 2
    let primes=[2]
    //already counted the first prime
    let counter = 1
    //start searching after 3
    let number = 3
    while (counter<n){
      let prime = true
      //if the number cannont be divided by any of the primes is also a prime
      for(let j=0; j<primes.length; j++){
        if(number%primes[j] === 0){
          prime = false
          break;
        }
      }
      //if it is a prime add it in the primes list
      if (prime){
        counter += 1
        primes.push(number)
      }
      //then skip to the next odd number
      number += 2
    }
    return primes.pop();
  }
  
  nthPrime(1000)