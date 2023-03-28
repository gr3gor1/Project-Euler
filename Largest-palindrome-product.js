/*
Description: A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

Examples:
largestPalindromeProduct(2) should return 9009.
largestPalindromeProduct(3) should return 906609.

More can be found here: https://www.geeksforgeeks.org/largest-palindrome-product-two-n-digit-numbers/?ref=rp
*/

function largestPalindromeProduct(n) {
    //compute the max product upper limit 10**n - 1
    let maxProduct = Math.pow(10,n) - 1
    //compute the min product lower limit
    let minProduct = 1+Math.floor(maxProduct/10)
    let max = 0
    //try all the possible combinations of products in the range
    for (let i = maxProduct; i>=minProduct; i = i-1){
      for (let j=i; j >= minProduct; j = j-1){
        let product = j*i;
        if (product<max)
          break;
        let temp = product;
        let reverse = 0;
        //find the reverse products
        while (temp!=0){
          reverse = reverse*10 + temp%10
          temp = Math.floor(temp/10)
        }
        //check if the reversed number is a valid product and set the new max value
        if (product == reverse && product>max){
          console.log(reverse)
          max = product;
        }
      }
    }
    return max;
  }
  
  largestPalindromeProduct(4);