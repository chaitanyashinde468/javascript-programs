/**
 * Topic: Closures
 * Description: Understanding closures with simple and real-world examples.
 */

// Example 1 - Basic Closure
// Question 1
// Create a function that remembers your name

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
// Question 2
// Create a counter using closure

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
// Question 3
// Create two counters and verify they don't share state

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
// Question 4
// Create a greeting function using closure

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
