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
