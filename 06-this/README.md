> **this is determined by how a function is called and not where the function was written.** 

# Day 6 — `this`, Regular Functions, Arrow Functions, `call`, `apply`, `bind`

## 🎯 Learning Goal

By the end of this topic, you should be able to:

* Explain what `this` means in JavaScript
* Understand why `this` changes depending on how a function is called
* Understand `this` in object methods
* Understand `this` in regular functions
* Understand `this` in arrow functions
* Understand lexical `this`
* Understand why arrow functions are useful in callbacks
* Understand `call()`, `apply()`, and `bind()`
* Predict the value of `this` in common code
* Understand why `this` matters in Angular and frontend applications

---

# 1. What is `this`?

`this` is a special JavaScript keyword that refers to the **current execution context**.

The easiest mental model is:

> **For regular functions, ****`this`**** is mainly determined by HOW the function is called.**

Do NOT think:

> "`this` always means the object containing the function."

That's incorrect.

Example:

```js
const person = {
    name: "Shivani",

    greet() {
        console.log(this.name);
    }
};

person.greet();
```

Output:

```text
Shivani
```

Why?

Because the function is called like:

```js
person.greet();
```

The object before `.` is:

```text
person
```

Therefore:

```js
this === person
```

So:

```js
this.name
```

means:

```js
person.name
```

---

# 2. The Most Important Mental Model

Whenever you see `this`, ask:

> **"How was this function called?"**

Example:

```js
person.greet();
```

Think:

```text
Who called greet?
        ↓
      person
        ↓
this = person
```

This is called **implicit binding**.

---

# 3. `this` in Object Methods

A function inside an object is commonly called a method.

```js
const user = {
    name: "Shivani",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Here:

```js
this === user
```

Therefore:

```js
this.name
```

is:

```js
user.name
```

Output:

```text
Shivani
```

---

## Another example

```js
const car = {
    brand: "Tata",

    showBrand() {
        console.log(this.brand);
    }
};

car.showBrand();
```

Output:

```text
Tata
```

Because:

```text
car.showBrand()
     ↓
this = car
```

---

# 4. `this` Depends on the Call Site

Consider:

```js
const person = {
    name: "Shivani",

    greet() {
        console.log(this.name);
    }
};

person.greet();
```

Here:

```text
this → person
```

But now:

```js
const greetFunction = person.greet;

greetFunction();
```

We are no longer doing:

```js
person.greet();
```

We are doing:

```js
greetFunction();
```

The function has been detached from the object.

Therefore, in strict mode:

```js
this === undefined
```

Trying to do:

```js
this.name
```

will result in an error because you're effectively doing:

```js
undefined.name
```

---

# 5. Same Function, Different `this`

The same function can have different `this` values depending on how it is called.

```js
function greet() {
    console.log(this.name);
}

const person = {
    name: "Shivani",
    greet
};

const anotherPerson = {
    name: "Rahul",
    greet
};
```

Now:

```js
person.greet();
```

gives:

```text
Shivani
```

And:

```js
anotherPerson.greet();
```

gives:

```text
Rahul
```

The function is the same.

The call site is different.

```text
person.greet()
      ↓
this = person

anotherPerson.greet()
      ↓
this = anotherPerson
```

---

# 6. Regular Functions

A regular function can be written as:

```js
function greet() {
    console.log(this);
}
```

or:

```js
const greet = function() {
    console.log(this);
};
```

or as an object method:

```js
const person = {
    greet() {
        console.log(this);
    }
};
```

Regular functions have their own dynamic `this`.

Their `this` depends on how they are called.

---

# 7. Regular Function Called Normally

```js
"use strict";

function greet() {
    console.log(this);
}

greet();
```

Output:

```text
undefined
```

Why?

Because the function was called normally:

```js
greet();
```

There is no object receiver.

So in strict mode:

```js
this === undefined
```

---

# 8. Regular Function Called as a Method

```js
const person = {
    name: "Shivani",

    greet() {
        console.log(this.name);
    }
};

person.greet();
```

Here:

```js
this === person
```

because:

```js
person.greet()
```

is a method call.

---

# 9. Nested Objects

```js
const company = {
    name: "ABC",

    employee: {
        name: "Shivani",

        greet() {
            console.log(this.name);
        }
    }
};

