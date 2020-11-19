// #### Task 1

// Improve your implementation of function `mix`. 
// If any callback throws an error - catch it and go to the next callback. 
// Function `mix` has to return always object with two properties `errors` and `value`. 
// Note that `value` contains the result of calls to all callbacks, 
// and ` errors` contains an array with information about all errors and the callback index 
// where it was generated.
// Example:

// ```javascript
// mix(() => {
//     return 0;
// }, (prev) => {
//     return prev + 1;
// }, (prev) => {
// 	throw new RangeError('Range is wrong');
// }, (prev) => {
//     return prev * 3;
// });
// // Function returns
// {
//     errors: [{
//             name: 'RangeError',
//             message: 'Range is wrong',
//             stack: '... stack of your error ...',
//             level: 2
//     }],
//     value: 3
// }
// ```

function mix(...args){
    if(args.length === 0){
        throw new Error("mix() function should have at least one parameter");  
    }
    let result;
    let errors = [];
    for(let i = 0; i < args.length; i++){
        if(typeof args[i] !== 'function'){
            throw new Error("parameters of mix() can only be functions");
        }
        try{
            result = args[i](result);
        }catch(err){
            errors.push({
               name: err.name,
               message: err.message,
               stack: err.stack,
               level: i
            });
        }
        
    }
    return {errors: errors, value: result};
}

let myVar;
try{
    myVar =  mix(() => {
            return 0;
         }, (prev) => {
             return prev + 1;
        }, (prev) => {
        	throw new RangeError('Range is wrong');
        }, (prev) => {
            return prev * 3;
        });
   
    console.log(myVar); 
} catch(e) {
    console.log("Error: " + e.message);
}