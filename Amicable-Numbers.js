/*
Description: et d(n) be defined as the sum of proper divisors of n 
(numbers less than n which divide evenly into n). If d(a) = b and d(b) = a, 
where a ≠ b, then a and b are an amicable pair and each of a and b are called 
amicable numbers. For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 
11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 
are 1, 2, 4, 71 and 142; so d(284) = 220. Evaluate the sum of all the amicable 
numbers under n.

*/
function properDivisorsSum(num) {
    let sum = 0;
    //find all the possible divisors
    for (let i = 1; i <= num/2; i++) {
        if (num % i === 0) {
        //sum them
        sum += i;
        }
    }
    return sum;
}
  
function sumAmicableNum(limit) {
    let amicableSum = 0;
    //traverse the range and search for pairs
    for (let i = 1; i < limit; i++) {
        let num1 = i;
        let num2 = properDivisorsSum(num1);
        //check if the conditions are met
        if (num1 === properDivisorsSum(num2) && num1 !== num2) {
        //add the number to the sum
        amicableSum += num1;
        }
    }
    //console.log(amicableSum)
    return amicableSum;
}
  
  sumAmicableNum(1000)