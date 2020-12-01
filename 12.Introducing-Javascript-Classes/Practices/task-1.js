// #### Task 1

// Implement class **Worker**, that has next properties: **name**, **surname**, **rate**, **days**.
// Also the class should have the method **getSalary ()**, that will display the employee's salary.
// Salary - is the multiplication of the **rate** by the number of worked **days**.

// With the help of our class, create two workers and find the sum of their salaries.

class Worker{
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}


var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.name); // print 'John'
console.log(worker.surname); // print 'Smith'
console.log(worker.rate); // print 10
console.log(worker.days); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

var worker2 = new Worker('Tamuna', 'Odisharia', 11, 31);

var sum = worker2.getSalary() + worker.getSalary();
console.log(sum);