/*
Description: n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits n!


*/
function sumFactorialDigits(n) {
    let count = BigInt(1);
    //find the factorial
    for (let i = n; i >= 1; i--) {
      count *= BigInt(i);
    }
    //count the sum of its digits
    let sum = 0;
    let arr = count.toString();
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }
    //console.log(sum);
    return sum;
  }
  
  sumFactorialDigits(100);