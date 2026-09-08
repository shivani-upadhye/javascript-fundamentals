# Short-Circuiting in JavaScript

Short-circuiting is one of the most useful behaviors of JavaScript's logical operators.

The basic idea is:

> **JavaScript stops evaluating as soon as it already knows the final result.**

This happens with logical operators such as:

* `||` — OR
* `&&` — AND
* `??` — Nullish coalescing

---

## 1. `||` — OR Short-Circuiting

For OR (`||`), if the left side is **truthy**, JavaScript already knows the result will be truthy.

So it doesn't evaluate the right side.

```js
true || someFunction();
```

Since the left side is already `true`, JavaScript doesn't need to evaluate `someFunction()`.

### Mental model

```text
truthy || anything
       ↓
   stop here
```

Example:

```js
function greet() {
  console.log("Hello");
}

true || greet();
```

`greet()` is never called.

---

## 2. `&&` — AND Short-Circuiting

For AND (`&&`), if the left side is **falsy**, JavaScript already knows the entire expression will be falsy.

So it stops there.

```js
false && someFunction();
```

`someFunction()` is never executed.

### Mental model

```text
falsy && anything
       ↓
   stop here
```

Example:

```js
function greet() {
  console.log("Hello");
}

false && greet();
```

Nothing is printed because `greet()` is never called.

---

## 3. `||` Uses Truthy/Falsy

`||` doesn't specifically look for `null` or `undefined`.

It checks whether the left side is **truthy or falsy**.

For example:

```js
console.log(0 || 10);
console.log("" || "Hello");
console.log(false || true);
```

Output:

```text
10
Hello
true
```

Because:

```text
0      → falsy
""     → falsy
false  → falsy
```

So JavaScript evaluates the right side.

---

## 4. `??` — Nullish Coalescing

`??` is similar to `||`, but its rule is much narrower.

It only considers these two values as "missing":

```js
null
undefined
```

Example:

```js
console.log(null ?? 10);
// 10

console.log(undefined ?? 10);
// 10
```

But:

```js
console.log(0 ?? 10);
// 0

console.log("" ?? "Hello");
// ""

console.log(false ?? true);
// false
```

Why?

Because `0`, `""`, and `false` are **not nullish**.

---

## 5. `||` vs `??`

This distinction is important:

```js
0 || 10;
// 10

0 ?? 10;
// 0
```

With `||`:

```text
0 → falsy → use 10
```

With `??`:

```text
0 → not null/undefined → keep 0
```

### Mental model

Think of them as different questions:

**`||` asks:**

> "Is the left side falsy?"

**`??` asks:**

> "Is the left side null or undefined?"

---

## 6. Short-Circuiting Is About Evaluation

An important distinction:

Short-circuiting doesn't just affect the final value.

It determines **whether the right-hand side gets evaluated at all**.

Example:

```js
const user = null;

user && user.name;
```

Because `user` is `null` (falsy), JavaScript stops before trying to access:

```js
user.name
```

This is one reason logical operators have historically been useful for conditional execution.

---

## 7. Short-Circuiting With Function Calls

Consider:

```js
function logMessage() {
  console.log("Executed");
}

const isLoggedIn = true;

isLoggedIn && logMessage();
```

Because `isLoggedIn` is truthy:

```js
isLoggedIn && logMessage();
```

becomes effectively:

```text
true && logMessage()
       ↓
   execute this
```

So `"Executed"` is printed.

But:

```js
const isLoggedIn = false;

isLoggedIn && logMessage();
```

becomes:

```text
false && logMessage()
        ↓
     stop here
```

`logMessage()` is never called.

---

## 8. Important: `||` and `&&` Return Values

Logical operators don't necessarily return `true` or `false`.

They return one of the operands.

For example:

```js
const name = "" || "Guest";

console.log(name);
// Guest
```

And:

```js
const name = "Richa" || "Guest";

console.log(name);
// Richa
```

Similarly:

```js
const user = { name: "Richa" };

console.log(user && user.name);
// Richa
```

This is another important part of the mental model.

---

## 9. Common Real-World Use

### Default value with `||`

```js
const username = input || "Guest";
```

If `input` is falsy, `"Guest"` is used.

### Default value with `??`

```js
const count = input ?? 0;
```

If `input` is `null` or `undefined`, `0` is used.

This distinction matters when values like `0`, `false`, or `""` are valid values.

---

## 10. Key Takeaways

### `||`

```js
A || B
```

* Checks truthiness
* If `A` is truthy → returns `A`
* If `A` is falsy → evaluates and returns `B`
* Short-circuits when the left side is truthy

### `&&`

```js
A && B
```

* Checks truthiness
* If `A` is falsy → returns `A`
* If `A` is truthy → evaluates and returns `B`
* Short-circuits when the left side is falsy

### `??`

```js
A ?? B
```

* Checks for `null` or `undefined`
* If `A` is neither → returns `A`
* Otherwise → returns `B`

---

## Mental Model

Instead of memorizing outputs, remember:

```text
||  → "If the left side is good enough, stop."
&&  → "If the left side already fails, stop."
??  → "If the left side actually exists, keep it."
```

The key idea behind all of them:

> **JavaScript evaluates only as much of the expression as it needs to determine the result.**

---

## Practice

Try predicting the output before running these:

```js
console.log(10 || 20);

console.log(0 || 20);

console.log(10 && 20);

console.log(0 && 20);

console.log(null ?? 50);

console.log(0 ?? 50);

console.log(false || "Hello");

console.log(false ?? "Hello");
```

Then test your answers in JavaScript.

The goal isn't just to know what `||`, `&&`, and `??` return.

**Understand why JavaScript stops where it does.**
