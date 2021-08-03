function arrayNUglyNumbers (n) {
2 var counter = 0, currentNumber = 1, uglyNumbers
= [];
3
4 while ( counter != n ) {
5
6 if ( isUgly(currentNumber) ) {
7 counter++;
8 uglyNumbers.push(currentNumber);
9 }
10
11 currentNumber++;
12 }
13
14 return uglyNumbers;
15 }
function maxDivide (number, divisor) {
2 while (number % divisor == 0) {
3 number /= divisor;
4 }
5 return number;
6 }
7
8 function isUgly (number){
9 number = maxDivide(number, 2);
10 number = maxDivide(number, 3);
11 number = maxDivide(number, 5);
12 return number === 1;
13 }  
 module.exports = allPrimesLessThanN ;
