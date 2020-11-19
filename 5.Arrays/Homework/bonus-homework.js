// #### Task 3

// Create function `rotate`, which will rotate array based on given parameters.
// params:
//   array - required - target
//   number - required - count(how many times) to rotate array
//   string - optional - rotate direction: left or right. defualt is right
// - function should contain checks:
//   - first parameter required and has to be only array
//   - second parameter required and has to be number
//   - third parameter optional and has to be only string 
// - creating new array is not allowed


function rotate(arr, num, direction){
    if(Array.isArray(arr) === false){
        throw new Error("first parameter has to be an array");
    }
    if(typeof num !== 'number'){
        throw new Error("second parameter has to be a number");
    }
    if(typeof direction !== 'undefined' && typeof direction !== 'string'){
        throw new Error("third parameter has to be a string");
    } else if(typeof direction === 'undefined'){
        direction = "right";
    } else if(direction !== 'left' && direction !=='right'){
        throw new Error("third parameter can only be 'left' or 'right'");
    }
    let item;
    if(direction === 'right'){
        while(num > 0){
            item = arr.pop();
            arr.unshift(item);
            num--;
        }
    } else {
        while(num > 0){
            item = arr.shift();
            arr.push(item);
            num--;
        }
    }
    return arr;
}
arr = [1,2,3];
try{
    console.log(rotate(arr, 1)); // [3, 1, 2]
    //console.log(rotate(arr, 2)); // [2, 3, 1]
    // console.log(rotate(arr, 1, 'left'));  // result: [2,3,1]
    // console.log(rotate(arr, 2));  // result: [2,3,1]
    //console.log(rotate(arr, 'string'));  // Error: second parameter has to be a number
    //console.log(rotate(1, 1));  // Error: first parameter has to be an array
    //console.log(rotate(arr, 1, 3));  // Error: third parameter has to be a string
    //console.log(rotate(arr, 1, 'string'));  // Error: third parameter can only be 'left' or 'right'
}catch(e){
    console.log("Error: " + e.message);
}