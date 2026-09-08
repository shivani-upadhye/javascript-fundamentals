# 📘 Day 4 — JavaScript Functions

Functions are one of the most important building blocks of JavaScript. They allow us to define reusable behavior, accept inputs, return values, and pass behavior around as values.

---

# 1. What is a Function?

A function is a reusable piece of code that performs a particular task when it is called.

```js
function greet() {
    console.log("Hello");
}

greet();
```

Output:

```text
Hello
```

### Important

Defining a function does **not** execute it.

```js
function greet() {
    console.log("Hello");
}
```

The function executes only when we call it:

```js
greet();
```

### Mental Model

```text
Define function
      ↓
Store instructions
      ↓
Call function
      ↓
Execute instructions
```

---

# 2. Function Parameters and Arguments

Parameters are placeholders defined by the function.

Arguments are the actual values passed when calling the function.

```js
function greet(name) {
    console.log("Hello " + name);
}

greet("Richa");
```

Here:

```text
name   → parameter
"Richa" → argument
```

### Multiple Parameters

```js
function add(a, b) {
    return a + b;
}

add(10, 20);
```

```text
a → 10
b → 20
```

### Rule

> Parameter = placeholder
> Argument = actual value

---

# 3. Return Values

The `return` statement sends a value back to the code that called the function.

```js
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

### Mental Model

```text
add(10, 20)
      ↓
    10 + 20
      ↓
      30
      ↓
 return 30
      ↓
result = 30
```

---

# 4. `return` vs `console.log()`

These are different.

### `console.log()`

Displays a value.

```js
function add(a, b) {
    console.log(a + b);
}
```

### `return`

Gives a value back to the caller.

```js
function add(a, b) {
    return a + b;
}
```

For example:

```js
function add(a, b) {
    console.log(a + b);
}

const result = add(10, 20);

console.log(result);
```

Output:

```text
30
undefined
```

The function printed `30`, but didn't return anything.

---

# 5. What Happens When Nothing Is Returned?

If a function doesn't explicitly return a value, it returns `undefined`.

```js
function greet() {
    console.log("Hello");
}

const result = greet();

console.log(result);
```

Output:

```text
Hello
undefined
```

### Mental Model

```text
Function executes
      ↓
No return statement
      ↓
undefined
```

---

# 6. `return` Immediately Exits the Function

```js
function test() {
    return 10;

    console.log("Hello");
}
```

`"Hello"` will never be printed.

Once JavaScript reaches:

```js
return 10;
```

the function immediately exits.

---

# 7. Function Declaration

A function declaration uses the `function` keyword and usually has a name.

```js
function add(a, b) {
    return a + b;
}
```

You can call it:

```js
add(10, 20);
```

---

# 8. Function Expression

A function expression creates a function and assigns it to a variable.

```js
const add = function(a, b) {
    return a + b;
};
```

The function can then be called using the variable:

```js
add(10, 20);
```

### Key idea

Functions are values in JavaScript.

Just as:

```js
const age = 32;
```

stores a number, this:

```js
const add = function(a, b) {
    return a + b;
};
```

stores a function value.

---

# 9. Arrow Functions

Arrow functions provide shorter syntax for functions.

### Regular Function

```js
const add = function(a, b) {
    return a + b;
};
```

### Arrow Function

```js
const add = (a, b) => {
    return a + b;
};
```

### Shortest Version

```js
const add = (a, b) => a + b;
```

---

# 10. Implicit Return

When an arrow function has an expression without `{}`, that expression is automatically returned.

```js
const square = x => x * x;
```

This is equivalent to:

```js
const square = x => {
    return x * x;
};
```

### Important Rule

With:

```js
x => x * x
```

the return is implicit.

With:

```js
x => {
    return x * x;
}
```

the return is explicit.

But:

```js
x => {
    x * x;
}
```

returns `undefined`.

---

# 11. Missing Arguments

If an argument isn't provided, the corresponding parameter receives `undefined`.

```js
function add(a, b) {
    return a + b;
}

console.log(add(10));
```

Conceptually:

```text
a = 10
b = undefined
```

Therefore:

```js
10 + undefined
```

results in:

```text
NaN
```

---

# 12. Default Parameters

Default parameters provide a fallback value when the argument is `undefined`.

```js
function greet(name = "Guest") {
    return "Hello " + name;
}

console.log(greet());
```

Output:

```text
Hello Guest
```

If a value is provided:

```js
console.log(greet("Richa"));
```

Output:

```text
Hello Richa
```

### Important

Defaults are used when the argument is `undefined`.

```js
function test(value = 10) {
    return value;
}

