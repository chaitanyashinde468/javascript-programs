# Polyfills

## What is a Polyfill?

A Polyfill is custom JavaScript code that adds support for newer features in older environments.

---

# Why Polyfills Exist?

Example

```javascript
arr.includes(2);
```

Older browsers may not support:

```javascript
includes()
```

Polyfills provide the same functionality.

---

# Common Polyfills

- map()
- filter()
- reduce()
- includes()
- bind()

---

# Example

```javascript
Array.prototype.myIncludes = function(value){

    for(let i = 0; i < this.length; i++){

        if(this[i] === value){

            return true;

        }

    }

    return false;

}
```

---

# Real World Usage

Modern projects rarely require writing Polyfills manually.

However interviewers ask Polyfills to test:

- JavaScript fundamentals
- Loops
- Closures
- Prototype knowledge

---

# Why Ask Polyfills?

Because Polyfills combine:

- Functions
- Arrays
- Loops
- Prototypes
- Callbacks

into one problem.

---

# Summary

Polyfill

→ Custom implementation of existing functionality

Purpose

→ Support older environments

Interview Purpose

→ Test JavaScript fundamentals

# Polyfills Questions

## Q1 What is a Polyfill?

A Polyfill is custom code that adds support for newer JavaScript features in older environments.

---

## Q2 Why are Polyfills used?

To provide functionality that is not available natively.

---

## Q3 Which methods are commonly asked as Polyfills?

- map()
- filter()
- reduce()
- bind()
- includes()

---

## Q4 Why do interviewers ask Polyfills?

To test JavaScript fundamentals and problem-solving skills.

---

## Q5 Where are Polyfills attached?

Usually on prototypes.

Example

```javascript
Array.prototype.myMap
```

---

## Q6 What JavaScript concepts are required for Polyfills?

- Functions
- Loops
- Arrays
- Callbacks
- Prototypes
