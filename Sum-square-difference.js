/*
Description: The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

Examples
sumSquareDifference(10) should return 2640.
sumSquareDifference(20) should return 41230.
sumSquareDifference(100) should return 25164150.
*/

function sumSquareDifference(n) {

    let sum1 = 0
    let sum2 = 0
    
    for(let i =n;i>=1;i--){
      //calculate the sum of the nums
      sum1 += i
      //calculate the sum of the squares
      sum2 += i*i
    }
    //find the square of the total sum and return 
    //the difference
    sum1 = sum1*sum1
    return sum1 - sum2;
  }
  
  sumSquareDifference(100);