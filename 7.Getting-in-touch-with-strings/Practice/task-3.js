// # Task 3

// Write function `truncate(string, maxlength)` that checks string length `string`, 
// and if lenth more than `maxlength` – replace end of string `str` to `... ` ,
// so that its length is equal to `maxlength`.

// The result of the function should be (if necessary) a truncated string.

// If first parameter isn't string - throw error.
// If second parameter isn't number - throw error.

// ```javascript
// truncate('I wanna to say next thing about this topic', 22); // 'I wanna to say next...'
// ```

function truncate(string, maxlength){
    if(typeof string !== 'string'){
        throw new Error("first parameter should be a string");
    }
    if(typeof maxlength !== 'number'){
        throw new Error("second parameter should be a number");
    }
    if(string.length > maxlength){
        let substr = string.slice(0, maxlength - 3);
        return substr + '...' ;
    }
}
try{
    console.log(truncate('I wanna to say next thing about this topic', 22));
}catch(e){
    console.log("Error: " + e.message);
}
