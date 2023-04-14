/*
Description: If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total. If all the numbers from 1 to 
given limit inclusive were written out in words, how many letters would be used?

Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) 
contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of
"and" when writing out numbers is in compliance with British usage.
*/
function numberLetterCounts(limit) {
    const twenties = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  
    const tens = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
    let count = 0
  
    for(let i = 1;i<=limit;i++){
      let num = i
      let name = ''
    //check the instance of 1000
      if(num==1000){
        count += 'onethousand'.length
        continue 
      }
    //check numbers between 999 and 100
      if(num>=100){
        name += twenties[Math.floor(num/100)] + 'hundred';
        num %= 100
  
        if(num>0){
          name += 'and'
        } 
      }
    //check numbers from 99 to 20
      if(num>=20){
        name += tens[Math.floor(num/10)];
        num %= 10
      }
    //check numbers from 19 to 0
      if(num>0){
        name += twenties[num];
      }
  
      count += name.length
  
    }
    //console.log(count)
    return count;
  }
  
  numberLetterCounts(1000);