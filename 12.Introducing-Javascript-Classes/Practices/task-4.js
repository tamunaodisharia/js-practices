// #### Task 4

// Implement the class **MyString** with next methods:

// - method **reverse()** that gets string as parameter and returns it in reverse order
// - method **ucFirst()** that gets string as parameter and returns it with capitalized first letter
// - method **ucWords** that gets string as parameter and capitalize first letter in each word of this string. After, returns this new string

class MyString{
    constructor(str){
        this.str = str;
    }
    reverse(str){
        let arr = str.split("");
        var reversedArr = arr.reverse();
        return reversedArr.join("");
    }
    ucFirst(str){
        let firstLetter = str.charAt(0);
        let substr = str.substring(1);
        firstLetter = firstLetter.toUpperCase();
        return firstLetter + substr;
    }
    ucWords(str){
        let arr = str.split(" ");
        let substr;
        let firstLetter;
        for(let i=0;i<arr.length;i++){
            firstLetter = arr[i].charAt(0).toUpperCase();;
            substr = arr[i].substring(1);
            arr.splice(i,1, firstLetter + substr);
        }
        return arr.join(" ");
    }
}


var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'

