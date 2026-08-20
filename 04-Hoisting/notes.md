What is Hoisting?
--
Hoisting is JavaScript's behaviour of moving declarations to the top of their scope before the code is executed.
--
Important: Only declarations are hoisted, not initialisations.
--
Example 1 – var
```
console.log(name);
var name = "Chaitanya";
```
Many people expect an error.

Actual Output
undefined

Why?

JavaScript internally treats it like:

var name;
console.log(name);
name = "Chaitanya";

The declaration is hoisted, but the assignment stays where it is.

Example 2 – let

console.log(city);
let city = "Pune";

Output:

ReferenceError:
Cannot access 'city' before initialization

Unlike var, let is hoisted but remains inaccessible until it's initialised. We'll cover why in the next topic (Temporal Dead Zone).

Example 3 – const

console.log(company);
const company = "APSS Media";

Output:

ReferenceError
Same reason as let.

Example 4 – Function Declaration

greet();
function greet() {
    console.log("Hello");
}

Output:
Hello

Function declarations are fully hoisted.

Example 5 – Function Expression

greet();
var greet = function () {
    console.log("Hello");
};

Output:
TypeError: greet is not a function

Why?

Internally:
var greet;
greet(); // undefined()

greet = function () {
    console.log("Hello");
};

greet exists, but it's undefined at the time of the call.

Question
--
Are let and const hoisted?

Many candidates answer No.

That's incorrect.

Correct answer:

Yes, let and const are hoisted, but they cannot be accessed before initialisation because they are in the Temporal Dead Zone (TDZ).
