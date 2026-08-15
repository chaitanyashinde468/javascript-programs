# Prototype & Prototype Chain
 
## What is Prototype?

In JavaScript, every object has an internal link to another object called its prototype.

A prototype allows objects to share properties and methods.

---

# Why Prototype Exists?

Without prototypes:

```javascript
function Employee(name){

    this.name = name;

    this.greet = function(){

        console.log("Hello");

    };

}
```

Every object gets its own copy of greet().

Memory waste.

---

Better:

```javascript
Employee.prototype.greet = function(){

    console.log("Hello");

};
```

Now all objects share one function.

---

# Example

```javascript
function Employee(name){

    this.name = name;

}

Employee.prototype.company = "APSS Media";

const emp = new Employee("Chaitanya");

console.log(emp.company);
```

Output

```text
APSS Media
```

Even though company does not exist directly on emp.

JavaScript finds it through the prototype.

---

# Prototype Chain

When JavaScript looks for a property:

Step 1

Check current object.

Step 2

If not found, check prototype.

Step 3

If not found, check prototype's prototype.

Step 4

Continue until null.

This process is called:

```text
Prototype Chain
```

---

# Visual Representation

```text
emp
 ↓
Employee.prototype
 ↓
Object.prototype
 ↓
null
```

---

# Object.create()

Creates an object using another object as prototype.

```javascript
const dog = Object.create(animal);
```

dog inherits properties from animal.

---

# Real World Example

Array methods:

```javascript
const arr = [1,2,3];

arr.push(4);
```

Why push() works?

Because:

```text
arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null
```

push() exists on Array.prototype.

---

# Benefits

- Memory efficient
- Shared methods
- Supports inheritance
- Core JavaScript feature

---

# Constructor Function

```javascript
function Employee(name){

    this.name = name;

}
```

Using new:

```javascript
const emp = new Employee("Chaitanya");
```

JavaScript automatically links:

```text
emp
 ↓
Employee.prototype
```

---

# Summary

Prototype

→ Object used for inheritance

Prototype Chain

→ Lookup process through linked prototypes

Object.create()

→ Creates object with custom prototype

new keyword

→ Links object to constructor prototype

# Prototype & Prototype Chain Questions

## Q1 What is a Prototype?

A prototype is an object from which other objects inherit properties and methods.

---

## Q2 What is Prototype Chain?

The process JavaScript uses to search for properties through linked prototypes.

---

## Q3 Why are Prototypes used?

To share methods and properties among multiple objects and reduce memory usage.

---

## Q4 What happens when a property is not found?

JavaScript searches the prototype chain until it finds the property or reaches null.

---

## Q5 What is Object.create()?

Creates a new object using another object as its prototype.

---

## Q6 Difference Between Own Property and Prototype Property?

Own Property

```javascript
emp.name
```

Stored directly on object.

Prototype Property

```javascript
emp.greet()
```

Comes from prototype.

---

## Q7 What does new keyword do?

1. Creates new object
2. Links object to prototype
3. Executes constructor
4. Returns object

---

## Q8 Why does array.push() work?

Because push() exists on Array.prototype.

---

## Q9 Is JavaScript class-based?

No.

JavaScript is prototype-based.

---

## Q10 What is the end of Prototype Chain?

null
