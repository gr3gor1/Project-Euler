/*
Description: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below the provided parameter 
value number.

multiplesOf3and5(49) should return 543.
multiplesOf3and5(1000) should return 233168.
multiplesOf3and5(8456) should return 16687353.
multiplesOf3and5(19564) should return 89301183.
*/

function multiplesOf3and5(number) {
    let sum = 0
    number = number - 1 
    while (number>=3){
      if ((number%3 == 0) || (number%5==0)){
        sum += number
      }
      number -= 1
    }
  
    return sum;
  }