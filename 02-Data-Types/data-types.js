// String
const name = "Chaitanya";
console.log(typeof name);

// Number
const age = 28;
console.log(typeof age);

// Boolean
const isEmployee = true;
console.log(typeof isEmployee);

// Undefined
let city;
console.log(typeof city);

// Null
let manager = null;
console.log(manager);
console.log(typeof manager);

// BigInt
const salary = 12345678901234567890123n;
console.log(typeof salary);

// Symbol
const id = Symbol("id");
console.log(typeof id);

// Object
const employee = {
    name: "Chaitanya",
    company: "APSS Media"
};

console.log(typeof employee);

// Array
const skills = ["JavaScript", "Node.js", "React"];

console.log(typeof skills);
console.log(Array.isArray(skills));
