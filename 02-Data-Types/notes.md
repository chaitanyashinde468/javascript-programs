A Data Type tells JavaScript what kind of value a variable holds.

Example:
let age = 28;
age contains a Number.

JavaScript has 8 Data Types
Primitive (7)
String
Number
Boolean
Undefined
Null
BigInt
Symbol

Non-Primitive (1)
Object

1️⃣ String
Stores text.

let name = "Chaitanya";
console.log(name);
console.log(typeof name);

Output
Chaitanya
string

2️⃣ Number
Stores integers and decimals.

let age = 28;
let salary = 50000.75;
console.log(typeof age);
console.log(typeof salary);

Output
number
number

3️⃣ Boolean
True or False.

let isLoggedIn = true;
console.log(typeof isLoggedIn);

Output
boolean

4️⃣ Undefined
Declared but not assigned.

let city;
console.log(city);
console.log(typeof city);

Output
undefined
undefined

5️⃣ Null
Represents an intentional empty value.

let manager = null;
console.log(manager);
console.log(typeof manager);

Output
null
object

⭐ Interview Question
Why does typeof null return "object"?

Answer:
This is a well-known historical bug in JavaScript. It has been kept for backward compatibility.

6️⃣ BigInt
Used for very large integers.

const bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber);

Output
bigint

7️⃣ Symbol
Creates unique values.

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2);

Output
false
Every Symbol is unique, even if the descriptions match.

8️⃣ Object
Stores collections of related data.

const employee = {
    name: "Chaitanya",
    company: "APSS Media",
    experience: "4 Years"
};

console.log(employee);
console.log(typeof employee);

Output
object

⭐ Interview Question
Primitive vs Non-Primitive
Primitive	Object
Stores value	Stores reference
Immutable	Mutable
Compared by value	Compared by reference

Example:

let a = 10;
let b = a;
b = 20;

console.log(a);
console.log(b);
Output
10
20

Now compare with objects:

let emp1 = {
    name: "Chaitanya"
};
let emp2 = emp1;
emp2.name = "Rahul";

console.log(emp1.name);

Output
Rahul

Because both variables reference the same object.

⭐ Interview Question
What is typeof?
typeof returns the type of a value.

Examples:
typeof "Hello"
typeof 100
typeof true
typeof undefined
typeof null
typeof {}
typeof []

Expected outputs:
string
number
boolean
undefined
object
object

Follow-up

Why is an array reported as an object?
Because arrays are a specialised type of object in JavaScript.

To check for an array:
Array.isArray([1,2,3]);

Output:
true

🏢 Real-world Example

Suppose you're receiving user data from an API.

const user = {
    name: "Chaitanya",
    age: 28,
    isPremium: true,
    address: null
};

console.log(typeof user.name);
console.log(typeof user.age);
console.log(typeof user.isPremium);
console.log(user.address);

Understanding data types helps you validate API responses and avoid runtime bugs.
