/*
Description: Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in an n by n spiral formed in the same way?

Examples:
spiralDiagonals(101) should return 692101.
spiralDiagonals(303) should return 18591725.
spiralDiagonals(505) should return 85986601.
spiralDiagonals(1001) should return 669171001.

For more info check here: https://www.xarg.org/puzzle/project-euler/problem-28/
*/

function spiralDiagonals(n) {
    //dimension of diagonal without the center of the spiral
    n = (n - 1) / 2;
    //caluclate the sum of the generation forumals of each diagonal
    return 2 * n * (8 * n * n + 15 * n + 13) / 3 + 1;
}

spiralDiagonals(1001);