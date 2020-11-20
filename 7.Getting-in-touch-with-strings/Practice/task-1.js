// # Task 1

// Write function `upperCaseFirst(string)` that returns capitalized string `str`.

// If parameter isn't string - throw error.

// ```javascript
// upperCaseFirst('pitter'); // Pitter
// upperCaseFirst(''); // ''
// ```

function upperCaseFirst(str){
    if(typeof str !== 'string'){
        throw new Error("parameter should be a string");
    }
    let first = str.charAt().toUpperCase();
    let substr = str.slice(1,str.length);

    return first + substr;

}
try{
    console.log(upperCaseFirst('pitter'));
}catch(e){
    console.log("Error: " + e.message);
}
