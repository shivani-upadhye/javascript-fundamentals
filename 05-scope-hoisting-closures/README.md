# JavaScript Closures 

Closures are one of the most important concepts in JavaScript.

They are heavily used in:

* Callbacks
* Higher-order functions
* Event handlers
* `setTimeout`
* Private state
* Factory functions
* Function factories
* Memoization
* Currying
* JavaScript modules
* Angular services and callbacks
* RxJS
* Asynchronous programming

The goal of this chapter is to understand closures **conceptually**, not just memorize the definition.

---

# 1. What is a Closure?

A closure is created when a function **remembers and retains access to variables from its surrounding lexical scope**, even after the outer function has finished executing.

Lexical scope is JavaScript's rule that variable accessibility is determined by where functions and blocks are written in the source code. A function can access variables from its surrounding lexical scopes, regardless of where that function is eventually called.

Example:

```js
function outer() {
    let name = "Shivani";

    function inner() {
        console.log(name);
    }

    return inner;
}

const greet = outer();

greet();
```

Output:

```text
Shivani
```

At first this looks surprising.

`outer()` has already finished executing.

So why can `inner()` still access `name`?

Because `inner()` forms a **closure** over its surrounding lexical environment.

---

# 2. The Mental Model

Think of a closure as:

```text
Function
   +
Access to its surrounding lexical environment
   =
Closure
```

Or simply:

> A function remembers the variables it was created around.

Important:

The function does **not necessarily copy the value**.

It retains access to the variable/environment.

---

# 3. Basic Closure Example

```js
function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const fn = outer();

fn();
```

Output:

```text
Hello
```

### What happens?

Step 1:

```js
outer();
```

creates:

```text
message → "Hello"
inner → function
```

Step 2:

`outer()` returns `inner`.

```js
const fn = outer();
```

Now:

```text
fn → inner function
```

Step 3:

Even though `outer()` has finished, `fn` still has access to:

```text
message
```

because `inner` closed over it.

---

# 4. Lexical Scope and Closures

Closures are directly connected to **lexical scope**.

Consider:

```js
let globalValue = "global";

function outer() {
    let outerValue = "outer";

    function inner() {
        let innerValue = "inner";

        console.log(innerValue);
        console.log(outerValue);
        console.log(globalValue);
    }

    inner();
}

outer();
```

The scope chain is:

```text
inner scope
     ↓
outer scope
     ↓
global scope
```

When JavaScript looks for a variable, it searches:

```text
Current scope
     ↓
Parent scope
     ↓
Parent's parent
     ↓
Global scope
```

This is the **scope chain**.

Closures allow a function to retain access to this surrounding lexical environment.

---

# 5. Closure Does NOT Depend on Where the Function Is Called

This is an important interview concept.

Consider:

```js
let name = "Global";

function outer() {
    let name = "Outer";

    return function inner() {
        console.log(name);
    };
}

const fn = outer();

function another() {
    let name = "Another";
    fn();
}

another();
```

Output:

```text
Outer
```

Why?

Because `inner()` was created inside `outer()`.

Its lexical environment is determined by **where the function was created**, not where it is called.

Therefore:

```text
inner
 ↓
outer
 ↓
global
```

Not:

```text
inner
 ↓
another
```

### ⭐ Interview Rule

> JavaScript uses lexical scope, so a closure remembers the environment where the function was created, not where it is called.

---

# 6. Closure with Parameters

Closures can also remember function parameters.

```js
function greet(name) {
    return function () {
        console.log(`Hello ${name}`);
    };
}

const greetShivani = greet("Shivani");

greetShivani();
```

Output:

```text
Hello Shivani
```

The returned function closes over:

```text
name → "Shivani"
```

---

# 7. Closures Can Preserve State

This is where closures become extremely useful.

```js
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

Output:

```text
1
2
3
```

Why doesn't `count` reset to `0`?

Because the returned function retains access to the same `count` variable.

The mental model:

```text
createCounter()
      ↓
count = 0
      ↓
returned function
      ↓
closure over count
      ↓
counter()
      ↓
count = 1
      ↓
counter()
      ↓
count = 2
      ↓
counter()
      ↓
count = 3
```

---

# 8. Closure Stores Access to a Variable, Not Just a Value

This distinction is extremely important.

Consider:

```js
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}
```

The closure does not simply remember:

```text
count = 0
```

as a frozen snapshot.

It retains access to the variable.

Therefore:

```js
count++;
```

changes the same variable.

So successive calls see the updated value.

---

# 9. Multiple Closures Create Independent State

Consider:

```js
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();
```

These are **two separate closures**.

Therefore:

```js
console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1

