# Data Types in JavaScript

## What is a Data Type?

A data type defines the type of value stored in a variable.

Example:

```javascript
let age = 28;
```

Here, `age` stores a Number.

---

# Types of Data Types

JavaScript has 8 data types.

## Primitive Data Types

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

## Non-Primitive Data Type

- Object

---

# String

Stores text values.

```javascript
const name = "Chaitanya";
```

---

# Number

Stores integer and decimal values.

```javascript
const age = 28;
```

---

# Boolean

Stores true or false.

```javascript
const isEmployee = true;
```

---

# Undefined

Variable declared but not assigned.

```javascript
let city;
```

---

# Null

Represents an intentional empty value.

```javascript
let manager = null;
```

---

# BigInt

Stores very large integers.

```javascript
const salary = 12345678901234567890n;
```

---

# Symbol

Creates unique identifiers.

```javascript
const id = Symbol("id");
```

---

# Object

Stores collections of data.

```javascript
const employee = {
    name: "Chaitanya",
    company: "APSS Media"
};
```

---

# Primitive vs Non-Primitive

| Primitive | Non-Primitive |
|------------|---------------|
| Stored by value | Stored by reference |
| Immutable | Mutable |
| Compared by value | Compared by reference |

---

# typeof Operator

Used to determine the type of a value.

```javascript
typeof "Hello"
typeof 100
typeof true
typeof {}
typeof []
```

---

# Why does typeof null return object?

This is a historical bug in JavaScript that has been kept for backward compatibility.

---

# Array

Arrays are objects in JavaScript.

Always use:

```javascript
Array.isArray(array)
```

to check whether a value is an array.

---

# Interview Questions

1. Difference between undefined and null.
2. Difference between Primitive and Non-Primitive data types.
3. Why does typeof null return object?
4. Why does typeof [] return object?
5. What is the typeof operator?

---

# Best Practices

- Use `typeof` to identify primitive data types.
- Use `Array.isArray()` to check arrays.
- Use `null` when you intentionally want an empty value.
