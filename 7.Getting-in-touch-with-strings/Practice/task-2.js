// # Task 2

// Write function `checkSpam(source, example)` that returns `true`, 
// if string `source` contains `example`, otherwise `false`.

// The function should not be case sensitive:

// If first or second parameters aren't string - throw error.

// ```javascript
// checkSpam('pitterXXX@gmail.com', 'xxx'); // true
// checkSpam('pitterxxx@gmail.com', 'XXX'); // true
// ```

function checkSpam(source, example){
    if(typeof source !== 'string' || typeof example !== 'string' ){
        throw new Error("all parameters should be strings");
    }
    source = source.toLowerCase();
    example = example.toLowerCase();
    if(source.indexOf(example) === -1){
        return false;
    }else {
        return true;
    }
}
try{
    console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
    console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true
}catch(e){
    console.log("Error: " + e.message);
}
