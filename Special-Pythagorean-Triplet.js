/*

Description: A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a**2 + b**2 = c**2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

Based on the following relations we try to reduce the unknown variables:
  1. a+b+c = n
  2. a*a + b*b = c*c
The above leads us to :
  1. c = n -b -a
  2. b = (n*n - 2*n*a)/(2*n - 2*a)
All we have to do now is iterate over 
the values that "a" can get.

For more check here: https://www.geeksforgeeks.org/pythagorean-triplet-with-given-sum-using-single-loop/?ref=rp
*/
function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
  for(let a=1; a<n; a++){
    let b = (sumOfabc*sumOfabc - 2*sumOfabc*a)
            /(2*sumOfabc - 2*a)
    let c = sumOfabc - Math.floor(b) - a
    if(a*a + b*b == c*c){
      if(b>0 && c>0 && a<b<c){
        //console.log(a*b*c)
        return a*b*c
      }
    } 
  }
 return true;
}

specialPythagoreanTriplet(120);