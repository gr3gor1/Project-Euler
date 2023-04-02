/*
Description: Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

Find the full description here: https://www.hackerrank.com/contests/projecteuler/challenges/euler013/problem
*/

function largeSum(arr) {
  let sum = 0
  for(let i=0; i<arr.length;i = i+2){
    //we find the sum two lines at a time
    let num = arr[i]/Math.pow(10,40)
    let num1 = arr[i+1]/Math.pow(10,40)
    sum = num + sum + num1
}
  //console.log(Math.floor(sum))
  //we turn the number into string
  sum = Math.floor(sum).toString()
  //get only the first ten characters (digits)
  sum = sum.slice(0,10)
  //then finally we return the number
  return Number(sum);
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);