// #### Task 2

// Modify the **Worker** class from the previous task as follows:

// - make all its properties private
// - to read them, make getter methods.

class Worker{
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName(){
        return this.#name;
    }
    getSurname(){
        return this.#surname;
    }
    getRate(){
        return this.#rate;
    }
    getDays(){
        return this.#days;
    }
    getSalary(){
        return this.#rate * this.#days;
    }
}


var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getName()); // print 'John'
console.log(worker.getSurname()); // print 'Smith'
console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

