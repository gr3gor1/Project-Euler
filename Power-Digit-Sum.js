/*
Description:215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2 exponent?

Examples:
powerDigitSum(15) should return 26.
powerDigitSum(128) should return 166.
powerDigitSum(1000) should return 1366.
*/
function powerDigitSum(exponent) {
    //compute the exponent
    let power = BigInt(Math.pow(2,exponent))
    //get a list of all the digits of the string
    //representation of the Big Int
    let digs = power.toString().split('').map(Number)
    let sum = 0
    //summ of the digits
    for(let i=0; i<digs.length; i++){
      sum += digs[i]
    }
    console.log(sum)
    return sum;
  }
  
  powerDigitSum(128);