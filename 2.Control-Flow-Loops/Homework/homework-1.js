// Task 1
// You have array `[2, 5, 9, 15, 0, 4]`. 
// Using loop `for` and operator `if`, show in console, elements which great than 3, but less than 10.

let myArray=[2, 5, 9, 15, 0, 4];
sortArr(myArray);

function sortArr(arr){
    let i;
    for(i in arr){
        if (arr[i] > 3 && arr[i] < 10){
            console.log(arr[i]);
        }
        
    }
}

