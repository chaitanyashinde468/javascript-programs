# Async / Await

## What is Async/Await?

Async/Await is syntactic sugar built on top of Promises.

It makes asynchronous code look like synchronous code.

---

# async Keyword

The async keyword makes a function return a Promise.

```javascript
async function hello() {

    return "Hello";

}
```

Internally:

```javascript
Promise.resolve("Hello");
```

---

# await Keyword

The await keyword pauses execution until the Promise settles.

```javascript
const result = await fetchData();
```

await can only be used inside an async function.

---

# Error Handling

Use try/catch.

```javascript
try {

    const data = await fetchData();

} catch(error) {

    console.log(error);

}
```

---

# Async/Await vs Promise

Promise

```javascript
fetchData()

    .then(data => {

        console.log(data);

    })

    .catch(error => {

        console.log(error);

    });
```

Async/Await

```javascript
try {

    const data = await fetchData();

    console.log(data);

} catch(error) {

    console.log(error);

}
```

Async/Await is easier to read.

---

# Parallel Execution

Bad

```javascript
await getUsers();

await getCampaigns();

await getLeads();
```

Good

```javascript
await Promise.all([
    getUsers(),
    getCampaigns(),
    getLeads()
]);
```

---

# Real World Example

Node.js API

```javascript
const users = await User.findAll();
```

Database Query

```javascript
const campaigns = await Campaign.findAll();
```

External API

```javascript
const response = await fetch(url);
```

---

# Best Practices

- Use try/catch.
- Use Promise.all() when tasks are independent.
- Avoid unnecessary sequential awaits.
- Keep async functions small and readable.

# Async/Await Questions

## Q1 What is async?

The async keyword makes a function return a Promise.

---

## Q2 What is await?

await pauses execution until a Promise settles.

---

## Q3 Can await be used outside async?

No.

await can only be used inside async functions.

---

## Q4 Is async/await better than Promise?

Not better.

It is built on Promises and provides cleaner syntax.

---

## Q5 How do you handle errors in async/await?

Using try/catch.

---

## Q6 What does async function return?

A Promise.

---

## Q7 Can multiple awaits run in parallel?

Not automatically.

Use Promise.all().

---

## Q8 Difference between Promise.all() and multiple awaits?

Multiple awaits are sequential.

Promise.all() runs concurrently.

---

## Q9 What happens if await receives a non-Promise value?

JavaScript wraps it in Promise.resolve().

---

## Q10 Where have you used async/await?

- API calls
- Database queries
- External integrations
- File operations
- Authentication flows
