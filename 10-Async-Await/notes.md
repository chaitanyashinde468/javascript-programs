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
