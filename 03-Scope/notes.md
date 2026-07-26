# Scope in JavaScript

## What is Scope?

Scope determines where a variable can be accessed.

---

## Types of Scope

- Global Scope
- Function Scope
- Block Scope

---

## Global Scope

Variables declared outside functions are accessible everywhere.

---

## Function Scope

Variables declared with `var` inside a function are accessible only inside that function.

---

## Block Scope

Variables declared using `let` and `const` are accessible only inside the block `{}`.

---

## var vs let

| var | let |
|------|------|
| Function Scoped | Block Scoped |
| Can escape blocks | Cannot escape blocks |

---

## Questions

1. What is Scope?
2. Difference between Global, Function and Block Scope.
3. Is var block scoped?
4. Why should we avoid global variables?
5. Difference between var and let with respect to scope.

---

## Best Practices

- Prefer `const` by default.
- Use `let` when reassignment is needed.
- Avoid `var` in modern JavaScript.
- Minimise the use of global variables.
