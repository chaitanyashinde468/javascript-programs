/**
 * Topic: this, call(), apply(), bind()
 * Description: Understanding how 'this' works and how call, apply,
 * and bind can change its context.
 */

/*----------------------------------------------------
Example 1 : this inside an Object
----------------------------------------------------*/

const employee = {

    name: "Chaitanya",

    company: "APSS Media",

    display() {

        console.log(this.name);

    }

};

employee.display();

/*
Output

Chaitanya
*/


/*----------------------------------------------------
Example 2 : call()
----------------------------------------------------*/

const employee1 = {

    name: "Chaitanya"

};

const employee2 = {

    name: "Rahul"

};

function greet(city, country) {

    console.log(
        `Hello ${this.name} from ${city}, ${country}`
    );

}

greet.call(employee1, "Pune", "India");

greet.call(employee2, "Mumbai", "India");

/*
Output

Hello Chaitanya from Pune, India

Hello Rahul from Mumbai, India
*/


/*----------------------------------------------------
Example 3 : apply()
----------------------------------------------------*/

greet.apply(employee1, ["Pune", "India"]);

/*
Output

Hello Chaitanya from Pune, India
*/


/*----------------------------------------------------
Example 4 : bind()
----------------------------------------------------*/

const greetEmployee = greet.bind(employee1, "Pune", "India");

greetEmployee();

/*
Output

Hello Chaitanya from Pune, India
*/


/*----------------------------------------------------
Example 5 : Arrow Function
----------------------------------------------------*/

const person = {

    name: "Chaitanya",

    regularFunction() {

        console.log(this.name);

    },

    arrowFunction: () => {

        console.log(this);

    }

};

person.regularFunction();

person.arrowFunction();

/*
Output

Chaitanya

(Window object in browser)

OR

{} in Node.js
*/
