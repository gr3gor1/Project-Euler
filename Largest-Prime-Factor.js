/*
Description: The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

Some examples are the following

largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFactor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(8) should return 2.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.

A better description of the problem can be found here: https://www.geeksforgeeks.org/prime-factor/
*/

function largestPrimeFactor(number) {
    let prime = []
    let num = number
    //check if the number can be divided by 2
    while (num%2==0){
      num = num / 2
      prime.push(2) 
    }
   
    //else it can be divided by odd primes
    //we know that every composite number has at least one
    //prime factor less than or equal to square root of itself.
    for(let i=3;i<=Math.sqrt(num);i=i+2){
      while(num%i==0){
        num = num / i
        prime.push(i)
      }
    }
    //get the final prime if one exists
    if (num>2){
      prime.push(num)
    }
    
    return Math.max(...prime);
  }
  
  largestPrimeFactor(2);