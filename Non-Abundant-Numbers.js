/*
Description: A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant 
numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two 
abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest 
number that cannot be expressed as the sum of two abundant numbers is less than this limit. Find the sum of all positive 
integers <= n which cannot be written as the sum of two abundant numbers. 

*/

function check(number) {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}

function sumOfNonAbundantNumbers(n) {
  let sum = 0;
  let ab = [];
  let abundantSums = new Set();
  
  // find all abundant numbers
  for (let i = 1; i <= n; i++) {
    if (check(i) > i) {
      ab.push(i);
    }
  }
  
  // find all sums of two abundant numbers
  for (let i = 0; i < ab.length; i++) {
    for (let j = i; j < ab.length; j++) {
      let sum = ab[i] + ab[j];
      if (sum <= n) {
        abundantSums.add(sum);
      }
    }
  }

  // subtract the sum of abundant sums from the sum of all numbers up to n
  for (let i = 1; i <= n; i++) {
    if (!abundantSums.has(i)) {
      sum += i;
    }
  }

  //console.log(sum);
  return sum;
}

sumOfNonAbundantNumbers(10000);