// Global Scope

const company = "APSS Media";

function printCompany() {
    console.log(company);
}

printCompany();

// Function Scope

function employee() {

    var name = "Chaitanya";

    console.log(name);

}

employee();

// Block Scope

if (true) {

    let city = "Pune";

    const state = "Maharashtra";

    console.log(city);

    console.log(state);

}

// var vs let

if (true) {

    var language = "JavaScript";

}

console.log(language);

// let example

if (true) {

    let framework = "React";

    console.log(framework);

}
