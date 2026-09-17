# 📦 Day 13 — JavaScript Modules

## 📌 Overview

JavaScript Modules allow us to split a large application into smaller, reusable, and maintainable files.

Instead of keeping all our code in one JavaScript file, we can organize functionality into separate modules and share code between them using:

* `export`
* `import`

Modules are especially important for modern JavaScript applications and form the foundation for how code is organized in **TypeScript and Angular**.

---

# 🎯 Learning Objectives

By the end of this day, I learned:

* What JavaScript modules are
* Why modules are useful
* Named exports
* Named imports
* Default exports
* Default imports
* Exporting variables
* Exporting functions
* Exporting classes
* Import aliases using `as`
* `import * as`
* Module scope
* Using multiple modules together
* How JavaScript modules relate to Angular

---

# 1️⃣ What is a JavaScript Module?

A module is a JavaScript file that contains code which can be shared with other JavaScript files.

Example:

```text
project/
│
├── math.js
├── user.js
└── app.js
```

Each file can have its own responsibility.

```text
math.js
   ↓
Mathematical functions

user.js
   ↓
User-related functionality

app.js
   ↓
Application logic
```

---

# 2️⃣ Why Do We Use Modules?

Without modules, a large application can become one huge JavaScript file.

Modules help with:

* Code organization
* Reusability
* Maintainability
* Separation of concerns
* Avoiding global variables
* Easier testing
* Easier debugging
* Managing large applications

---

# 3️⃣ Named Exports

A named export allows us to export multiple values from a module.

### math.js

```javascript
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}
```

### app.js

```javascript
import { add, subtract, multiply } from "./math.js";

console.log(add(10, 20));
console.log(subtract(20, 10));
console.log(multiply(10, 5));
```

Output:

```text
30
10
50
```

Named imports use curly braces:

```javascript
import { add } from "./math.js";
```

---

# 4️⃣ Exporting Variables

Variables can also be exported.

### config.js

```javascript
export const appName = "My App";
export const version = "1.0";
```

### app.js

```javascript
import { appName, version } from "./config.js";

console.log(appName);
console.log(version);
```

Output:

```text
My App
1.0
```

---

# 5️⃣ Exporting Classes

Classes can be exported as named exports.

### student.js

```javascript
export class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hey I'm ${this.name}, age ${this.age}`);
    }
}
```

### app.js

```javascript
import { Student } from "./student.js";

const student = new Student("Shivani", 32);

student.introduce();
```

Output:

```text
Hey I'm Shivani, age 32
```

---

# 6️⃣ Default Export

A module can have **one default export**.

Example:

### calculator.js

```javascript
export default function calculateTotal(price, quantity) {
    return price * quantity;
}
```

Importing a default export:

```javascript
import calculateTotal from "./calculator.js";

console.log(calculateTotal(200, 2));
```

Output:

```text
400
```

---

# 7️⃣ Default Export Can Be a Variable

A default export doesn't have to be a function.

Example:

```javascript
const appName = "My App";

export default appName;
```

Import:

```javascript
import name from "./config.js";

console.log(name);
```

A default export can be:

* Variable
* Function
* Class
* Object
* Other valid JavaScript values

---

# 8️⃣ Named Export vs Default Export

| Named Export                       | Default Export                  |
| ---------------------------------- | ------------------------------- |
| Multiple allowed                   | Only one allowed per module     |
| Uses `{}` when importing           | Does not use `{}`               |
| Import normally uses exported name | Import can use any local name   |
| `export function add()`            | `export default function add()` |
| `import { add }`                   | `import add`                    |

### Named export

```javascript
export function add() {}
```

```javascript
import { add } from "./math.js";
```

### Default export

```javascript
export default function add() {}
```

```javascript
import calculate from "./math.js";
```

---

# 9️⃣ Import Aliases

We can rename a named import using `as`.

### tax.js

```javascript
export function calculateTax(amount) {
    return amount * 0.18;
}
```

### app.js

```javascript
import { calculateTax as tax } from "./tax.js";

console.log(tax(1000));
```

Output:

```text
180
```

The original exported name remains:

```text
calculateTax
```

But inside `app.js`, we use:

```text
tax
```

Syntax:

```javascript
import { originalName as newName } from "./file.js";
```

---

# 🔟 Import Everything with `import * as`

Suppose `math.js` contains:

```javascript
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}
```

We can import everything as:

```javascript
import * as math from "./math.js";
```

Then:

```javascript
console.log(math.add(40, 20));
console.log(math.subtract(40, 20));
console.log(math.multiply(40, 20));
console.log(math.divide(40, 20));
```

Conceptually:

```text
math
│
├── add()
├── subtract()
├── multiply()
└── divide()
```

---

# 1️⃣1️⃣ Module Scope

Variables declared inside a module don't automatically become global.

Example:

### user.js

```javascript
const username = "Shivani";
```

Another file cannot directly access:

```javascript
console.log(username);
```

To make it available:

```javascript
export const username = "Shivani";
```

Then:

```javascript
import { username } from "./user.js";
```

Modules therefore help prevent accidental global variables.

---

# 1️⃣2️⃣ Module File Paths

For files in the same directory:

```javascript
import { add } from "./math.js";
```

`./` means:

> Current directory

Example:

```text
src/
│
├── app.js
└── math.js
```

If the module is inside a folder:

```text
src/
│
├── app.js
└── utils/
    └── math.js
