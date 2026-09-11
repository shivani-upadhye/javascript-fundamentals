# Day 9 — JavaScript Arrays

## 📌 Overview

Arrays are one of the most commonly used data structures in JavaScript.

They allow us to store multiple values in an ordered collection and provide many built-in methods for:

* Adding and removing elements
* Searching
* Transforming data
* Filtering data
* Checking conditions
* Combining values
* Iterating over elements

Arrays are especially important for frontend development because Angular applications constantly work with collections of data such as users, products, API responses, lists, and table records.

---

# 1. Creating Arrays

```js
const fruits = ["apple", "banana", "mango"];

const numbers = [10, 20, 30];

const emptyArray = [];
```

Arrays can contain different types:

```js
const data = [
  "Shivani",
  32,
  true,
  null,
  { city: "Pune" }
];
```

In real applications, arrays usually contain consistent data structures:

```js
const users = [
  { name: "Shivani", age: 32 },
  { name: "Rahul", age: 32 }
];
```

---

# 2. Array Indexing

JavaScript arrays are **zero-indexed**.

```js
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango
```

```text
Index:   0         1         2
Value: apple     banana    mango
```

Accessing an index that doesn't exist returns:

```js
console.log(fruits[5]);
// undefined
```

---

# 3. Array Length

```js
const numbers = [10, 20, 30];

console.log(numbers.length);
// 3
```

`length` gives the number of elements.

The last index is:

```js
numbers.length - 1
```

Therefore:

```js
console.log(numbers[numbers.length - 1]);
// 30
```

Modern JavaScript also supports:

```js
console.log(numbers.at(-1));
// 30
```

---

# 4. Arrays Are Mutable

Arrays can be modified even when declared using `const`.

```js
const numbers = [10, 20, 30];

numbers[1] = 25;

console.log(numbers);
// [10, 25, 30]
```

But reassignment is not allowed:

```js
numbers = [1, 2, 3];
// Error
```

`const` prevents reassignment of the variable, not mutation of the array.

---

# 5. Adding Elements

## `push()`

Adds an element to the end.

```js
const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);
// [1, 2, 3, 4]
```

`push()` returns the new length.

---

## `unshift()`

Adds an element to the beginning.

```js
const numbers = [2, 3];

numbers.unshift(1);

console.log(numbers);
// [1, 2, 3]
```

---

# 6. Removing Elements

## `pop()`

Removes the last element.

```js
const numbers = [1, 2, 3];

const removed = numbers.pop();

console.log(removed);
// 3

console.log(numbers);
// [1, 2]
```

---

## `shift()`

Removes the first element.

```js
const numbers = [1, 2, 3];

const removed = numbers.shift();

console.log(removed);
// 1

console.log(numbers);
// [2, 3]
```

### Quick Memory Trick

```text
push()     → add to end
pop()      → remove from end

unshift()  → add to beginning
shift()    → remove from beginning
```

---

# 7. `splice()`

`splice()` can:

* Remove elements
* Add elements
* Replace elements

Syntax:

```js
array.splice(start, deleteCount, item1, item2, ...);
```

### Remove

```js
const numbers = [10, 20, 30, 40];

numbers.splice(1, 2);

console.log(numbers);
// [10, 40]
```

### Add

```js
const numbers = [10, 30];

numbers.splice(1, 0, 20);

console.log(numbers);
// [10, 20, 30]
```

### Replace

```js
const numbers = [10, 20, 30];

numbers.splice(1, 1, 25);

console.log(numbers);
// [10, 25, 30]
```

`splice()` **mutates the original array**.

---

# 8. `slice()`

`slice()` extracts a portion of an array and returns a **new array**.

Syntax:

```js
array.slice(start, end);
```

* `start` → included
* `end` → excluded
* `end` is optional

Example:

```js
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
// [20, 30, 40]
```

The original array remains unchanged:

```js
console.log(numbers);
// [10, 20, 30, 40, 50]
```

Useful examples:

```js
numbers.slice(2);
// [30, 40, 50]

numbers.slice(0, 3);
// [10, 20, 30]

numbers.slice(-2);
// [40, 50]

numbers.slice();
// Creates a shallow copy
```

### `slice()` vs `splice()`

