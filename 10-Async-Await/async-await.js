/**
 * Topic: Async / Await
 * Description: Modern way of handling asynchronous code.
 */


/*----------------------------------------------------
Example 1: Async Function
----------------------------------------------------*/

async function getMessage() {

    return "Hello Chaitanya";

}

getMessage()

    .then((result) => {

        console.log(result);

    });

/*
Output

Hello Chaitanya
*/


/*----------------------------------------------------
Example 2: Await
----------------------------------------------------*/

function fetchData() {

    return Promise.resolve("Data Received");

}

async function getData() {

    const result = await fetchData();

    console.log(result);

}

getData();

/*
Output

Data Received
*/


/*----------------------------------------------------
Example 3: Await with Delay
----------------------------------------------------*/

function delayedData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data after 2 seconds");

        }, 2000);

    });

}

async function processData() {

    const result = await delayedData();

    console.log(result);

}

processData();

/*
Output

Data after 2 seconds
*/


/*----------------------------------------------------
Example 4: Error Handling
----------------------------------------------------*/

function fetchUser() {

    return Promise.reject("User not found");

}

async function getUser() {

    try {

        const user = await fetchUser();

        console.log(user);

    } catch (error) {

        console.log(error);

    }

}

getUser();

/*
Output

User not found
*/


/*----------------------------------------------------
Example 5: Multiple Awaits
----------------------------------------------------*/

async function execute() {

    const a = await Promise.resolve(10);

    const b = await Promise.resolve(20);

    console.log(a + b);

}

execute();

/*
Output

30
*/
