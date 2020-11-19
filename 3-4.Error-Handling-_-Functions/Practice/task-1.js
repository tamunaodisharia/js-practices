// #### Task 1

// Write function `f` that return a cube of a number. The number is passed as a parameter. 
// This function checks for input parameter, function can accept only a number.

// ```js
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number
// ```
// Now handle error and log message in console

function f(num){
    if(typeof num == 'number'){
        return num**3;
    } else {
        throw new Error("parameter type is not a Number");
    }
}

try{
    console.log(f(2)); // 8
    console.log(f('Content')); // Error: parameter type is not a Number
}catch(e){
    console.log("Error: " + e.message);
}
