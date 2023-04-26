/*
Description: Euler discovered the remarkable quadratic formula:

n2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39
. However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41 
is clearly divisible by 41. The incredible formula n2−79n+1601 was discovered, which produces 80 
primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form: n2+an+b, where |a|<range and |b|≤range where |n| is the 
modulus/absolute value of n e.g. |11|=11 and |−4|=4

Find the product of the coefficients, a and b, for the quadratic expression that 
produces the maximum number of primes for consecutive values of n, starting with  n=0
*/
function helper(n){
    //compute whether it is a prime number or not
    if(n<2){
      return false
    }
    for(let i=2; i<=Math.sqrt(n);i++){
      if(n%i==0){
        return false
      }
    }
    return true
  }
  
  function quadraticPrimes(range) {
    let a = 0
    let b = 0
    let primes = 0
    for(let i=(-range);i<=range;i++){
      for(let j=(-range);j<=range;j++){
        let n = 0
        while(helper(n * n + i * n + j)){
          n += 1
        }
        if(n>primes){
          primes = n
          a = i
          b = j
        }
      }
    }
    console.log(a*b)
    return a*b;
  }
  
  quadraticPrimes(1000);