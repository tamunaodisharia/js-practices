// #### Task 4

// Create the function `isEven ()` that takes a number as a parameter and checks whether this number is even or not. 
// If even, the function returns `true`, if odd -` false`. This function have to validate the input parameter, 
// function can accept only a number.

// ```js
// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number
// ```
// Now handle error and log message in console

function isEven(num){
    if(typeof num !== 'number'){
        throw new Error("parameter type is not a Number");
    } else {
        if(num % 2 == 0){
            return true;
        } else {
            return false;
        }
    }
}
try{
    console.log(isEven(3)); // false
    console.log(isEven(4)); // true
    console.log(isEven('Content')); // Error: parameter type is not a Number
} catch (e){
    console.log("Error: " + e.message);
}