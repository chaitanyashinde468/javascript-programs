# Promises in JavaScript

## What is a Promise?

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

A Promise allows us to handle asynchronous results without blocking the main JavaScript execution.

---

# Promise States

A Promise has three states:

### 1. Pending

The operation has not completed yet.

### 2. Fulfilled

The operation completed successfully.

### 3. Rejected

The operation failed.

```text
Pending
   |
   +----> Fulfilled
   |
   +----> Rejected
```

Once a Promise becomes fulfilled or rejected, it is called **settled**.

---

# Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {

    resolve("Success");

});
```

`resolve()` means the operation was successful.

`reject()` means the operation failed.

---

# Consuming a Promise

## then()

Used when a Promise is fulfilled.

```javascript
promise.then((result) => {

    console.log(result);

});
```

---

## catch()

Used to handle rejection.

```javascript
promise.catch((error) => {

    console.log(error);

});
```

---

## finally()

Runs after the Promise is settled, regardless of whether it was fulfilled or rejected.

```javascript
promise.finally(() => {

    console.log("Operation completed");

});
```

---

# Promise Chaining

Promises can be chained using multiple `then()` calls.

```javascript
Promise.resolve(10)

    .then((value) => {

        return value * 2;

    })

    .then((value) => {

        return value + 5;

    });
```

Each `then()` can return a value that becomes the input for the next `then()`.

---

# Promise.all()

Runs multiple Promises concurrently and waits for all of them to fulfill.

```javascript
Promise.all([
    promise1,
    promise2,
    promise3
])
```

If all succeed:

```text
results are returned
```

If any Promise rejects:

```text
Promise.all() rejects
```

### Real-world example

Suppose an API needs:

- User information
- Campaign information
- Lead information

and all three are required.

```javascript
Promise.all([
    getUser(),
    getCampaign(),
    getLeads()
])
```

---

# Promise.race()

Returns the result of the first Promise that settles.

```javascript
Promise.race([
    promise1,
    promise2
])
```

The first Promise to fulfill or reject determines the result.

---

# Promise.allSettled()

Waits for all Promises to settle.

It returns the result of every Promise, whether fulfilled or rejected.

```javascript
Promise.allSettled([
    promise1,
    promise2
])
```

Useful when you want the result of every operation even if some operations fail.

---

# Promise.any()

Returns the first Promise that fulfills.

Rejected Promises are ignored until all Promises reject.

```javascript
Promise.any([
    promise1,
    promise2,
    promise3
])
```

If all Promises reject, `Promise.any()` rejects with an `AggregateError`.

---

# Promise vs Callback

Callbacks can lead to deeply nested code:

```javascript
getUser(function(user) {

    getCampaign(user, function(campaign) {

        getLeads(campaign, function(leads) {

            console.log(leads);

        });

    });

});
```

Promises make the flow easier to manage:

```javascript
getUser()

    .then(getCampaign)

    .then(getLeads)

    .then((leads) => {

        console.log(leads);

    })

    .catch((error) => {

        console.log(error);

    });
```

---

# Promises and Event Loop

Promise callbacks such as `then()`, `catch()` and `finally()` are handled through the **Microtask Queue**.

Microtasks are processed before the next task/callback from the task queue after the current synchronous execution completes.

Example:

```javascript
console.log("1");

setTimeout(() => {

    console.log("2");

}, 0);

Promise.resolve().then(() => {

    console.log("3");

});

console.log("4");
```

Output:

```text
1
4
3
2
```

---

# Real-world Usage

Promises are commonly used for:

- API calls
- Database operations
- File operations
- HTTP requests
- External service integrations
- Timers
- Asynchronous processing

---

# Best Practices

- Always handle rejected Promises.
- Use `catch()` or `try/catch` with async/await.
- Avoid unnecessarily deep Promise chains.
- Use `Promise.all()` when independent operations can run concurrently.
- Use `Promise.allSettled()` when every operation's result is required.
- Use `Promise.race()` when the first settled operation matters.

# Promises — Questions

## Q1. What is a Promise?

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

---

## Q2. What are the states of a Promise?

A Promise has three states:

- Pending
- Fulfilled
- Rejected

Fulfilled and rejected are collectively called settled states.

---

## Q3. What is the difference between resolve() and reject()?

`resolve()` fulfills a Promise.

`reject()` rejects a Promise.

---

## Q4. What is Promise chaining?

Promise chaining means using multiple `then()` calls where the result of one operation is passed to the next operation.

---

## Q5. What is the difference between then() and catch()?

`then()` handles successful Promise results.

`catch()` handles rejected Promises.

---

## Q6. What does finally() do?

`finally()` executes after a Promise settles, regardless of whether it was fulfilled or rejected.

---

## Q7. Difference between Promise.all() and Promise.allSettled()?

`Promise.all()` rejects as soon as one Promise rejects.

`Promise.allSettled()` waits for every Promise to settle and returns the status of each operation.

---

## Q8. Difference between Promise.all() and Promise.race()?

`Promise.all()` waits for all Promises to fulfill.

`Promise.race()` settles when the first Promise settles.

---

## Q9. What is Promise.any()?

`Promise.any()` fulfills when the first Promise fulfills.

It ignores rejected Promises until all Promises reject.

---

## Q10. Where are Promises used in real applications?

Promises are commonly used for:

- API calls
- Database operations
- File operations
- External API integrations
- HTTP requests
- Asynchronous processing

---

## Q11. Where are Promise callbacks executed?

Promise callbacks such as `then()` and `catch()` are handled through the Microtask Queue.

---

## Q12. Which executes first: Promise or setTimeout(..., 0)?

A Promise callback generally executes before a `setTimeout(..., 0)` callback after the current synchronous code completes because Promise callbacks use the Microtask Queue, which is processed before the task/callback queue.

---

## Q13. What happens if one Promise rejects in Promise.all()?

`Promise.all()` rejects when any input Promise rejects.

---

## Q14. Can a Promise change from fulfilled back to pending?

No.

Once a Promise is fulfilled or rejected, its state cannot change again.

---

## Q15. Why are Promises better than deeply nested callbacks?

Promises provide a cleaner structure for handling asynchronous operations, support chaining, and provide centralized error handling.
