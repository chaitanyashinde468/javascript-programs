# Closures in JavaScript

## What is a Closure?

A closure is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

---

# Definition

A closure gives a function access to its lexical scope even after the outer function has returned.

---

# Why are Closures important?

Closures help in:

- Data hiding
- Private variables
- Maintaining state
- Event handlers
- Timers
- Callbacks
- React Hooks
- Node.js asynchronous programming

---

# Example

```javascript
function outer(){

    let name = "Chaitanya";

    function inner(){

        console.log(name);

    }

    return inner;

}

const result = outer();

result();
```

Output

```
Chaitanya
```

---

# How does it work?

1. outer() executes.
2. name is created.
3. inner() is returned.
4. outer() finishes.
5. inner() still remembers name.

This memory is called a Closure.

---

# Counter Example

```javascript
function counter(){

    let count = 0;

    return function(){

        count++;

        console.log(count);

    };

}
```

Each function gets its own private copy of `count`.

---

# Real-world Uses

- React Hooks
- Event Listeners
- setTimeout()
- setInterval()
- Memoization
- API Caching
- Authentication Tokens

---

# Questions

1. What is a Closure?
2. Why are Closures useful?
3. Can Closures create private variables?
4. Where have you used Closures?
5. Difference between Scope and Closure?

---

# Best Practices

- Use closures for private data.
- Avoid unnecessary closures to reduce memory usage.
- Use closures when maintaining state.

# Closures Questions

## Q1. What is a Closure?

A closure is created when an inner function remembers variables from its outer function after the outer function has finished execution.

---

## Q2. Why are Closures useful?

They help create private variables, maintain state, and are widely used in callbacks, event handlers, React Hooks, and Node.js.

---

## Q3. Can Closures create private variables?

Yes.

Closures allow variables to be accessed only through the returned function.

---

## Q4. Where are Closures used?

- React Hooks
- Event Listeners
- Timers
- Callbacks
- Memoization
- Authentication
- Caching

---

## Q5. Difference between Scope and Closure?

Scope defines where variables are accessible.

Closure allows a function to remember variables from its outer scope even after the outer function has returned.