| `slice()`                | `splice()`                        |
| ------------------------ | --------------------------------- |
| Does not mutate original | Mutates original                  |
| Extracts/copies elements | Adds/removes/replaces             |
| Returns a new array      | Returns removed elements          |
| `slice(start, end)`      | `splice(start, deleteCount, ...)` |

---

# 9. Searching Arrays

## `includes()`

Checks whether a value exists.

```js
const fruits = ["apple", "banana", "mango"];

fruits.includes("banana");
// true

fruits.includes("orange");
// false
```

Returns a boolean.

---

## `indexOf()`

Returns the index of the first matching value.

```js
const fruits = ["apple", "banana", "mango"];

fruits.indexOf("banana");
// 1
```

If not found:

```js
fruits.indexOf("orange");
// -1
```

---

# 10. Iterating Over Arrays

## `for`

```js
const numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

---

## `for...of`

Used when you need the values.

```js
for (const number of numbers) {
  console.log(number);
}
```

### Remember

```text
for...of → values
```

---

# 11. `forEach()`

Executes a function for every element.

```js
const numbers = [10, 20, 30];

numbers.forEach(number => {
  console.log(number);
});
```

You can also access the index:

```js
numbers.forEach((number, index) => {
  console.log(index, number);
});
```

### Important

`forEach()` returns `undefined`.

```js
const result = numbers.forEach(num => num * 2);

console.log(result);
// undefined
```

Use `forEach()` when you want to **perform an action for each item**, not create a transformed array.

---

# 12. `map()`

`map()` transforms every element and returns a **new array**.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
// [2, 4, 6]
```

Original array:

```js
console.log(numbers);
// [1, 2, 3]
```

### Important Arrow Function Rule

This has an implicit return:

```js
numbers.map(num => num * 2);
```

This has an explicit return:

```js
numbers.map(num => {
  return num * 2;
});
```

But this returns `undefined` for every element:

```js
numbers.map(num => {
  num * 2;
});
```

Result:

```js
[undefined, undefined, undefined]
```

### Mental Model

```text
map() → Transform every element
```

---

# 13. `filter()`

`filter()` creates a new array containing elements that satisfy a condition.

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [2, 4]
```

### Mental Model

```text
filter() → Keep elements that pass a condition
```

---

# 14. `find()`

`find()` returns the **first element** that satisfies a condition.

```js
const numbers = [10, 20, 30, 40];

const result = numbers.find(num => num > 20);

console.log(result);
// 30
```

If nothing matches:

```js
const result = numbers.find(num => num > 100);

console.log(result);
// undefined
```

### `filter()` vs `find()`

```text
filter() → returns an array
find()   → returns one element
```

---

# 15. `some()`

Checks whether **at least one** element satisfies a condition.

```js
const numbers = [1, 3, 5, 8];

const result = numbers.some(num => num % 2 === 0);

console.log(result);
// true
```

### Mental Model

```text
some() → "Does at least one match?"
```

Returns:

```text
true / false
```

---

# 16. `every()`

Checks whether **all** elements satisfy a condition.

```js
const numbers = [2, 4, 6, 8];

const result = numbers.every(num => num % 2 === 0);

console.log(result);
// true
```

### Mental Model

```text
every() → "Do all elements match?"
```

Returns:

```text
true / false
```

---

# 17. `reduce()`

`reduce()` processes an array and produces **one final value**.

Example:

```js
const numbers = [10, 20, 30];

const total = numbers.reduce(
  (sum, num) => sum + num,
  0
);

console.log(total);
// 60
```

### Important Concepts

```text
sum → accumulator
num → current element
0   → initial value
```

Execution:

```text
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
```

### Using `reduce()` with objects

```js
const employees = [
  { name: "Shivani", salary: 50000 },
  { name: "Rahul", salary: 70000 },
  { name: "Amit", salary: 40000 }
];

const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);

console.log(totalSalary);
// 160000
```

### Mental Model

```text
reduce() → Combine array elements into one final result
```

The final result does not have to be a number. It can also be an object, array, string, etc.

---

# 18. `sort()`

By default, JavaScript sorts values as strings.

```js
const numbers = [10, 2, 30, 5];