```

Import:

```javascript
import { add } from "./utils/math.js";
```

---

# 1️⃣3️⃣ Modules in the Browser

When using JavaScript modules directly in HTML:

```html
<script type="module" src="app.js"></script>
```

The important part is:

```html
type="module"
```

This tells the browser to treat the JavaScript file as a module.

---

# 🏗️ Real-World Module Structure

A larger application could be organized like:

```text
src/
│
├── app.js
│
├── users/
│   └── user.js
│
├── products/
│   └── product.js
│
├── cart/
│   └── cart.js
│
└── utils/
    ├── validation.js
    └── formatting.js
```

Each module has a specific responsibility.

This follows the idea of:

> **Separation of Concerns**

---

# 🧩 Day 13 Mini Project

I created a small project combining:

* Classes
* Named exports
* Default exports
* Imports
* Multiple modules
* Updating object state

### Project structure

```text
project/
│
├── user.js
├── calculator.js
└── app.js
```

### user.js

```javascript
export class User {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    showBalance() {
        console.log(`Balance for ${this.name} is ${this.balance}`);
    }
}
```

### calculator.js

```javascript
export function add(total, amount) {
    return total + amount;
}

export function subtract(total, amount) {
    return total - amount;
}

export default function calculateTotal(total) {
    return total;
}
```

### app.js

```javascript
import { User } from "./user.js";

import { add, subtract } from "./calculator.js";

import calculateTotal from "./calculator.js";

const user = new User("Shivani", 5000);

console.log("Main balance:");

user.showBalance();

console.log("After addition:");

user.balance = add(user.balance, 1000);

user.showBalance();

console.log("After deduction:");

user.balance = subtract(user.balance, 500);

user.showBalance();

console.log(calculateTotal(user.balance));
```

---

# 🧠 Key Takeaways

### Export

Makes something available to other modules.

```javascript
export function add() {}
```

### Import

Uses an exported value from another module.

```javascript
import { add } from "./math.js";
```

### Named Export

```javascript
export function add() {}
```

```javascript
import { add } from "./math.js";
```

### Default Export

```javascript
export default function add() {}
```

```javascript
import add from "./math.js";
```

### Import Alias

```javascript
import { calculateTax as tax } from "./tax.js";
```

### Import Everything

```javascript
import * as math from "./math.js";
```

### Default Export Rule

A module can have:

```text
Multiple named exports
+
One default export
```

---

# 🎯 Interview Questions

1. What is a JavaScript module?
2. Why do we use modules?
3. What is `export`?
4. What is `import`?
5. What is a named export?
6. What is a default export?
7. What is the difference between named and default exports?
8. Can a module have multiple named exports?
9. How many default exports can a module have?
10. Can a default export be a variable?
11. Why do named imports use `{}`?
12. Why don't default imports use `{}`?
13. What does `import * as math` mean?
14. What does `as` do in an import?
15. What is module scope?
16. What does `./` mean in an import path?
17. Why are modules useful in large applications?
18. How are JavaScript modules related to Angular?

---

# 🔗 Connection to Angular

JavaScript modules are an important foundation for TypeScript and Angular.

For example, Angular code commonly contains:

```typescript
import { Component } from '@angular/core';
```

and:

```typescript
import { UserService } from './user.service';
```

The underlying concept is the same:

```text
JavaScript Modules
       ↓
ES Modules
       ↓
TypeScript Modules
       ↓
Angular Applications
```

Understanding `import` and `export` now will make Angular's file structure much easier to understand later.

---

# ✅ Day 13 Status

* [x] Modules
* [x] Named exports
* [x] Named imports
* [x] Default exports
* [x] Default imports
* [x] Default exported variables
* [x] Exporting classes
* [x] Import aliases
* [x] `import * as`
* [x] Module scope
* [x] Multiple module project
* [x] Hands-on exercises
* [x] Mini project
* [x] Interview concepts

## 🚀 Next

**Day 14 — Asynchronous JavaScript**

Topics:

* Synchronous vs Asynchronous JavaScript
* `setTimeout()`
* Callbacks
* Call Stack
* Web APIs
* Callback Queue
* Event Loop
* Callback Hell
* Promises
* `async/await`
* API-style asynchronous operations

This will build the foundation for **HTTP calls and RxJS in Angular**.
