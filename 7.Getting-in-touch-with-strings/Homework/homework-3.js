// # Task 3

// Write a `searchWord` function to find a word within a string. Count found word(s)

// Also add type checks and throw an error if params are not strings

// ```javascript
// searchWord('The quick brown fox', 'fox'); // "'fox' was found 1 times."
// searchWord('aa, bb, cc, dd, aa', 'aa'); // "'aa' was found 2 times."
// ```
function searchWord(str, word){
    if(typeof str !== 'string' || typeof word !== 'string'){
        throw new Error("parameters should be a string");
    }
    let i = 0;
    let count = 0;
    while(true){
        i = str.indexOf(word, i);
        if(i !== -1){
            count++;
            i = i + word.length;
        }else{
            break;
        }
    }
    console.log(word + " was found " + count + " times");
}
try{
  searchWord('The quick brown fox', 'fox');
  searchWord('aa, bb, cc, dd, aa', 'aa');
}catch(e){
    console.log("Error: " + e.message);
}