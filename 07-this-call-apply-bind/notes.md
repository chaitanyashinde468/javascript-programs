# this, call(), apply() and bind()

---

# What is this?

`this` refers to the object that is currently executing the function.

The value of `this` depends on **how the function is called**, not where it is defined.

---

# this inside an Object

```javascript
const employee = {

    name: "Chaitanya",

    display(){

        console.log(this.name);

    }

}
```

Output

```
Chaitanya
```

Here,

`this`

refers to

```
employee
```

---

# call()

`call()` invokes a function immediately.

It allows us to specify the value of `this`.

Syntax

```javascript
function.call(object,arg1,arg2)
```

Example

```javascript
greet.call(employee,"Pune","India");
```

---

# apply()

Works exactly like call()

Difference

Arguments are passed as an array.

Syntax

```javascript
function.apply(object,[arg1,arg2])
```

---

# bind()

Does not execute immediately.

Returns a new function.

Syntax

```javascript
const fn = greet.bind(employee);

fn();
```

---

# Difference

| Method | Executes Immediately | Arguments |
|----------|----------------------|-----------|
| call | Yes | Individual |
| apply | Yes | Array |
| bind | No | Individual |

---

# Arrow Function

Arrow functions don't have their own `this`.

They inherit `this` from the surrounding lexical scope.

---

# Real World Usage

Node.js

```javascript
router.get("/users", controller.getUsers.bind(controller));
```

React

```javascript
<button onClick={this.handleClick.bind(this)}>
```

Although React Hooks reduce the need for bind, understanding it is still important for interviews and legacy code.

---

# Best Practices

- Avoid unnecessary use of bind().
- Use arrow functions carefully because they don't create their own `this`.
- Prefer call/apply only when changing function context is required.

---

# Summary

this

→ Current object

call()

→ Immediate execution

apply()

→ Immediate execution with array arguments

bind()

→ Returns a new function
