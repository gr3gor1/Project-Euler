
/*
Description: 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

Examples:
smallestMult(5) should return 60.
smallestMult(7) should return 420.
smallestMult(10) should return 2520.
smallestMult(13) should return 360360.
smallestMult(20) should return 232792560.

For more info : https://www.geeksforgeeks.org/lcm-of-given-array-elements/
*/

function smallestMult(n) {
  //finding the LCM can be done using the following formula
  //LCM = (a*b)/GCD(a,b) so applying the same logic on an
  //array of numbers we can implement the following solution
  
  //firstly we create the array of nums from 1 to n
  var array=[]
  
  for(let i=n; i>=1; i--){
    array.push(i)
  }

  //gcd function
  function gcd(a,b){
    if (b==0){
      return a;
    }
    return gcd(b,a%b)
  }

  //compute lcm
  let init = array[0]
  for (let j=1; j<array.length; j++){
    let a = init
    let b = array[j]
    let g = gcd(a,b)
    init = (init * array[j])/g 
  }

  return init;
}

smallestMult(20);