console.log(counter1()); // 3
console.log(counter2()); // 2
```

Output:

```text
1
2
1
3
2
```

Mental model:

```text
counter1
   ↓
Closure A
count = 0


counter2
   ↓
Closure B
count = 0
```

They do not share the same `count`.

---

# 10. Closures for Private Variables

One of the most important real-world uses of closures is creating **private state**.

Example:

```js
function createBankAccount() {
    let balance = 1000;

    function deposit(amount) {
        balance += amount;
    }

    function withdraw(amount) {
        balance -= amount;
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit,
        withdraw,
        getBalance
    };
}
```

Usage:

```js
const account = createBankAccount();

account.deposit(500);

console.log(account.getBalance());
```

Output:

```text
1500
```

But:

```js
console.log(account.balance);
```

Output:

```text
undefined
```

Why?

Because `balance` is not directly exposed.

Only the returned functions have access to it.

---

# 11. Closure as Data Privacy

This pattern gives us:

```text
Private data
     ↓
Closure
     ↓
Public methods
```

Example:

```text
balance
   ↓
private

deposit()
withdraw()
getBalance()
   ↓
public
```

This is similar to encapsulation.

---

# 12. Closure with Objects

Closures are frequently used with objects.

```js
function createUser(name) {
    let loginCount = 0;

    return {
        getName() {
            return name;
        },

        login() {
            loginCount++;
        },

        getLoginCount() {
            return loginCount;
        }
    };
}
```

Usage:

```js
const user = createUser("Shivani");

user.login();
user.login();

console.log(user.getName());
console.log(user.getLoginCount());
```

Output:

```text
Shivani
2
```

`name` and `loginCount` remain private.

---

# 13. Closure with Arrays

Closures can preserve mutable arrays as well.

```js
function createShoppingList() {
    let items = [];

    function add(item) {
        items.push(item);
    }

    function remove(item) {
        const index = items.indexOf(item);

        if (index !== -1) {
            items.splice(index, 1);
        }
    }

    function getItems() {
        return items;
    }

    return {
        add,
        remove,
        getItems
    };
}
```

Usage:

```js
const list = createShoppingList();

list.add("Milk");
list.add("Rice");

console.log(list.getItems());
```

The closure retains access to `items`.

---

# 14. Higher-Order Functions and Closures

Closures and higher-order functions are related but they are **not the same thing**.

### Higher-Order Function

A function that:

* takes another function as an argument
* OR returns another function

Example:

```js
function createMultiplier(multiplier) {
    return function (number) {
        return multiplier * number;
    };
}
```

`createMultiplier` is a higher-order function because it returns a function.

The returned function is also a closure because it remembers:

```text
multiplier
```

---

# 15. Function Factory

Closures are commonly used to create specialized functions.

```js
function createMultiplier(multiplier) {
    return function (number) {
        return multiplier * number;
    };
}

const multiplyBy2 = createMultiplier(2);
const multiplyBy5 = createMultiplier(5);

console.log(multiplyBy2(10)); // 20
console.log(multiplyBy5(10)); // 50
```

Mental model:

```text
createMultiplier(2)
       ↓
closure remembers multiplier = 2
       ↓
multiplyBy2()


createMultiplier(5)
       ↓
closure remembers multiplier = 5
       ↓
multiplyBy5()
```

---

# 16. Important Closure Bug

Be careful when modifying a closed-over variable.

Incorrect:

```js
function createMultiplier(multiplier) {
    return function (number) {
        return multiplier *= number;
    };
}
```

This changes `multiplier`.

Example:

```js
const multiplyBy5 = createMultiplier(5);

console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5(4));  // 200 ❌
```

Why?

First call:

```text
multiplier = 5

5 * 10 = 50
```

But `*=` changes it:

```text
multiplier = 50
```

Second call:

```text
50 * 4 = 200
```

Correct:

```js
function createMultiplier(multiplier) {
    return function (number) {
        return multiplier * number;
    };
}
```

Now:

```text
multiplier remains 5
```

and:

```text
multiplyBy5(10) → 50
multiplyBy5(4)  → 20
```

---

# 17. Closure + setTimeout

Closures become particularly important with asynchronous code.

Example:

```js
function greetLater(name) {
    setTimeout(function () {
        console.log(name);
    }, 1000);
}

greetLater("Shivani");
```

Even though `greetLater()` finishes before the timeout callback executes, the callback still has access to:

```text
name
```

because the callback forms a closure over `name`.

---

# 18. The Famous var + Closure Interview Question

Consider:

```js
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

