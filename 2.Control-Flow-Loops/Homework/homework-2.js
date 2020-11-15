// Task 2
// You have number `n=1000`. 
// Divide it by 2 as many times as long as the result of the division is greater than 50. 
// What is the number? Count the number of iterations required for this (iteration is a loop pass), 
// and write it to the variable `num`. Show the result to console.

let n = 1000;
let result;
let num = 0;

while(n > 50){
    num++;
    result = n;
    n = n / 2;
}

console.log("Result = " + result);
console.log("Number of iterations = " + num);