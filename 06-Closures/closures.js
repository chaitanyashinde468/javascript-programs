/**
 * Topic: Closures
 * Description: Understanding closures with simple and real-world examples.
 */

// Example 1 - Basic Closure

function outer() {
    let name = "Chaitanya";
    function inner() {
        console.log(name);
    }
    return inner;
}
const result = outer();
result();

/*
Output

Chaitanya
*/


// Example 2 - Counter using Closure

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment();
increment();
increment();

/*
Output

1
2
3
*/


// Example 3 - Separate Closures

const counter1 = counter();
const counter2 = counter();
counter1();
counter1();
counter2();

/*
Output

1
2
1
*/


// Example 4 - Closure remembers variables

function greeting(message) {
    return function (name) {
        console.log(message + " " + name);
    };
}

const welcome = greeting("Welcome");
welcome("Chaitanya");

/*
Output

Welcome Chaitanya
*/
