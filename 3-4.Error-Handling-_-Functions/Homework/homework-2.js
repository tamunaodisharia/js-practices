// #### Task 2

// You have the array with the numbers `[1, 2, 3]`. 
// Create function `f` that takes this array as parameter and then 
// displays elements of this array on the screen. Be sure to use recursion. 
// Use the loops is prohibited. This function has to validate an input parameter, 
// because function can accept only a non-empty array.

// *Maybe you may need the method [splice](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice>).*

// ```js
// f([1,2,3]);
// // 1
// // 2
// // 3
// f(1,2,3) // Error: parameter type should be an array
// f('Content') // Error: parameter type should be an array
// f([]) // Error: parameter can't be an empty
// ```

// Now handle error and log message in console

function f(arr){
    if(Array.isArray(arr)){
        if(arr.length != 0){
            if(arr.length == 1){
                console.log(arr[0]);
            } else {
                console.log(arr[0]);
                arr.splice(0 , 1);
                f(arr);   
            }
        } else {
            throw new Error("parameter can't be empty");
        }
    } else {
        throw new Error("parameter type should be an array");
    }
}

try{
    f([1,2,3]);
    f(1,2,3);
    f('Content');
    f([]);
}catch(e){
    console.log("Error: " + e.message);
}
