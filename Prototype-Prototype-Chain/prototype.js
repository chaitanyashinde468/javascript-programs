/**
 * Topic: Prototype & Prototype Chain
 */


/*----------------------------------------------------
Example 1 : Every Object Has a Prototype
----------------------------------------------------*/

const employee = {

    name: "Chaitanya"

};

console.log(employee.__proto__);

/*
Output

Object prototype object

{}
*/


/*----------------------------------------------------
Example 2 : Shared Methods Through Prototype
----------------------------------------------------*/

function Employee(name) {

    this.name = name;

}

Employee.prototype.greet = function () {

    console.log(`Hello ${this.name}`);

};

const emp1 = new Employee("Chaitanya");

emp1.greet();

/*
Output

Hello Chaitanya
*/


/*----------------------------------------------------
Example 3 : Prototype Lookup
----------------------------------------------------*/

function Person(name) {

    this.name = name;

}

Person.prototype.city = "Pune";

const p1 = new Person("Chaitanya");

console.log(p1.name);

console.log(p1.city);

/*
Output

Chaitanya

Pune
*/


/*----------------------------------------------------
Example 4 : Prototype Chain
----------------------------------------------------*/

const animal = {

    eat() {

        console.log("Eating");

    }

};

const dog = Object.create(animal);

dog.bark = function () {

    console.log("Barking");

};

dog.bark();

dog.eat();

/*
Output

Barking

Eating
*/


/*----------------------------------------------------
Example 5 : Checking Prototype
----------------------------------------------------*/

console.log(
    Employee.prototype.isPrototypeOf(emp1)
);

/*
Output

true
*/
