// #### Task 1

// Write your own implementation of function `mix`. 
// This function is expecting unlimited number of parameters. 
// Each parameter has to be a function, else throw error. Function `mix` invokes callbacks one by one. 
// Parameter of each callback is the result of the previous callback.
// First callback doesn't get any parameter.

function mix(...args){
    if(args.length === 0){
        throw new Error("mix() function should have at least one parameter");  
    }
    let result;
    for(let i = 0; i < args.length; i++){
        if(typeof args[i] !== 'function'){
            throw new Error("parameters of mix() can only be functions");
        }
        result = args[i](result);
    }
    return result;
}

let myVar;
try{
    myVar = mix(() => {
        return 0;
    }, (prev) => {
        return prev + 1;
    }, (prev) => {
        return prev * 2;
    }); 
   
    console.log(myVar); // 2
} catch(e) {
    console.log("Error: " + e.message);
}

