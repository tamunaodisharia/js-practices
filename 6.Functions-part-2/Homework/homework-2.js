// #### Task 2

// Write your own implementation of function `compose`.
// Function is expecting unlimited list of parameters. 
// Each parameter has to be a function. Each function is expecting 1 parameter. 
// Function `compose` returns another function with one parameter.

function compose(...args){
    if(args.length === 0){
        throw new Error("compose() function should have at least one parameter");  
    }
    return function (x){
        if(typeof args[args.length - 1] !== 'function'){
            throw new Error("parameters of compose() can only be functions");
        }
        let result = args[args.length - 1](x);
        for(let i = args.length - 2; i >= 0; i--){
            if(typeof args[i] !== 'function'){
                throw new Error("parameters of compose() can only be functions");
            }
            result = args[i](result);
        }
        return result;
    }
}

try{   
    let myVar = compose((str) => {
        return str + 'c';
    }, (str) => {
        return str + 'b';
    })('a'); // 'abc'
    
    console.log(myVar); 
} catch(e) {
    console.log("Error: " + e.message);
}