/**
 * Promise Practice
 *
 * Try solving these without looking at promises.js.
 */


/*----------------------------------------------------
Question 1
----------------------------------------------------*/

// Create a Promise that resolves with:
// "User fetched successfully"

const promise = new Promise((resolve, reject)=>{
	resolve("User fetched successfully")
})

promise.then((result)=>{
	console.log(result);
})

/*----------------------------------------------------
Question 2
----------------------------------------------------*/

// Create a Promise that rejects with:
// "Unable to fetch user"

// Handle the rejection using catch()

const promise = new Promise((resolve,reject)=>{
	reject("Unable to fetch user")
})

promise.catch((error)=>{
	console.log(error)
})

/*----------------------------------------------------
Question 3
----------------------------------------------------*/

// Create a Promise that resolves after 2 seconds.

const promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
	resolve("Success")
	},2000)
}) 

promise.then((result)=>{
	console.log(result)
})

/*----------------------------------------------------
Question 4
----------------------------------------------------*/

// Create two Promises and use Promise.all()
// to get both results.

const promise1 = new Promise((resolve,reject)=>{
    resolve(console.log("S1"))
})

const promise2 = new Promise((resolve,reject)=>{
    resolve(console.log("S2"))
})

Promise.all([promise1,promise2]);

/*----------------------------------------------------
Question 5
----------------------------------------------------*/

// Create three Promises where:
// - First resolves after 1 second
// - Second resolves after 2 seconds
// - Third resolves after 3 seconds
//
// Use Promise.race().
// Which result should you receive?

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(console.log("S1"))}
    , 2000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(console.log("S2"))}
    , 3000)
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(console.log("S3"))}
    , 4000)
})

Promise.race([promise1,promise2,promise3])

/*----------------------------------------------------
Question 6
----------------------------------------------------*/

// Create one fulfilled Promise and one rejected Promise.
//
// Use Promise.allSettled()
// and print the results.

const promise1 = new Promise((resolve,reject)=>{
    resolve(console.log("S1"))
})

const promise2 = new Promise((resolve,reject)=>{
    reject(console.log("S2"))
})

Promise.allSettled([promise1,promise2])
/*----------------------------------------------------
Question 7
----------------------------------------------------*/

// Predict the output before running:

console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

// prediction:
// A
// C
// B
// D
