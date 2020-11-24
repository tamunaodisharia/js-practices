// # task 1

// Write a `rmHtmlTags` function to remove HTML tags from string.

// *We may use RegExp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions*

// Also add type checks and throw an error if param is not string;

// ```javascript
// rmHtmlTags('<p><strong><em>Content</em></strong></p>') // Content
// ```

function rmHtmlTags(str){
    if(typeof str !== 'string'){
        throw new Error("parameter should be a string");
    }
    let regex= /<[a-zA-Z/]*>/g;
    return str.replace(regex, "");
    
   
}
try{
   console.log(rmHtmlTags('<p><strong><em>Content</em></strong></p>'));
}catch(e){
    console.log("Error: " + e.message);
}