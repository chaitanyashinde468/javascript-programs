/**
 * Topic: Temporal Dead Zone (TDZ)
 * Description: Demonstrates how let and const behave before initialization.
 */

// Example 1 - let

// console.log(city);
let city = "Pune";
console.log(city);

/*
Output

Pune
*/

// Example 2 - const

// console.log(company);
const company = "APSS Media";
console.log(company);

/*
Output

APSS Media
*/


// Example 3 - var

console.log(language);
var language = "JavaScript";

/*
Output

undefined
*/


// Example 4

{
    // console.log(age);
    let age = 28;
    console.log(age);
}

/*
Output

28
*/


// Example 5

{
    // console.log(country);
    const country = "India";
    console.log(country);
}

/*
Output

India
*/
