/*
Description: Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
            there are exactly 6 routes to the bottom right corner.

            How many such routes are there through a given gridSize?

Examples:
    latticePaths(4) should return 70.
    latticePaths(9) should return 48620.
    latticePaths(20) should return 137846528820.

For more info check here: https://www.xarg.org/puzzle/project-euler/problem-15/
*/
function latticePaths(gridSize) {
    //each grid has 2*n = 2*gridSize sets of paths
    //and each one of them has n = gridSize length
    //so all we have to do is divide the factorial of 2*n
    //using as divisor the factorial of n
    let n = gridSize
    let nom = 1
    let den = 1
    for(let i = 2*n; i>=1; i--){
      nom *= i
      if(i<=n){
        den *= i
      }
    }
    //console.log(nom/(den*den))
    return Math.floor(nom/(den*den));
  }
  
  latticePaths(4);