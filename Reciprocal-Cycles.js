/*
Description: A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2 = 0.5
1/3 = 0.(3)
1/4 = 0.25
1/5 = 0.2
1/6 = 0.1(6)
1/7 = 0.(142857)
1/8 = 0.125
1/9 = 0.(1)
1/10 = 0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/
function reciprocalCycles(limit) {
  let maxLength = 0;
  let dWithMaxLength = 0;
  
  for (let d = 2; d < limit; d++) {
    let remainders = new Array(d).fill(0);
    let remainder = 1;
    let position = 0;
    
    while (remainders[remainder] === 0 && remainder !== 0) {
      remainders[remainder] = position;
      remainder = (remainder * 10) % d;
      position++;
    }
    
    if (position - remainders[remainder] > maxLength) {
      maxLength = position - remainders[remainder];
      dWithMaxLength = d;
    }
  }

  return parseInt(dWithMaxLength.toString(),10);
}

reciprocalCycles(800); 