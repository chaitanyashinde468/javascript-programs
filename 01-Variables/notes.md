# Variables in JavaScript

## What is a Variable?
A variable is used to store data.

Example
```
let name = "Chaitanya";
```

---
## Types of Variables

### var
- Function scoped
- Can be redeclared
- Can be reassigned
- Hoisted

Example
```javascript
var city = "Pune";
```

---
### let

- Block scoped
- Cannot be redeclared
- Can be reassigned

Example
```javascript
let age = 20;
```

---
### const

- Block scoped
- Cannot be redeclared
- Cannot be reassigned

Example
```javascript
const company = "APSS Media";
```

---

## Difference

| Feature  | var     | let   | const  |
|----------|------   |------ |--------|
| Scope    |Function | Block | Block  |
| Redeclare | ✅     | ❌   | ❌    |
| Reassign  | ✅     | ✅   | ❌    |

---

##  Questions

### Difference between var, let and const?

Answer:
var is function scoped while let and const are block scoped.
const cannot be reassigned.

---

### Which one should we use?
Use const by default.
Use let when the value changes.
Avoid var in modern JavaScript.

---

## Real-world Example
```javascript
const API_URL = "/api/users";
let page = 1;
page++;
```