test(undefined); // 10
test(null);      // null
test(0);         // 0
test(false);     // false
```

This is different from `||`, which treats many falsy values as fallback-triggering.

---

# 13. Rest Parameters

Rest parameters collect multiple remaining arguments into an array.

```js
function collect(...items) {
    return items;
}

console.log(collect("a", "b", "c"));
```

Output:

```js
["a", "b", "c"]
```

### With Regular Parameters

```js
function test(first, ...rest) {
    console.log(first);
    console.log(rest);
}

test(10, 20, 30, 40);
```

Output:

```text
10
[20, 30, 40]
```

Conceptually:

```text
first → 10

rest → [20, 30, 40]
```

### Important Rule

The rest parameter must always be the **last parameter**.

Valid:

```js
function test(a, b, ...rest) {}
```

Invalid:

```js
function test(...rest, a) {}
```

---

# 14. Functions Are First-Class Values

JavaScript treats functions as values.

A function can be:

### Stored in a variable

```js
const greet = function() {
    console.log("Hello");
};
```

### Passed as an argument

```js
execute(greet);
```

### Returned from another function

```js
function createGreeting() {
    return function() {
        console.log("Hello");
    };
}
```

This ability is the foundation for callbacks and higher-order functions.

---

# 15. Callback Functions

A **callback** is a function passed to another function so that the receiving function can execute it.

```js
function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);
```

Here:

```text
greet → callback
execute → Higher-Order Function
```

---

# 16. `callback` vs `callback()`

This is extremely important.

```js
execute(greet);
```

means:

> Pass the function itself.

Whereas:

```js
execute(greet());
```

means:

> Execute `greet()` first and pass its return value.

### Example

```js
function greet() {
    return "Hello";
}

function execute(callback) {
    return callback();
}

const result = execute(greet);

console.log(result);
```

Output:

```text
Hello
```

---

# 17. Anonymous Functions

An anonymous function is a function without its own name.

```js
const greet = function() {
    console.log("Hello");
};
```

The function itself has no name.

Anonymous functions are frequently used as callbacks:

```js
execute(function() {
    console.log("Hello");
});
```

Or with arrow functions:

```js
execute(() => {
    console.log("Hello");
});
```

### Important Distinction

**Anonymous** describes the function's naming.

**Callback** describes how the function is being used.

A function can therefore be:

```text
Named + Callback
Anonymous + Callback
```

---

# 18. Higher-Order Functions

A **Higher-Order Function (HOF)** is a function that:

* accepts another function as an argument, or
* returns another function.

---

## HOF Example — Accepting a Function

```js
function calculate(a, b, operation) {
    return operation(a, b);
}
```

Then:

```js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
```

Output:

```text
15
50
```

Here:

```text
calculate → Higher-Order Function
add       → Callback
multiply  → Callback
```

---

# 19. HOF That Returns a Function

A function can return another function.

```js
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);

console.log(double(5));
```

Output:

```text
10
```

Flow:

```text
createMultiplier(2)
        ↓
returns a function
        ↓
double
        ↓
double(5)
        ↓
5 × 2
        ↓
10
```

`createMultiplier()` is a Higher-Order Function because it returns a function.

---

# 20. HOF vs Callback

These are related but different concepts.

```js
function execute(callback) {
    callback();
}

execute(greet);
```

Here:

```text
greet    → Callback
execute  → Higher-Order Function
```

### Simple Mental Model

```text
Function being passed
        ↓
     CALLBACK

Function accepting or returning a function
        ↓
HIGHER-ORDER FUNCTION
```

---

# 21. Built-in Higher-Order Functions

JavaScript provides many built-in HOFs.

Important ones:

* `map()`
* `filter()`
* `reduce()`
* `forEach()`
* `find()`
* `some()`
* `every()`

---

## `map()`

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

Here:

```text
map()                  → HOF
number => number * 2   → Callback
```

---

## `filter()`

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[2, 4]
```

Here:

```text
filter()                     → HOF
number => number % 2 === 0   → Callback
```

---

## `reduce()`

```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
```

Output:

```text
10
```

Here:

```text
reduce()                    → HOF
(sum, number) => ...        → Callback
```

---

# 🧠 Day 4 Mental Model

```text
                    FUNCTIONS
                        │
                        ↓
              Functions are values
                        │
          ┌─────────────┼──────────────┐
          ↓             ↓              ↓
       Stored        Passed          Returned
          │             │              │
          │             ↓              │
          │         CALLBACK            │
          │                            │
          └──────────────┬─────────────┘
                         ↓
              HIGHER-ORDER FUNCTIONS
```

