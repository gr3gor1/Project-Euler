/*
Description: 

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.

digitFactorial() should return an object.
digitFactorial() should return { sum: 40730, numbers: [145, 40585] }
*/
function digits(number){
    const digits = []
    const string = number.toString()
  
    for(let i=0; i<string.length;i++){
      digits.push(parseInt(string.charAt(i)))
    }
    return digits
  }
  
  function fact(num){
    var number = 1
    for(let i=num; i>=1; i--){
      number *= i
    }
    return number
  }
  
  function digitFactorial() {
    var sum = 0;
    var numbers = [];
    for(let i=10;i<=100000;i++){
      let temp = []
      let prod = digits(i)
      for(let j=0;j<prod.length;j++){
        temp.push(fact(prod[j]))
      }
      let dummy = temp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      //console.log(dummy)
      if(dummy==i){
        //console.log(dummy)
        numbers.push(i)
      }
    }
    //console.log(numbers)
      sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return { sum, numbers };
  }
  
  digitFactorial();