Output:

```text
4
4
4
```

Why?

The loop executes immediately.

```text
i = 1 → schedule callback
i = 2 → schedule callback
i = 3 → schedule callback
i = 4 → loop ends
```

The callbacks execute later.

Because `var` does not create a new block-scoped binding for each iteration, all callbacks close over the **same `i` variable**.

When the callbacks execute:

```text
i = 4
```

Therefore:

```text
4
4
4
```

### ⭐ Critical clarification

The callback does NOT increment `i`.

The loop increments `i`.

The callback only reads `i` later.

---

# 19. Why let Gives 1 2 3

Now:

```js
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

Output:

```text
1
2
3
```

In a `for` loop, `let` creates a separate binding for each iteration.

Conceptually:

```text
Iteration 1
i = 1 → callback closes over this i

Iteration 2
i = 2 → callback closes over this i

Iteration 3
i = 3 → callback closes over this i
```

So each callback sees its own `i`.

---

# 20. Closure + Loop

Another common example:

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

Output:

```text
3
3
3
```

With `let`:

```js
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

Output:

```text
0
1
2
```

This is a classic JavaScript interview question.

---

# 21. Closure + Event Handlers

Closures are frequently used in event handling.

Example:

```js
function setupButton(buttonName) {
    let clicks = 0;

    return function handleClick() {
        clicks++;

        console.log(
            `${buttonName} clicked ${clicks} times`
        );
    };
}
```

Now:

```js
const button = setupButton("Submit");

button();
button();
button();
```

Output:

```text
Submit clicked 1 times
Submit clicked 2 times
Submit clicked 3 times
```

The handler remembers:

```text
buttonName
clicks
```

through closure.

---

# 22. Closure + Memoization

Closures can store previously calculated results.

Example:

```js
function createMemoizedFunction() {
    const cache = {};

    return function (number) {
        if (cache[number]) {
            return cache[number];
        }

        const result = number * number;

        cache[number] = result;

        return result;
    };
}
```

Usage:

```js
const square = createMemoizedFunction();

console.log(square(5));
console.log(square(5));
```

The closure preserves:

```text
cache
```

between calls.

---

# 23. Closure + Currying

Closures are fundamental to currying.

Example:

```js
function add(a) {
    return function (b) {
        return a + b;
    };
}
```

Usage:

```js
const add10 = add(10);

console.log(add10(5)); // 15
console.log(add10(20)); // 30
```

The inner function closes over:

```text
a = 10
```

---

# 24. Closure + Module Pattern

Before ES modules became standard, closures were commonly used to create private module-like state.

```js
const counterModule = (function () {
    let count = 0;

    return {
        increment() {
            count++;
        },

        getCount() {
            return count;
        }
    };
})();
```

Usage:

```js
counterModule.increment();
counterModule.increment();

console.log(counterModule.getCount());
```

Output:

```text
2
```

But:

```js
counterModule.count
```

is:

```text
undefined
```

because `count` is private.

---

# 25. Do Closures Cause Memory Problems?

A closure keeps its referenced lexical environment alive as long as the closure itself is reachable.

Example:

```js
function createLargeData() {
    const data = new Array(1000000).fill("data");

    return function () {
        console.log(data.length);
    };
}

const fn = createLargeData();
```

As long as `fn` is reachable, the data needed by that closure may remain reachable too.

This is why closures can contribute to memory leaks when unnecessarily retained.

### Common situations

* Long-lived event listeners
* Timers
* Subscriptions
* Global references
* Large cached objects

In Angular/RxJS applications, cleanup of subscriptions and event listeners is especially important.

---

# 26. Closures and Garbage Collection

JavaScript uses garbage collection.

If an object or lexical environment is no longer reachable, it can eventually be garbage collected.

Example:

```js
function createCounter() {
    let count = 0;

    return function () {
        count++;
    };
}

let counter = createCounter();

counter = null;
```

Once the closure is no longer reachable and nothing else references its environment, that environment can become eligible for garbage collection.

---

# 27. Closure vs Scope

These are related but different.

### Scope

Scope answers:

> Where can I access this variable?

Example:

```js
function test() {
    let x = 10;

    console.log(x);
}
```

`x` exists inside the function scope.

### Closure

Closure answers:

> How can a function continue accessing variables from an outer lexical scope after that outer function has finished?

Example:

```js
function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}
```

---

# 28. Closure vs Higher-Order Function

### Higher-Order Function

Describes what a function **does**.