numbers.sort();
```

Don't rely on this for numerical sorting.

### Ascending

```js
numbers.sort((a, b) => a - b);
```

Result:

```js
[2, 5, 10, 30]
```

### Descending

```js
numbers.sort((a, b) => b - a);
```

`sort()` **mutates the original array**.

---

# 19. `reverse()`

Reverses the array.

```js
const numbers = [1, 2, 3];

numbers.reverse();

console.log(numbers);
// [3, 2, 1]
```

`reverse()` mutates the original array.

---

# 20. Spread Operator with Arrays

Spread can be used to create a new array.

```js
const a = [1, 2, 3];

const b = [...a];

b.push(4);

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, 4]
```

### Important

```js
const b = a;
```

Both variables point to the **same array**.

```js
const b = [...a];
```

Creates a **new shallow copy**.

---

# 21. Combining Arrays

```js
const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second];

console.log(combined);
// [1, 2, 3, 4]
```

---

# 22. Array Destructuring

Array destructuring extracts values based on their **position**.

```js
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
// 10

console.log(b);
// 20

console.log(c);
// 30
```

Unlike object destructuring, array destructuring does not use property names.

---

# 23. Skipping Array Elements

```js
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
// 10

console.log(third);
// 30
```

---

# 24. Rest with Array Destructuring

```js
const numbers = [10, 20, 30, 40];

const [first, ...remaining] = numbers;

console.log(first);
// 10

console.log(remaining);
// [20, 30, 40]
```

`...remaining` collects the remaining elements into a new array.

---

# 25. Nested Arrays

Arrays can contain other arrays.

```js
const numbers = [
  [1, 2],
  [3, 4],
  [5, 6]
];
```

Accessing nested values:

```js
console.log(numbers[0]);
// [1, 2]

console.log(numbers[0][1]);
// 2
```

---

# 26. `flat()`

`flat()` creates a flattened array from nested arrays.

```js
const numbers = [1, [2, 3], [4, 5]];

console.log(numbers.flat());
// [1, 2, 3, 4, 5]
```

For deeper nesting:

```js
const numbers = [1, [2, [3, [4]]]];

numbers.flat(2);
// [1, 2, 3, [4]]
```

You can flatten all levels using:

```js
numbers.flat(Infinity);
```

---

# 27. Array Method Cheat Sheet

| Method       | Purpose               | Returns               | Mutates? |
| ------------ | --------------------- | --------------------- | -------- |
| `push()`     | Add at end            | New length            | ✅        |
| `pop()`      | Remove from end       | Removed element       | ✅        |
| `unshift()`  | Add at beginning      | New length            | ✅        |
| `shift()`    | Remove from beginning | Removed element       | ✅        |
| `splice()`   | Add/remove/replace    | Removed elements      | ✅        |
| `slice()`    | Extract/copy portion  | New array             | ❌        |
| `includes()` | Check existence       | Boolean               | ❌        |
| `indexOf()`  | Find index            | Number                | ❌        |
| `forEach()`  | Perform action        | `undefined`           | ❌*       |
| `map()`      | Transform             | New array             | ❌        |
| `filter()`   | Select elements       | New array             | ❌        |
| `find()`     | Find first match      | Element / `undefined` | ❌        |
| `some()`     | At least one matches  | Boolean               | ❌        |
| `every()`    | All match             | Boolean               | ❌        |
| `reduce()`   | Combine values        | Final value           | ❌        |
| `sort()`     | Sort elements         | Same array            | ✅        |
| `reverse()`  | Reverse               | Same array            | ✅        |
| `flat()`     | Flatten               | New array             | ❌        |

`forEach()` itself doesn't mutate the array, although the callback can mutate objects or the array.

---

# 28. Core Mental Model

Instead of memorizing array methods individually:

```text
forEach()
→ "Do something for every item."

map()
→ "Transform every item."

filter()
→ "Which items should I keep?"

find()
→ "Give me the first matching item."

some()
→ "Does at least one match?"

every()
→ "Do all items match?"

