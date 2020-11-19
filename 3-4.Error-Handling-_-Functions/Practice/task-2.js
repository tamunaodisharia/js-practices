// #### Task 2

// Write function `f` that returns the sum of all parameters. The list of parameters can be any. 
// This function has to validate input parameters, because function can accept only numbers.

// ```js
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number
// ```
// Now handle error and log message in console

function f(...args){
    var args = args;
    var result = 0;
    for(let i in args){
        if(typeof args[i] != 'number'){
            throw new Error("all parameters type should be a Number");
        } else {
            result += args[i];
        }
       
    }
    console.log(result);
}
try{
    f(1,2,3); // 6
    f(1,1,1,1,1,1,1,1); // 8
    f(1,2,'s',4); // Error: all parameters type should be a Number
} catch (e){
    console.log(e.message);
}