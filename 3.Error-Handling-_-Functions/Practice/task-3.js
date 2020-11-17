// #### Task 3

// Write function `f` that takes a parameter from 1 to 7, and returns the day of the week in Georgian. 
// This function has to validate the input parameter, function can accept only a number from 1 to 7.

// ```js
// f(1); // Sunday
// f(2); // Monday
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number
// ```
// Now handle error and log message in console

function f(num){
    var day;
    if(typeof num != 'number'){
        throw new Error("parameter type is not a Number");
    }else if(num >= 1 && num <= 7){
        switch (num){
            case 1: day = 'Sunday';
            break;
            case 2: day = 'Monday';
            break;
            case 3: day = 'Tuesday';
            break;
            case 4: day = 'Wednesday';
            break;
            case 5: day = 'Thursday';
            break;
            case 6: day = 'Friday';
            break;
            case 7: day = 'Saturday';
            break;
        }
        return day;
    }else{
        throw new Error("parameter should be in the range of 1 to 7");
    }
}
try{
    console.log(f(1)); // Sunday
    console.log(f(2)); // Monday
    console.log(f(8)); // Error: parameter should be in the range of 1 to 7
    console.log(f('1')); // Error: parameter type is not a Number

}catch(e){
    console.log("Error: " + e.message);
}