// #### Task 1

// Create function `f`. This function gets one parameter: one dimensional or multidimensional array.
// This function returns the sum of all elements from all dimensions.

// Note that the function should return the 0, if during the calculation of 
// all levels (dimensions) no number was found.

// Function should contain next checks:
// - First parameter required and has to be only array
// - Throw error if on any dimension (level) you found not a number or not a array
// - Using flat, flatMap is not allowed

function f(arr){
    let sum = 0;
    if(Array.isArray(arr) === false){
        throw new Error("function parameter should be an array");
    }
    for(let i in arr){
        if(Array.isArray(arr[i])){
            sum += f(arr[i]);
        } else if (typeof arr[i] === 'number'){
            sum += arr[i];
        } else {
            throw new Error("array should contain only an array or a number");
        }
    }
    return sum;
}

try{
    const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
    console.log(f(arr)); // 12
    const arr2 = [[[[[1,2]]]]];
    console.log(f(arr2)); // 3
    const arr3 = [[[[[1,2]]],2],1];
    console.log(f(arr3)); // 6
    const arr4 = [[[[[]]]]];
    console.log(f(arr4)); // 0
    const arr5 = [[[[[],3]]]];
    console.log(f(arr5)); // 3
    const arr6 = ['string']; //Error: array should contain only an array or a number
    console.log(f(arr6));
    //const arr7 = 'string';
    //console.log(f(arr7));  //Error: function parameter should be an array
} catch(e){
    console.log("Error: " + e.message);
}


