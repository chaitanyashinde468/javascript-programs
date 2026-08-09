/**
 * Topic: Promises
 * Description: Understanding Promise states, creation,
 * consumption, chaining, error handling and Promise methods.
 */


/*----------------------------------------------------
Example 1: Creating a Promise
----------------------------------------------------*/

const promise = new Promise((resolve, reject) => {

    resolve("Operation completed successfully");

});

promise.then((result) => {

    console.log(result);

});

/*
Output

Operation completed successfully
*/


/*----------------------------------------------------
Example 2: Promise Rejection
----------------------------------------------------*/

const failedPromise = new Promise((resolve, reject) => {

    reject("Something went wrong");

});

failedPromise.catch((error) => {

    console.log(error);

});

/*
Output

Something went wrong
*/


/*----------------------------------------------------
Example 3: Promise States
----------------------------------------------------*/

const pendingPromise = new Promise((resolve, reject) => {

    // No resolve or reject

});

console.log(pendingPromise);

/*
Output

Promise { <pending> }

The exact console representation may vary by environment.
*/


/*----------------------------------------------------
Example 4: Promise with setTimeout
----------------------------------------------------*/

const delayedPromise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Data received");

    }, 1000);

});

delayedPromise.then((data) => {

    console.log(data);

});

/*
Output

Data received

(after approximately 1 second)
*/


/*----------------------------------------------------
Example 5: Promise Chaining
----------------------------------------------------*/

Promise.resolve(10)

    .then((value) => {

        return value * 2;

    })

    .then((value) => {

        return value + 5;

    })

    .then((value) => {

        console.log(value);

    });

/*
Output

25
*/


/*----------------------------------------------------
Example 6: Promise Error Handling
----------------------------------------------------*/

Promise.reject("API request failed")

    .then((result) => {

        console.log(result);

    })

    .catch((error) => {

        console.log("Error:", error);

    });

/*
Output

Error: API request failed
*/


/*----------------------------------------------------
Example 7: Promise.all()
----------------------------------------------------*/

const promise1 = Promise.resolve("Users");
const promise2 = Promise.resolve("Campaigns");
const promise3 = Promise.resolve("Leads");

Promise.all([promise1, promise2, promise3])

    .then((results) => {

        console.log(results);

    });

/*
Output

[ 'Users', 'Campaigns', 'Leads' ]

The exact console formatting may vary by environment.
*/


/*----------------------------------------------------
Example 8: Promise.all() with Rejection
----------------------------------------------------*/

const success = Promise.resolve("Success");

const failure = Promise.reject("Failure");

Promise.all([success, failure])

    .then((results) => {

        console.log(results);

    })

    .catch((error) => {

        console.log(error);

    });

/*
Output

Failure
*/


/*----------------------------------------------------
Example 9: Promise.race()
----------------------------------------------------*/

const fast = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Fast Promise");

    }, 500);

});

const slow = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Slow Promise");

    }, 1000);

});

Promise.race([fast, slow])

    .then((result) => {

        console.log(result);

    });

/*
Output

Fast Promise
*/


/*----------------------------------------------------
Example 10: Promise.allSettled()
----------------------------------------------------*/

const first = Promise.resolve("Success");

const second = Promise.reject("Failed");

Promise.allSettled([first, second])

    .then((results) => {

        console.log(results);

    });

/*
Output

[
    { status: "fulfilled", value: "Success" },
    { status: "rejected", reason: "Failed" }
]

The exact console formatting may vary by environment.
*/
