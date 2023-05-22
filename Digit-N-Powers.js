/*
Description: 

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of n powers of their digits.

Examples:
digitnPowers(2) should return 0.
digitnPowers(3) should return 1301.
digitnPowers(4) should return 19316.
digitnPowers(5) should return 443839.
*/

function digitnPowers(n) {
    //create an array with all the eligible sums
    let numbers = [0]
    //compute the upper limit
    let upper = Math.pow(10,n+1)
    //make sure we wont examine numbers like 0,1,2
    //we could even start from 10
    for (let i = 3; i<upper;i++){
      let string = i.toString().split('')
      let sum = 0
      //compute the sum of the number
      for (let j=0;j<string.length;j++){
        sum = Math.pow(parseInt(string[j]),n) + sum
      }
      //check if the number and the sum of its digits n powers are equal
      if (sum == i){
        numbers.push(sum)
      }
    }
    //find the sum of the numbers in the array
    let a = numbers.reduce(function(current,accumulator){
      return current + accumulator
    },0)
    //console.log(a)
    return a;
  }
  
  digitnPowers(2);