### The core definitions

**Function**

> Reusable behavior/instructions that can be executed when called.

**Callback**

> A function passed to another function.

**Higher-Order Function**

> A function that accepts or returns another function.

---

# 🔑 Key Takeaways

1. Functions are reusable pieces of behavior.
2. Defining a function doesn't execute it.
3. Parameters are placeholders; arguments are actual values.
4. `return` gives a value back to the caller.
5. `console.log()` displays a value but doesn't return it.
6. A function without a return value returns `undefined`.
7. `return` immediately exits the function.
8. Functions can be stored in variables.
9. Function expressions assign functions to variables.
10. Arrow functions provide shorter syntax.
11. Arrow functions can have implicit returns.
12. Default parameters provide values when arguments are `undefined`.
13. Rest parameters collect remaining arguments into an array.
14. Functions can be passed as arguments.
15. A function passed to another function is called a callback.
16. Functions can return other functions.
17. A function that accepts or returns a function is a Higher-Order Function.
18. `map()`, `filter()`, and `reduce()` are common Higher-Order Functions.
19. `callback` refers to the function; `callback()` executes it.

---

# 💻 Practice Exercises

### Exercise 1 — Basic Function

Create a function `isEven()` that accepts a number and returns `true` if it is even and `false` otherwise.

---

### Exercise 2 — Default Parameter

Create:

```js
greet(name)
```

If no name is provided, return:

```text
Hello Guest
```

---

### Exercise 3 — Rest Parameter

Create a function that accepts any number of numbers and returns them as an array.

Example:

```js
collect(10, 20, 30, 40);
```

Expected:

```js
[10, 20, 30, 40]
```

---

### Exercise 4 — Callback

Create:

```js
execute(callback)
```

that executes the callback.

Expected:

```js
execute(() => {
    console.log("Hello");
});
```

---

### Exercise 5 — Higher-Order Function

Create:

```js
calculate(a, b, operation)
```

and allow it to perform addition, subtraction, or multiplication depending on the callback.

Example:

```js
calculate(10, 5, add);       // 15
calculate(10, 5, subtract);  // 5
calculate(10, 5, multiply);  // 50
```

---

### Exercise 6 — `map()`

Convert:

```js
[1, 2, 3, 4, 5]
```

into:

```js
[10, 20, 30, 40, 50]
```

using `map()`.

---

### Exercise 7 — `filter()`

From:

```js
[5, 12, 8, 20, 15]
```

return only numbers greater than `10`.

Expected:

```js
[12, 20, 15]
```

---

### Exercise 8 — `reduce()`

Calculate the total:

```js
[10, 20, 30, 40]
```

Expected:

```text
100
```

---

# 🎯 Interview Questions

1. What is a function?
2. What is the difference between a parameter and an argument?
3. What does `return` do?
4. What is the difference between `return` and `console.log()`?
5. What happens when a function doesn't explicitly return a value?
6. What happens after a `return` statement?
7. What is a function declaration?
8. What is a function expression?
9. What is an arrow function?
10. What is an implicit return?
11. What happens when an argument isn't provided?
12. What are default parameters?
13. When is a default parameter used?
14. What are rest parameters?
15. Where must the rest parameter appear?
16. What does it mean that functions are first-class values?
17. What is an anonymous function?
18. What is a callback?
19. Is a callback a special type of function?
20. What is the difference between `callback` and `callback()`?
21. What is a Higher-Order Function?
22. What is the difference between a callback and a HOF?
23. Can a function return another function?
24. Can a function be passed as an argument?
25. Why are `map()`, `filter()`, and `reduce()` considered HOFs?

---

# ⭐ Interview Concepts to Master

You should be able to explain these without memorizing:

```js
execute(greet);
```

vs.

```js
execute(greet());
```

and:

```js
const add = (a, b) => a + b;
```

vs.

```js
const add = (a, b) => {
    return a + b;
};
```

and:

```js
function execute(callback) {
    callback();
}
```

vs.

```js
function createFunction() {
    return function() {};
}
```

If you can mentally trace these examples, you have a strong foundation for the next JavaScript concepts.

---

# 📌 Final Summary

The most important idea from Day 4 is:

> **Functions are first-class values in JavaScript.**

Because functions are values, they can be:

```text
stored in variables
        ↓
passed as arguments
        ↓
used as callbacks
        ↓
returned from functions
        ↓
used to create Higher-Order Functions
```

This foundation will be used heavily in:

* Array methods
* Asynchronous JavaScript
* Promises
* Event handling
* TypeScript
* Angular
* RxJS
* Functional programming
