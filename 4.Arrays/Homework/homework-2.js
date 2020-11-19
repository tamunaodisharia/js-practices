// #### Task 2

// Create function `reverse`, that gets array as parameter and returns array in opposite order.

// Function should contain next checks:

// - First parameter required and has to be only array
// - Throw error if passed empty array
// - Creating new array is not allowed
// - Using Array.reverse is not allowed

// ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ```

function reverse(arr){
    let size = arr.length;
    let item;
    if(Array.isArray(arr) === false){
        throw new Error("parameter has to be an array");
    } else if (arr.length === 0){
        throw new Error("array cannot be empty");
    }
    for(let i = size - 1; i >= 0; i--){
       item = arr[i];
       arr.splice(i, 1);
       arr.push(item);
    } 
    return arr;
}
try{
    const arr = [3,2,1];
    console.log(reverse(arr)); // [1,2,3]
    const arr1 = [];
    console.log(reverse(arr1)); // Error: array cannot be empty
    const arr2 = 'string';
    //console.log(reverse(arr2)); // Error: parameter has to be an array
} catch(e){
    console.log("Error: " + e.message);
}