reduce()
→ "Combine everything into one result."
```

---

# 29. Important Interview Questions

### Basic

1. What is an array in JavaScript?
2. Are JavaScript arrays mutable?
3. Why does array indexing start from 0?
4. What does `length` return?
5. How do you get the last element of an array?
6. What happens when you access a non-existent array index?

### Methods

7. Difference between `push()` and `unshift()`?
8. Difference between `pop()` and `shift()`?
9. Difference between `slice()` and `splice()`?
10. Does `map()` mutate the original array?
11. Difference between `map()` and `forEach()`?
12. Difference between `filter()` and `find()`?
13. Difference between `some()` and `every()`?
14. What is `reduce()`?
15. What is an accumulator in `reduce()`?
16. Why does numerical `sort()` require a comparator?

### References & Copying

17. What is the difference between:

```js
const b = a;
```

and

```js
const b = [...a];
```

18. What does the spread operator do with arrays?
19. Is `[...array]` a deep copy or shallow copy?
20. How do you combine two arrays without mutating them?

### Destructuring

21. What is array destructuring?
22. How is array destructuring different from object destructuring?
23. How can you skip an element during destructuring?
24. What does rest syntax do in array destructuring?

### Advanced

25. What is a nested array?
26. What does `flat()` do?
27. Explain this pipeline:

```js
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 10)
  .reduce((total, num) => total + num, 0);
```

---

# 30. Hands-On Exercises

### Exercise 1

```js
const fruits = ["apple", "banana", "mango", "orange"];
```

* Print the first element.
* Print the last element.
* Print the length.

### Exercise 2

```js
const numbers = [10, 20, 30];
```

* Add `40` at the end.
* Add `5` at the beginning.
* Remove the last element.
* Remove the first element.
* Replace `20` with `25`.

### Exercise 3

Use `map()`:

```js
const numbers = [1, 2, 3, 4, 5];
```

Create:

```js
[2, 4, 6, 8, 10]
```

### Exercise 4

Use `filter()` to get numbers greater than `20`.

```js
const numbers = [10, 15, 20, 25, 30, 35];
```

### Exercise 5

Use `find()` to find the first user aged 32.

```js
const users = [
  { name: "Shivani", age: 32 },
  { name: "Rahul", age: 32 },
  { name: "Amit", age: 25 }
];
```

### Exercise 6

Use `some()` to check whether an array contains an even number.

### Exercise 7

Use `every()` to check whether all numbers are positive.

### Exercise 8

Use `reduce()` to calculate:

```js
const prices = [100, 200, 50, 150];

// 500
```

### Exercise 9

Given:

```js
const employees = [
  { name: "Shivani", salary: 50000 },
  { name: "Rahul", salary: 70000 },
  { name: "Amit", salary: 40000 }
];
```

Using array methods:

1. Get all employee names.
2. Get employees earning more than 45000.
3. Find Amit.
4. Calculate total salary.
5. Check whether everyone earns more than 30000.

### Exercise 10

Predict the output:

```js
const numbers = [1, 2, 3];

const result = numbers.map(num => {
  num * 2;
});

console.log(result);
```

### Exercise 11

Predict the output:

```js
const numbers = [1, 2, 3];

const result = numbers.forEach(num => num * 2);

console.log(result);
```

### Exercise 12

Explain the reference behavior:

```js
const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a);
console.log(b);
```

### Exercise 13

Compare with:

```js
const a = [1, 2, 3];
const b = [...a];

b.push(4);

console.log(a);
console.log(b);
```

### Exercise 14

Predict:

```js
const numbers = [10, 20, 30, 40];

const [first, second, ...remaining] = numbers;
```

### Exercise 15

Explain the difference between:

```text
map()
filter()
find()
forEach()
reduce()
```

Include:

* What each returns
* Whether it creates a new array
* Whether it mutates the original
* When you would use it

---

# 🎯 Key Takeaways

```text
Arrays are zero-indexed.

Arrays are mutable.

const prevents reassignment, not mutation.

slice() does not mutate.
splice() mutates.

map() transforms.
filter() selects.
find() searches for one.
some() checks if at least one matches.
every() checks if all match.
forEach() performs an action.
reduce() combines values into one result.

[...array] creates a shallow copy.

Array destructuring works by position.

map() with { } requires an explicit return.
```

## ⭐ Most Important Mental Models

```text
map     → Transform
filter  → Select
find    → First match
some    → At least one?
every   → All?
forEach → Do something
reduce  → Combine
```

These array concepts form an important foundation for **TypeScript, Angular, RxJS, API data handling, and frontend application development**.
