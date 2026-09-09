# JavaScript `var`, `let`, and `const`

## 📚 Day 1 — Variable Declarations

JavaScript provides three ways to declare variables:

* `var`
* `let`
* `const`

The major differences are based on:

1. Scope
2. Redeclaration
3. Reassignment
4. Hoisting
5. Mutability

---

## 1. `var`

`var` is the older way of declaring variables in JavaScript.

```javascript
var name = "Shivani";

name = "Pooja";

console.log(name); // Pooja
```

### Reassignment

`var` allows reassignment.

```javascript
var age = 30;

age = 32;

console.log(age); // 32
```

### Redeclaration

`var` also allows redeclaration in the same scope.

```javascript
var name = "Shivani";
var name = "Pooja";

console.log(name); // Pooja
```

### Function Scope

`var` is **function-scoped**, not block-scoped.

```javascript
if (true) {
    var x = 10;
}

console.log(x); // 10
```

The `if` block does not create a separate scope for `var`.

However, a function does:

```javascript
function test() {
    var x = 10;
}

console.log(x); // ReferenceError
```

### Key points

```text
var
├── Function scoped
├── Reassignment allowed
├── Redeclaration allowed
└── Does not respect block scope
```

---

# 2. `let`

`let` was introduced in ES6 (ES2015) and is preferred over `var` when a variable needs to be reassigned.

### Reassignment

`let` allows reassignment.

```javascript
let age = 30;

age = 32;

console.log(age); // 32
```

### Redeclaration

`let` does NOT allow redeclaration in the same scope.

```javascript
let age = 30;
let age = 32; // SyntaxError
```

### Block Scope

`let` is **block-scoped**.

```javascript
if (true) {
    let x = 10;
}

console.log(x); // ReferenceError
```

The variable exists only inside the block.

### Key points

```text
let
├── Block scoped
├── Reassignment allowed
├── Redeclaration not allowed in same scope
└── Respects block scope
```

---

# 3. `const`

`const` is used when a variable should not be reassigned.

```javascript
const age = 32;

age = 35; // TypeError
```

### Redeclaration

`const` also does NOT allow redeclaration.

```javascript
const age = 32;
const age = 35; // SyntaxError
```

### Initialization Required

A `const` variable must be initialized when declared.

```javascript
const age = 32; // ✅
```

This is invalid:

```javascript
const age; // ❌
age = 32;
```

### Block Scope

Like `let`, `const` is block-scoped.

```javascript
if (true) {
    const x = 10;
}

console.log(x); // ReferenceError
```

---

# 4. `const` Does NOT Mean Immutable

This is an important distinction.

`const` prevents **reassignment of the variable**, but it does not make an object or array immutable.

```javascript
const user = {
    name: "Shivani"
};

user.name = "Pooja";

console.log(user.name); // Pooja
```

This works because the object itself was mutated.

However, this is not allowed:

```javascript
const user = {
    name: "Shivani"
};

user = {
    name: "Pooja"
};
```

Here we are trying to make `user` point to a different object.

```text
user ───────→ Object A
```

This is allowed:

```text
user ───────→ Object A
                 ↓
              name changed
```

This is not:

```text
user ───────→ Object A

user ───────→ Object B  ❌
```

### Important rule

> `const` prevents reassignment, not mutation.

---

# 5. `var` vs `let` vs `const`

| Feature                     | `var`             | `let` | `const`                |
| --------------------------- | ----------------- | ----- | ---------------------- |
| Scope                       | Function          | Block | Block                  |
| Reassignment                | ✅ Yes             | ✅ Yes | ❌ No                   |
| Redeclaration               | ✅ Yes             | ❌ No  | ❌ No                   |
| Must initialize immediately | ❌ No              | ❌ No  | ✅ Yes                  |
| Block scoped                | ❌ No              | ✅ Yes | ✅ Yes                  |
| Object mutation             | ✅                 | ✅     | ✅                      |
| Modern recommendation       | ❌ Generally avoid | ✅     | ✅ Preferred by default |

---

# 6. Shadowing

Shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope.

```javascript
let x = 10;

{
    let x = 20;

    console.log(x); // 20
}

console.log(x); // 10
```

The inner `x` **shadows** the outer `x`.

The outer variable is not changed.

```text
Outer scope
└── x = 10

    Block scope
    └── x = 20
```

---

# 7. Important Scope Difference

### `var`

```javascript
var x = 10;

{
    var x = 20;
}

console.log(x); // 20
```

Because `var` does not respect block scope.

### `let`

```javascript
let x = 10;

{
    let x = 20;
}

console.log(x); // 10
```

Because the inner `let` belongs to the block.

---

# 8. Practical Rule

In modern JavaScript:

### Use `const` by default

```javascript
const name = "Shivani";
```

### Use `let` when reassignment is required

```javascript
let count = 0;

count++;
```

### Generally avoid `var`

```javascript
var name = "Shivani";
```

`var` is still valid JavaScript and you will encounter it in older codebases, but `let` and `const` provide safer and more predictable scoping.

---

# 🧠 Mental Model

Remember these three statements:

### `var`

> **Function scoped + can redeclare + can reassign**

### `let`

> **Block scoped + cannot redeclare + can reassign**

### `const`

> **Block scoped + cannot redeclare + cannot reassign**

And remember:

> **`const` does not make objects or arrays immutable.**

---

# 🎯 Interview Questions

### 1. What is the difference between `var`, `let`, and `const`?

`var` is function-scoped and allows both redeclaration and reassignment.

`let` is block-scoped, allows reassignment, but does not allow redeclaration in the same scope.

`const` is block-scoped and does not allow reassignment or redeclaration.

---

### 2. Is `const` immutable?

No.

`const` prevents reassignment of the variable, but objects and arrays referenced by a `const` variable can still be mutated.

---

### 3. Why is `let` preferred over `var`?

`let` is block-scoped and prevents accidental redeclaration, making variable behavior more predictable.

---

### 4. Why does this work?

```javascript
if (true) {
    var x = 10;
}

console.log(x);
```

Because `var` is function-scoped and does not create a separate block scope.

---

### 5. Why does this fail?

```javascript
if (true) {
    let x = 10;
}

console.log(x);
```

Because `let` is block-scoped and `x` only exists inside the `if` block.

---

## 🔑 Final Cheat Sheet

```text
┌─────────┬──────────────┬──────────────┬───────────────┐
│         │ Scope        │ Reassign     │ Redeclare     │
├─────────┼──────────────┼──────────────┼───────────────┤
│ var     │ Function     │ ✅           │ ✅            │
│ let     │ Block        │ ✅           │ ❌            │
│ const   │ Block        │ ❌           │ ❌            │
└─────────┴──────────────┴──────────────┴───────────────┘
```

### Golden Rule

```javascript
const → default choice
let   → when value needs to change
var   → understand it, but generally avoid in modern JS
```