```js
function createGreeting() {
    return function () {
        console.log("Hello");
    };
}
```

`createGreeting` is a HOF because it returns a function.

### Closure

Describes the relationship between the returned function and its surrounding environment.

```js
function createGreeting(name) {
    return function () {
        console.log(name);
    };
}
```

The returned function forms a closure over `name`.

### ⭐ Remember

```text
HOF → function behavior

Closure → function + retained lexical environment
```

A HOF can create a closure, but not every HOF example necessarily demonstrates an interesting closure.

---

# 29. Closure vs Object

Objects can also store state.

```js
const counter = {
    count: 0,

    increment() {
        this.count++;
    }
};
```

The state is directly accessible:

```js
counter.count;
```

With closure:

```js
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        getCount() {
            return count;
        }
    };
}
```

Now:

```js
counter.count
```

does not exist.

The state is private.

---

# 30. Common Closure Mistakes

## Mistake 1: Thinking closure stores a snapshot

Incorrect:

> "Closure stores the value when the function was created."

Better:

> "Closure retains access to the lexical environment and its variables."

---

## Mistake 2: Thinking outer function must remain executing

Incorrect:

> "The outer function is still running."

No.

The outer function can finish.

The returned function can still access its variables because of the closure.

---

## Mistake 3: Confusing closure with scope

Scope determines accessibility.

Closure is the retained relationship between a function and its surrounding lexical environment.

---

## Mistake 4: Saying var causes 4 4 4 because the callback increments i

Incorrect.

The loop increments `i`.

The callback reads `i` later.

---

## Mistake 5: Assuming every function is automatically an interesting closure

A function technically has access to its lexical environment, but interview questions usually use "closure" to highlight a function retaining access to an outer environment after that outer execution has completed.

---

# 31. Closure Debugging Checklist

When you see a closure problem, ask:

### Step 1

Where was the function created?

```text
Which lexical scope surrounds it?
```

### Step 2

Which outer variables does it use?

```text
name?
count?
i?
cache?
```

### Step 3

Are those variables shared or separate?

```text
One closure?
Multiple closures?
```

### Step 4

Does something execute later?

```text
setTimeout?
event handler?
Promise?
subscription?
```

### Step 5

Has the variable changed before the callback executes?

This is especially important with loops.

---

# 32. Interview Mental Model

Whenever you see:

```js
function outer() {
    let x = ...;

    return function inner() {
        ...
    };
}
```

Immediately think:

```text
inner
 ↓
closes over
 ↓
x
```

Whenever you see:

```js
setTimeout(() => {
    console.log(x);
}, 1000);
```

ask:

```text
What is x when the callback actually runs?
```

Whenever you see:

```js
for (var i = ...)
```

with callbacks, immediately investigate:

```text
Are all callbacks sharing the same i?
```

---

# 33. Interview Questions

## Beginner

### Q1. What is a closure?

**Answer:**

A closure is a function together with access to variables from its surrounding lexical environment, allowing the function to access those variables even after the outer function has finished executing.

---

### Q2. Why does a closure work after the outer function finishes?

**Answer:**

Because the inner function retains access to the lexical environment containing the variables it references. As long as the closure is reachable, the required environment remains accessible.

---

### Q3. What is lexical scope?

**Answer:**

Lexical scope means variable accessibility is determined by where code is written, not where a function is called.

---

### Q4. Can closures access parameters?

Yes.

```js
function greet(name) {
    return function () {
        console.log(name);
    };
}
```

The returned function closes over `name`.

---

# 34. Intermediate Interview Questions

### Q5. How are closures used to create private variables?

Example:

```js
function createAccount() {
    let balance = 1000;

    return {
        getBalance() {
            return balance;
        }
    };
}
```

`balance` cannot be accessed directly from outside.

Only the returned functions can access it.

---

### Q6. What is the difference between a closure and a higher-order function?

A higher-order function takes a function as an argument or returns a function.

A closure is a function that retains access to its surrounding lexical environment.

---

### Q7. Why does this output `4 4 4`?

