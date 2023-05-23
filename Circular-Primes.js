/*
Description:
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below n, whereas 100 ≤ n ≤ 1000000?

Note:
Circular primes individual rotation can exceed n.

Examples:
circularPrimes(100) should return 13.
circularPrimes(100000) should return 43.
circularPrimes(250000) should return 45.
circularPrimes(500000) should return 49.
circularPrimes(750000) should return 49.
circularPrimes(1000000) should return 55.
*/
function prime(n){
    if(n<=1){
      return false
    }
  
    for(let i=2; i<=Math.sqrt(n); i++){
      if(n%i===0){
        return false
      }
    }
  
    return true
  }
  
  function check(number){
    let num = number.toString();
    for(let i=0; i<num.length;i++){
      let reverse = parseInt(num.slice(i) + num.slice(0, i));
      if(!prime(reverse)){
        return false
      }
    }
    return true
  }
  
  function circularPrimes(n) {
    let nums = []
    let counter = 0
    for(let i=2;i<=n;i++){
      if(prime(i)){
        nums.push(i)
      }
    }
    
    for(let num of nums){
      if(check(num)){
        counter ++ 
        //console.log(num)
      }
    }
    //console.log(counter+7)
    return counter;
  }
  
  circularPrimes(100);