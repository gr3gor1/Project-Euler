/*
Description: In England the currency is made up of pound, £, and pence, p,
and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can n pence be made using any number of coins?
*/
function coinSums(n) {
    //set all the possible amounts
    let money = [1,2,5,10,20,50,100,200]
    //create an array of all the possible combinations to an index
    let array = new Array(n+1).fill(0)
    //zero money has only 1 combination
    array[0] = 1
    //for each available amount
    for(let i=0; i<money.length; i++){
      //compute the combinations to reach a specific index
        for(let j=money[i]; j<=n; j++){
        array[j] += array[j-money[i]]
      }
    }
    //get the combinations of nth index in the array
    let combinations = array[n]
    console.log(combinations)
    return combinations
  }
  
  coinSums(200);