```js
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

Because all callbacks close over the same `var` binding. The loop finishes before the callbacks execute, so `i` is 4 when they run.

---

### Q8. Why does `let` produce `1 2 3`?

Because `let` creates a separate binding for each iteration of the `for` loop, allowing each callback to close over that iteration's value.

---

# 35. Advanced Interview Questions

### Q9. Does a closure capture a value or a variable?

It retains access to the lexical environment and its variables, rather than simply storing an immutable snapshot of each value.

---

### Q10. Can multiple closures share the same variable?

Yes.

Example:

```js
function createFunctions() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        getCount() {
            return count;
        }
    };
}
```

Both methods close over the same `count`.

---

### Q11. Can two closures have independent state?

Yes.

```js
const counter1 = createCounter();
const counter2 = createCounter();
```

Each invocation creates a separate lexical environment.

---

### Q12. Can closures cause memory leaks?

They can contribute to memory retention if long-lived closures unnecessarily keep large objects or environments reachable.

Common examples include:

* Event listeners
* Timers
* Subscriptions
* Caches
* Global references

---

### Q13. Where are closures used in real applications?

Common examples:

* Event handlers
* Callbacks
* Timers
* Factory functions
* Private state
* Memoization
* Currying
* Modules
* Promises
* RxJS
* Angular services and callbacks

---

# 36. Interview Coding Challenge

Predict the output:

```js
function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const a = outer();
const b = outer();

a();
a();
b();
a();
b();
```

Expected output:

```text
1
2
1
3
2
```

Reason:

```text
a → closure A → count

b → closure B → count
```

Each invocation of `outer()` creates a separate environment.

---

# 37. Interview Coding Challenge — Closure + Loop

Predict the output:

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

Answer:

```text
3
3
3
```

Why?

```text
One shared i
      ↓
loop finishes
      ↓
i = 3
      ↓
callbacks execute
      ↓
3 3 3
```

---

# 38. Same Problem Using let

```js
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
```

Output:

```text
0
1
2
```

Because each iteration has its own binding.

---

# 39. Closure Cheat Sheet

| Concept        | Key Point                               |
| -------------- | --------------------------------------- |
| Closure        | Function + retained lexical environment |
| Lexical scope  | Determined by where code is written     |
| Scope chain    | Current → outer → global                |
| Outer function | Can finish executing                    |
| Closure        | Can continue accessing outer variables  |
| State          | Can persist between calls               |
| Private data   | Can be implemented with closures        |
| HOF            | Takes/returns functions                 |
| `var` loop     | Shared binding                          |
| `let` loop     | Per-iteration binding                   |
| Memoization    | Closure can retain cache                |
| Currying       | Closure retains earlier arguments       |
| Memory         | Long-lived closures can retain data     |

---

# 40. The One Definition You Should Remember

If an interviewer asks:

> "What is a closure?"

Give this answer:

> **"A closure is a function that retains access to variables from its surrounding lexical environment, even after the outer function has finished executing."**

Then demonstrate it:

```js
function outer() {
    let message = "Hello";

    return function inner() {
        console.log(message);
    };
}

const fn = outer();

fn(); // Hello
```

And explain:

> "`inner` forms a closure over `message`, so it can still access `message` after `outer()` has finished."

---

# 41. Senior-Level Mental Model

Don't memorize:

```text
Closure = function inside function
```

That's incomplete.

Instead remember:

```text
Where was the function created?
          ↓
What lexical environment surrounds it?
          ↓
Which variables does it reference?
          ↓
Does the function escape that scope?
          ↓
If yes → it can retain access through closure
```

The most important idea is:

> **Closures are about retained access to lexical state.**

Once you understand this, many JavaScript concepts become easier:

```text
Closures
   ↓
Callbacks
   ↓
Async JavaScript
   ↓
Promises
   ↓
Event handling
   ↓
RxJS
   ↓
Angular
```

---

# 42. Final Closure Checklist

Before considering closures mastered, you should be able to explain and code:

* [x] What a closure is
* [x] Lexical scope
* [x] Scope chain
* [x] Why outer variables remain accessible
* [x] Closure with parameters
* [x] Closure with mutable state
* [x] Multiple independent closures
* [x] Private variables
* [x] Closures with objects
* [x] Closures with arrays
* [x] Higher-order functions vs closures
* [x] Function factories
* [x] Closures with `setTimeout`
* [x] `var` + loop closure problem
* [x] `let` + loop closure solution
* [x] Closure + memoization
* [x] Closure + currying
* [x] Module pattern
* [x] Closure and garbage collection
* [x] Potential memory retention
* [x] Predicting closure interview outputs
* [x] Explaining closures without memorized definitions

---

# 43. Core Takeaway

The simplest mental model:

```text
Function created
       ↓
It sees its lexical surroundings
       ↓
Function escapes that scope
       ↓
Closure retains access
       ↓
Outer function may finish
       ↓
Closure can still use those variables
```

### ⭐ Final rule

> **A closure is not just a function inside another function. It is a function that retains access to its surrounding lexical environment.**