company.employee.greet();
```

What is `this`?

Look at the immediate object before the function:

```text
company.employee.greet()
                ↑
```

Therefore:

```js
this === company.employee
```

Output:

```text
Shivani
```

NOT:

```text
ABC
```

---

# 10. Arrow Functions

Arrow functions use this syntax:

```js
const greet = () => {
    console.log("Hello");
};
```

Arrow functions behave differently from regular functions.

The most important rule:

> **Arrow functions do NOT have their own ****`this`****.**

Instead:

> **They inherit ****`this`**** from their surrounding lexical scope.**

This is called:

## Lexical `this`

---

# 11. What Does "Lexical" Mean?

Lexical basically means:

> Look at where the function was created.

An arrow function says:

> "I don't create my own `this`. I'll use the `this` from my surrounding environment."

Think of it like a child inheriting something from a parent.

```text
Parent function
      │
      │ this
      ↓
Arrow function
      │
      │ inherits
      ↓
same this
```

---

# 12. Regular vs Arrow Function

## Regular function

```js
const person = {
    name: "Shivani",

    greet: function() {
        console.log(this.name);
    }
};

person.greet();
```

Here:

```text
this → person
```

because the regular function is called as:

```js
person.greet()
```

---

## Arrow function

```js
const person = {
    name: "Shivani",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();
```

Here the arrow function does NOT get:

```text
this → person
```

The arrow function does not care who called it.

It gets `this` from its surrounding lexical scope.

---

# 13. Critical Difference

Remember:

```text
REGULAR FUNCTION

"Who called me?"
        ↓
 determines this
```

Whereas:

```text
ARROW FUNCTION

"I don't have my own this."
        ↓
"I'll inherit it from outside."
```

---

# 14. Arrow Functions Inside Regular Functions

This is one of the most useful patterns.

```js
const person = {
    name: "Shivani",

    greet() {

        const arrow = () => {
            console.log(this.name);
        };

        arrow();
    }
};

person.greet();
```

Step 1:

```js
person.greet();
```

`greet()` is a regular function.

Therefore:

```text
this = person
```

Step 2:

```js
const arrow = () => {}
```

The arrow function doesn't create its own `this`.

It inherits:

```text
greet's this
```

which is:

```text
person
```

Therefore:

```js
this.name
```

is:

```text
Shivani
```

---

# 15. Arrow Functions and Callbacks

This is one of the biggest real-world uses of arrow functions.

Example:

```js
const person = {
    name: "Shivani",

    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

person.greet();
```

Execution:

```text
person.greet()
      ↓
greet's this = person
      ↓
arrow callback
      ↓
arrow has no own this
      ↓
inherits greet's this
      ↓
this = person
      ↓
this.name
      ↓
Shivani
```

This is why arrow functions are commonly used in:

* callbacks
* promises
* timers
* HTTP callbacks
* RxJS subscriptions
* event callbacks
* array methods

---

# 16. Regular Callback vs Arrow Callback

## Regular callback

```js
const person = {
    name: "Shivani",

    greet() {
        setTimeout(function() {
            console.log(this.name);
        }, 1000);
    }
};
```

The callback is a new regular function.

It does not automatically inherit the `this` from `greet()`.

---

## Arrow callback

```js
const person = {
    name: "Shivani",

    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
```

The arrow function inherits `this` from `greet()`.

Therefore it can access:

```js
this.name
```

---

# 17. Why Arrow Functions Are Useful

Before arrow functions, developers sometimes used:

```js
const self = this;
```

Example:

```js
function Person() {

    this.name = "Shivani";

    const self = this;

    setTimeout(function() {
        console.log(self.name);
    }, 1000);
}
```

Modern JavaScript can often use:

```js
function Person() {

    this.name = "Shivani";

    setTimeout(() => {
        console.log(this.name);
    }, 1000);
}
```

The arrow function automatically inherits the surrounding `this`.

---

# 18. `call()`

`call()` lets you explicitly specify what `this` should be for a regular function.

```js
function greet() {
    console.log(this.name);
}

const person = {
    name: "Shivani"
};

greet.call(person);
```

Output:

```text
Shivani
```

Think:

```text
greet.call(person)
        ↓
"Run greet with this = person"
```

---

# 19. `call()` with Arguments

```js
function introduce(age, city) {
    console.log(this.name);
    console.log(age);
    console.log(city);
}

const person = {
    name: "Shivani"
};

introduce.call(person, 32, "Pune");
```

Syntax:

```js
function.call(thisValue, arg1, arg2, ...)
```

---

# 20. `apply()`

`apply()` is almost the same as `call()`.

The difference is how arguments are passed.

### `call()`

Arguments are passed individually:

```js
introduce.call(person, 32, "Pune");
```

### `apply()`

Arguments are passed as an array:

```js
introduce.apply(person, [32, "Pune"]);
```

Remember:

```text
call  → individual arguments
apply → array of arguments
```

---

# 21. `bind()`

`bind()` creates a new function with a fixed `this`.

```js
function greet() {
    console.log(this.name);
}

const person = {
    name: "Shivani"
};

const boundGreet = greet.bind(person);

boundGreet();
```

Output:

```text
Shivani
```

Think of `bind()` as:

> "Create a new function that remembers this object."

---

# 22. `call()` vs `apply()` vs `bind()`

| Method    | Executes immediately? | How arguments are passed? |
| --------- | --------------------- | ------------------------- |
| `call()`  | Yes                   | Individually              |
| `apply()` | Yes                   | Array                     |
| `bind()`  | No                    | Individually              |

Example:

```js
fn.call(obj, 1, 2);
```

```js
fn.apply(obj, [1, 2]);
```

```js
const newFn = fn.bind(obj, 1, 2);

newFn();
```

---

# 23. Arrow Functions + `call/apply/bind`

This is a common interview question.

Arrow functions do not have their own `this`.

Therefore:

```js
call()
apply()
bind()
```

cannot change the arrow function's `this`.

Example:

```js
const greet = () => {
    console.log(this);
};

greet.call(person);
```

`call()` does NOT make:

```text
this = person
```

The arrow keeps its lexical `this`.

Same applies to:

```js
greet.apply(person);
```

and:

```js
greet.bind(person);
```

---

# 24. `this` in Classes

`this` is extremely important in JavaScript classes.

```js
class User {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

const user = new User("Shivani");

user.greet();
```

Output:

```text
Shivani
```

Here:

```js
this.name = name;
```

means:

> Store `name` on the current object instance.

After:

```js
const user = new User("Shivani");
```

we have:

```text
user
 └── name → "Shivani"
```

And when:

```js
user.greet();
```

runs:

```text
this → user
```

---

# 25. `this` in Angular

Understanding `this` is important for Angular because Angular components and services are classes.

Example:

```ts
export class UserComponent {

    name = "Shivani";
    loading = false;

    loadUsers() {
        this.loading = true;

        // API call...

        this.loading = false;
    }
}
```

Here:

```ts
this.name
this.loading
```

refer to properties belonging to the current component instance.

You'll commonly see:

```ts
this.users
this.form
this.router
this.userService
this.loading
this.error
this.selectedUser
```

Understanding `this` makes this code much easier to reason about.

---

# 26. `this` with RxJS / Angular

A common pattern:

```ts
this.userService.getUsers().subscribe(() => {
    this.loading = false;
});
```

The arrow function is useful because it preserves the surrounding `this`.

Conceptually:

```text
Component method
      ↓
this = component
      ↓
arrow callback
      ↓
inherits this
      ↓
this.loading
      ↓
component.loading
```

---

# 27. The `this` Decision Tree

When you see `this`, follow this process.

## Step 1

Is the function an arrow function?

### YES

```text
Arrow function
     ↓
No own this
     ↓
Use surrounding lexical this
```

### NO

Continue.

---

## Step 2

Is it called as:

```js
obj.fn()
```

### YES

```text
this = obj
```

---

## Step 3

Is `call()` used?

```js
fn.call(obj)
```

### YES

```text
this = obj
```

---

## Step 4

Is `apply()` used?

```js
fn.apply(obj)
```

### YES

```text
this = obj
```

---

## Step 5

Is the function bound?

```js
const newFn = fn.bind(obj);
```

### YES

```text
newFn's this = obj
```

---

## Step 6

Is it called simply as:

```js
fn()
```

For a regular function in strict mode:

```text
this = undefined
```

---

# 28. Quick Reference

## Regular function

```js
function fn() {}
```

Has its own `this`.

`this` depends on how it is called.

---

## Arrow function

```js
const fn = () => {};
```

Does NOT have its own `this`.

It inherits `this` from the surrounding lexical scope.

---

## Method call

```js
obj.fn();
```

```text
this → obj
```

---

## `call`

```js
fn.call(obj);
```

```text
this → obj
```

Executes immediately.

---

## `apply`

```js
fn.apply(obj, [1, 2]);
```

```text
this → obj
```

Executes immediately.

Arguments are passed as an array.

---

## `bind`

```js
const newFn = fn.bind(obj);
```

Creates a new function with bound `this`.

Doesn't execute immediately.

---

# 29. Common Mistakes

## ❌ Mistake 1

"`this` always means the object."

Wrong.

For regular functions:

> `this` depends on the call.

---

## ❌ Mistake 2

"Arrow functions get `this` from the object calling them."

Wrong.

Arrow functions inherit `this` lexically.

---

## ❌ Mistake 3

"Arrow functions have their own `this`."

Wrong.

They don't.

---

## ❌ Mistake 4

"`bind()` immediately executes the function."

Wrong.

`bind()` returns a new function.

---

## ❌ Mistake 5

"`call()` and `apply()` are different in what `this` they set."

Usually no.

Both explicitly set `this`.

Their main difference is argument format.

```text
call  → arg1, arg2
apply → [arg1, arg2]
```

---

# 30. Interview Rules to Memorize

### Rule 1

> **Regular function → ****`this`**** is determined by how the function is called.**

### Rule 2

> **Arrow function → no own ****`this`****; inherits lexical ****`this`****.**

### Rule 3

```js
obj.fn()
```

usually means:

```text
this = obj
```

### Rule 4

```js
fn.call(obj)
```

means:

```text
this = obj
```

### Rule 5

```js
fn.apply(obj)
```

means:

```text
this = obj
```

### Rule 6

```js
fn.bind(obj)
```

creates a new function whose `this` is bound to `obj`.

### Rule 7

`call`, `apply`, and `bind` cannot change the `this` of an arrow function.

---

# 31. One-Screen Mental Model

```text
                    THIS
                      │
             Is it an arrow?
                /          \
              YES           NO
               │             │
               ↓             ↓
       Lexical this       How called?
                             │
                 ┌───────────┼────────────┐
                 ↓           ↓            ↓
              obj.fn()     call/apply    bind
                 ↓           ↓            ↓
              obj         given obj     bound obj
```

The most important sentence:

> **Regular functions get ****`this`**** from the call site. Arrow functions inherit ****`this`**** from their surrounding lexical scope.**

---

# 32. Real-World Importance

You will encounter `this` in:

* JavaScript objects
* JavaScript classes
* Angular components
* Angular services
* event handlers
* callbacks
* timers
* Promises
* RxJS
* HTTP calls
* array callbacks
* older JavaScript code
* reusable utility functions

You don't need to use `this` everywhere yourself.

You need to be able to **predict what ****`this`**** means when you encounter it.**

---

# 🧪 Practice Checklist

Before considering Day 6 complete, you should be able to explain:

* [ ] What is `this`?
* [ ] Why does `this` change?
* [ ] What is a method call?
* [ ] What happens in `obj.method()`?
* [ ] What happens when a method is detached?
* [ ] What is a regular function?
* [ ] What is an arrow function?
* [ ] Why don't arrow functions have their own `this`?
* [ ] What is lexical `this`?
* [ ] Why are arrow functions useful in callbacks?
* [ ] What does `call()` do?
* [ ] What does `apply()` do?
* [ ] What does `bind()` do?
* [ ] Difference between `call`, `apply`, and `bind`
* [ ] Why can't `call/apply/bind` change an arrow function's `this`?
* [ ] How is `this` used in JavaScript classes?
* [ ] Why is `this` important in Angular?

---

# 🎯 Final Mental Model

Don't memorize complicated definitions.

Remember this:

```text
REGULAR FUNCTION
       ↓
"Who called me?"
       ↓
That determines my `this`
```

```text
ARROW FUNCTION
       ↓
"I don't have my own `this`."
       ↓
"I'll use the surrounding `this`."
```

And:

```text
call  → execute now + choose this
apply → execute now + choose this + array arguments
bind  → create new function + remember this
```

That is the foundation of JavaScript `this`.
