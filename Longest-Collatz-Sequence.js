/*
Description: The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. 
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above limit.

Examples:

longestCollatzSequence(14) should return 9.
longestCollatzSequence(5847) should return 3711.
longestCollatzSequence(46500) should return 35655.
longestCollatzSequence(54512) should return 52527.
longestCollatzSequence(100000) should return 77031.
longestCollatzSequence(1000000) should return 837799.
*/

function longestCollatzSequence(limit) {
    //for all the integers under the limit
    let max = 0
    let ans = 0
    for(let i = 1; i< limit; i++){
      //count their chain length  
      let num = i
      let count = 0
      while(num != 1){
        if(num%2==0){
          num = num / 2
        }else{
          num = 3*num +1
        }
        count += 1
      }
      //find the max chain
      //and return the number
      if(count>max){
        max = count
        ans = i
      }
    }
    //console.log(ans)
    return ans;
  }
  
  longestCollatzSequence(14);