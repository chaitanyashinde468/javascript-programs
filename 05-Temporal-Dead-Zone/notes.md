# Temporal Dead Zone (TDZ)

## What is TDZ?

The **Temporal Dead Zone (TDZ)** is the period between entering a scope and initializing a `let` or `const` variable.

During this period, the variable exists but cannot be accessed.

---

# Why does TDZ exist?

TDZ helps prevent accidental access to variables before they have been initialized.

This makes JavaScript safer and reduces bugs.

---

# Example

```javascript
console.log(city);

let city = "Pune";
```

Output

```
ReferenceError:
Cannot access 'city' before initialization
```

---

# var vs let

```javascript
console.log(language);

var language = "JavaScript";
```

Output

```
undefined
```

```javascript
console.log(city);

let city = "Pune";
```

Output

```
ReferenceError
```

---

# TDZ applies to

- let
- const

It does **not** apply to `var`.

---

# Questions

1. What is the Temporal Dead Zone?
2. Why does TDZ exist?
3. Does TDZ apply to var?
4. Why does let throw ReferenceError?
5. Difference between Hoisting and TDZ?

---

# Real-world Example

Always declare variables before using them.

Good

```javascript
const apiUrl = "/users";

fetch(apiUrl);
```

Avoid

```javascript
fetch(apiUrl);

const apiUrl = "/users";
```

---

# Best Practices

- Declare variables before using them.
- Prefer `const` by default.
- Use `let` when reassignment is needed.
- Avoid relying on hoisting.

  # Temporal Dead Zone Interview Questions

## Q1. What is TDZ?

The Temporal Dead Zone is the period between entering a scope and initializing a let or const variable.

---

## Q2. Does TDZ apply to var?

No.

---

## Q3. Why does var print undefined?

Because var is hoisted and initialized with undefined.

---

## Q4. Why does let throw ReferenceError?

Because it is hoisted but remains in the Temporal Dead Zone until initialization.

---

## Q5. Which is safer, var or let?

let, because TDZ prevents accidental usage before initialization.
