# Event Loop in JavaScript

## What is the Event Loop?

The Event Loop is a mechanism that allows JavaScript to handle asynchronous operations even though JavaScript is single-threaded.

---

# Components

1. Call Stack
2. Web APIs
3. Callback Queue
4. Event Loop

---

# Call Stack

The Call Stack executes synchronous code.

Example

```javascript
console.log("Hello");
```

---

# Web APIs

Operations like:

- setTimeout
- setInterval
- fetch
- DOM events

are handled by Web APIs.

---

# Callback Queue

Completed asynchronous tasks wait here before execution.

---

# Event Loop

The Event Loop continuously checks:

- Is Call Stack empty?

If Yes:

- Move callback from Queue to Stack.

---

# Example

```javascript
console.log("Start");

setTimeout(() => {

    console.log("Timeout");

}, 0);

console.log("End");
```

Output

```
Start
End
Timeout
```

---

# Why?

setTimeout does not go directly to the Call Stack.

It goes to:

Web API

↓

Callback Queue

↓

Event Loop

↓

Call Stack

---

# Real World Usage

Node.js APIs

Database Calls

HTTP Requests

File Uploads

Timers

---

# Questions

1. What is Event Loop?
2. Is JavaScript single-threaded?
3. Why does setTimeout execute later?
4. What is Callback Queue?
5. What is Call Stack?

---

# Best Practices

- Avoid blocking the Call Stack.
- Use async operations wisely.
- Understand execution order before debugging.

# Event Loop Interview Questions

## Q1 What is Event Loop?

A mechanism that allows JavaScript to process asynchronous tasks while remaining single-threaded.

---

## Q2 Is JavaScript single-threaded?

Yes.

JavaScript executes one task at a time using a single Call Stack.

---

## Q3 Why does setTimeout(...,0) run later?

Because it first enters Web APIs and Callback Queue before reaching the Call Stack.

---

## Q4 What are the components of Event Loop?

- Call Stack
- Web APIs
- Callback Queue
- Event Loop

---

## Q5 What is Call Stack?

The data structure where JavaScript executes synchronous code.
