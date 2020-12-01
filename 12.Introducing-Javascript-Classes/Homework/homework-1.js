// #### Task 1

// Implement the class **Validator**, for validating strings. This class has next methods:

// - method **isEmail** that gets string as parameter and validate is it correct email or not. If it's ok, return true, otherwise false
// - method **isDomain** for domain validating
// - method **isDate** for date validation
// - method **isPhone** for phone validation

// - use Regexp for simpler validation

class Validator{
    constructor(){

    }
    isEmail(str){
        let regex = /^[\w-\.]+\@\w+\.\w+/i;
        if (str.match(regex)){
            return true;
        }else{
            return false;
        }
    }
    isDomain(str){
        let regex = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;
        if (str.match(regex)){
            return true;
        }else{
            return false;
        }
    }
    isDate(str){
        let regex = /[0-9][0-9][-. ][0-9][0-9][-. ][0-9][0-9][0-9][0-9]/;
        if (str.match(regex)){
            return true;
        }else{
            return false;
        }
    }
    isPhone(str){

        let regex = /^(\+995[- ]?)?5[0-9]{2}[- ]?[0-9]{2}[- ]?[0-9][- ]?[0-9][- ]?[0-9]{2}/;
        if (str.match(regex)){
            return true;
        }else{
            return false;
        }
    }
}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isDate('12-05-2020'));
console.log(validator.isDate('12 05 2020'));
console.log(validator.isPhone('+995 593 12 34 56')); 
console.log(validator.isPhone('593 12 34 56'));
console.log(validator.isPhone('+995593123456'));
console.log(validator.isPhone('593123456'));
console.log(validator.isPhone('593 123 456'));
console.log(validator.isPhone('593 12 34 56'));