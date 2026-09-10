# Day 8 — JavaScript Objects

## 🎯 Learning Objectives

By the end of this topic, you should understand:

* What objects are
* Object literals
* Properties
* Methods
* Dot notation
* Bracket notation
* Computed property names
* Shorthand properties
* Object destructuring
* Renaming during destructuring
* Default values during destructuring
* Nested objects
* Nested destructuring
* Object references
* Object spread
* Object rest
* Shallow copying
* `Object.keys()`
* `Object.values()`
* `Object.entries()`
* Optional chaining
* How these concepts relate to real-world JavaScript and Angular

---

# 1. What Is an Object?

An object is a collection of related data and behavior represented using **key-value pairs**.

```js
const user = {
    name: "Shivani",
    age: 32,
    city: "Pune"
};
```

Conceptually:

```text
user
├── name → "Shivani"
├── age  → 32
└── city → "Pune"
```

Each key-value pair is called a **property**.

### General syntax

```js
const objectName = {
    key: value,
    key: value
};
```

Objects are used to represent real-world entities.

Examples:

```js
const user = {
    name: "Shivani",
    age: 32
};

const product = {
    name: "Laptop",
    price: 50000
};

const employee = {
    name: "Rahul",
    role: "Developer"
};
```

---

# 2. Object Literal

An object created using `{}` is called an **object literal**.

```js
const user = {
    name: "Shivani",
    age: 32,
    city: "Pune"
};
```

The `{}` creates the object.

Compare:

```js
const name = "Shivani";        // primitive value

const user = {                 // object
    name: "Shivani"
};

const users = ["Shivani"];     // array
```

---

# 3. Properties

A property is a key-value pair inside an object.

```js
const user = {
    name: "Shivani",
    age: 32,
    isDeveloper: true
};
```

Properties:

```text
name        → "Shivani"
age         → 32
isDeveloper → true
```

Keys:

```text
name
age
isDeveloper
```

Values:

```text
"Shivani"
32
true
```

Properties generally represent the **state/data** of an object.

---

# 4. Accessing Properties

There are two main ways to access object properties:

1. Dot notation
2. Bracket notation

---

## 4.1 Dot Notation

```js
const user = {
    name: "Shivani",
    age: 32
};

console.log(user.name);
console.log(user.age);
```

Output:

```text
Shivani
32
```

Syntax:

```js
object.property
```

Dot notation is usually preferred when the property name is known and is a valid identifier.

---

# 5. Bracket Notation

```js
const user = {
    name: "Shivani",
    age: 32
};

console.log(user["name"]);
console.log(user["age"]);
```

Output:

```text
Shivani
32
```

Syntax:

```js
object["property"]
```

---

# 6. Dot Notation vs Bracket Notation

Both can access the same property:

```js
user.name
```

and:

```js
user["name"]
```

However, bracket notation is especially useful when the property name is dynamic.

```js
const user = {
    name: "Shivani",
    age: 32
};

const key = "name";

console.log(user[key]);
```

Output:

```text
Shivani
```

JavaScript evaluates:

```js
key
```

first:

```text
key → "name"
```

Then:

```js
user[key]
```

becomes effectively:

```js
user["name"]
```

---

# 7. Important Difference: `user.key` vs `user[key]`

```js
const user = {
    name: "Shivani"
};

const key = "name";

console.log(user.key);
console.log(user[key]);
```

Output:

```text
undefined
Shivani
```

Why?

### `user.key`

JavaScript searches for a property literally called:

```text
"key"
```

There is no such property.

### `user[key]`

JavaScript evaluates:

```js
key → "name"
```

Therefore:

```js
user[key]
```

becomes:

```js
user["name"]
```

### Interview rule

> Dot notation uses the literal property name. Bracket notation evaluates the expression inside the brackets, which allows dynamic property access.

---

# 8. Adding Properties

Objects are mutable by default.

You can add properties after creating the object.

```js
const user = {
    name: "Shivani"
};

user.age = 32;
user.city = "Pune";
```

Result:

```js
{
    name: "Shivani",
    age: 32,
    city: "Pune"
}
```

Bracket notation can also be used:

```js
user["city"] = "Pune";
```

---

# 9. Updating Properties

Assign a new value to an existing property.

```js
const user = {
    name: "Shivani",
    age: 31
};

user.age = 32;
```

Now:

```js
console.log(user.age);
```

Output:

```text
32
```

---

# 10. Deleting Properties

Use the `delete` operator.

```js
const user = {
    name: "Shivani",
    age: 32,
    city: "Pune"
};

delete user.city;
```

Result:

```js
{
    name: "Shivani",
    age: 32
}
```

Syntax:

```js
delete object.property;
```

---

# 11. Methods

A method is a function stored as an object property.

```js
const user = {
    name: "Shivani",

    greet() {
        console.log("Hello");
    }
};
```

Here:

```text
name → property
greet → method
```

Call the method:

```js
user.greet();
```

Output:

```text
Hello
```

---

# 12. Method Syntax

Modern JavaScript allows:

```js
const user = {
    greet() {
        console.log("Hello");
    }
};
```

Instead of:

```js
const user = {
    greet: function() {
        console.log("Hello");
    }
};
```

Both work.

The first is the modern shorthand syntax.

---

# 13. `this` Inside Object Methods

Methods can access properties of their object using `this`.

```js
const user = {
    name: "Shivani",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Shivani
```

When called as:

```js
user.greet();
```

`this` refers to `user`.

Therefore:

```js
this.name
```

effectively accesses:

```js
user.name
```

### Important

The value of `this` depends on **how the function is called**, not where it was written.

This connects directly to the earlier `this` topic.

---

# 14. Properties vs Methods

Example:

```js
const user = {
    name: "Shivani",
    age: 32,

    greet() {
        console.log("Hello");
    }
};
```

### Properties

```text
name
age
```

Represent data/state.

### Method

```text
greet()
```

Represents behavior/action.

Mental model:

```text
Object
│
├── Data
│   ├── name
│   └── age
│
└── Behavior
    └── greet()
```

---

# 15. Computed Property Names

Computed property names allow JavaScript to calculate the property name.

```js
const key = "name";

const user = {
    [key]: "Shivani"
};
```

Result:

```js
{
    name: "Shivani"
}
```

The brackets mean:

> Evaluate this expression and use the result as the property name.

---

## Another Example

```js
const field = "email";
const value = "shivani@example.com";

const user = {
    [field]: value
};
```

Result:

```js
{
    email: "shivani@example.com"
}
```

If:

```js
field = "phone";
```

the property would become:

```js
{
    phone: value
}
```

---

# 16. Why Computed Properties Are Useful

Computed properties are useful for dynamic data.

Common examples:

* Dynamic forms
* API data
* Configuration objects
* State updates
* Reducers
* Dynamic property updates

Example:

```js
const field = "email";

const updatedUser = {
    [field]: "shivani@example.com"
};
```

---

# 17. Property Shorthand

Suppose:

```js
const name = "Shivani";
const age = 32;
```

Without shorthand:

```js
const user = {
    name: name,
    age: age
};
```

Modern JavaScript allows:

```js
const user = {
    name,
    age
};
```

This is equivalent to:

```js
const user = {
    name: name,
    age: age
};
```

The variable name becomes the property name.

---

# 18. Object Destructuring

Destructuring allows us to extract properties from an object into variables.

Without destructuring:

```js
const user = {
    name: "Shivani",
    age: 32
};

const name = user.name;
const age = user.age;
```

With destructuring:

```js
const {
    name,
    age
} = user;
```

Now:

```js
console.log(name);
console.log(age);
```

Output:

```text
Shivani
32
```

---

# 19. Object Destructuring Is Based on Property Names

Object destructuring does not depend on property order.

```js
const user = {
    name: "Shivani",
    age: 32,
    city: "Pune"
};

const {
    city,
    age,
    name
} = user;
```

This works because JavaScript looks for the property names.

Unlike array destructuring, object destructuring is based on **keys/names**, not positions.

---

# 20. Renaming During Destructuring

Suppose:

```js
const employee = {
    name: "Shivani",
    role: "Angular Developer"
};
```

You want a local variable called `employeeName`.

Use:

```js
const {
    name: employeeName,
    role: jobRole
} = employee;
```

Now:

```js
console.log(employeeName);
console.log(jobRole);
```

Output:

```text
Shivani
Angular Developer
```

Important:

```js
name: employeeName
```

means:

```text
Object property → Local variable
name            → employeeName
```

It does NOT rename the actual property in the object.

The original object still has:

```js
{
    name: "Shivani"
}
```

---

# 21. Default Values During Destructuring

You can provide a fallback value.

```js
const user = {
    name: "Shivani"
};

const {
    name,
    age = 32
} = user;
```

Since `age` is missing:

```js
age
```

gets:

```text
32
```

Default values are used when the property value is `undefined`.

---

# 22. Nested Objects

Objects can contain other objects.

```js
const employee = {
    name: "Shivani",

    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
};
```

Visual representation:

```text
employee
│
├── name
│
└── address
    │
    ├── city
    ├── state
    └── country
```

---

# 23. Accessing Nested Properties

```js
console.log(employee.address.city);
console.log(employee.address.state);
console.log(employee.address.country);
```

Output:

```text
Pune
Maharashtra
India
```

JavaScript accesses the object level by level.

```text
employee
   ↓
address
   ↓
city
```

---

# 24. Nested Destructuring

Nested objects can also be destructured.

```js
const {
    address: {
        city,
        state,
        country
    }
} = employee;
```

Now:

```js
console.log(city);
console.log(state);
console.log(country);
```

Output:

```text
Pune
Maharashtra
India
```

---

# 25. Object References

Objects are **reference values**.

Example:

```js
const user1 = {
    name: "Shivani"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);
```

Output:

```text
Rahul
Rahul
```

Why?

`user1` and `user2` refer to the same object.

Visual:

```text
user1 ─────┐
           ↓
       Object
       {
          name: "Rahul"
       }
           ↑
user2 ─────┘
```

Therefore changing the object through one reference is visible through the other.

---

# 26. Separate Objects

Consider:

```js
const user1 = {
    name: "Shivani"
};

const user2 = {
    name: "Shivani"
};
```

These are two different objects.

Therefore:

```js
console.log(user1 === user2);
```

Output:

```text
false
```

Even though their contents are identical.

Objects are compared by **reference**, not by their contents.

---

# 27. Object Spread

The spread operator `...` expands an object's properties.

```js
const user = {
    name: "Shivani",
    age: 32
};

const copy = {
    ...user
};
```

Result:

```js
{
    name: "Shivani",
    age: 32
}
```

Conceptually:

```text
...user
↓
take the properties of user and place them here
```

---

# 28. Spread Creates a New Outer Object

Compare:

```js
const copy = user;
```

with:

```js
const copy = {
    ...user
};
```

### Reference assignment

```js
const copy = user;
```

Both variables refer to the same object.

### Spread

```js
const copy = {
    ...user
};
```

A new outer object is created.

Example:

```js
const user = {
    name: "Shivani"
};

const copy = {
    ...user
};

copy.name = "Rahul";

console.log(user.name);
console.log(copy.name);
console.log(user === copy);
```

Output:

```text
Shivani
Rahul
false
```

---

# 29. Spread + Property Override

Properties written later override earlier properties.

```js
const user = {
    name: "Shivani",
    age: 32
};

const updatedUser = {
    ...user,
    age: 33
};
```

Result:

```js
{
    name: "Shivani",
    age: 33
}
```

Why?

The object effectively contains:

```text
age: 32
age: 33
```

The later value wins.

### Rule

> When duplicate properties exist, the last value wins.

---

# 30. Spread Order Matters

```js
const user = {
    name: "Shivani",
    age: 32
};

const result = {
    age: 40,
    ...user
};
```

Result:

```js
{
    age: 32,
    name: "Shivani"
}
```

Because:

```text
age: 40
↓
...user
↓
age: 32
```

The later `age: 32` overrides `40`.

---

# 31. Shallow Copy

Object spread creates a **shallow copy**.

Example:

```js
const user = {
    name: "Shivani",

    address: {
        city: "Pune"
    }
};

const copy = {
    ...user
};
```

The outer object is new.

But the nested `address` object is still shared.

Conceptually:

```text
user ─────→ Object A
             │
             └── address ───→ Object C

copy ─────→ Object B
             │
             └── address ───→ Object C
```

Therefore:

```js
user === copy
```

is:

```text
false
```

but:

```js
user.address === copy.address
```

is:

```text
true
```

---

# 32. Shallow Copy Example

```js
const user = {
    name: "Shivani",

    address: {
        city: "Pune"
    }
};

const copy = {
    ...user
};

copy.address.city = "Mumbai";

console.log(user.address.city);
console.log(copy.address.city);
```

Output:

```text
Mumbai
Mumbai
```

Why?

Both `user.address` and `copy.address` point to the same nested object.

---

# 33. Nested Spread

To create a new nested object too:

```js
const copy = {
    ...user,

    address: {
        ...user.address
    }
};
```

Now:

```js
user.address === copy.address
```

is:

```text
false
```

Changing:

```js
copy.address.city = "Mumbai";
```

will not change:

```js
user.address.city
```

This is still only as deep as the levels you explicitly copy.

---

# 34. Object Rest

The `...` syntax is also used in destructuring to collect remaining properties.

```js
const user = {
    name: "Shivani",
    age: 32,
    city: "Pune"
};

const {
    name,
    ...details
} = user;
```

Result:

```js
name
```

contains:

```text
Shivani
```

and:

```js
details
```

contains:

```js
{
    age: 32,
    city: "Pune"
}
```

---

# 35. Spread vs Rest

The same `...` syntax has different meanings depending on where it is used.

### Spread

Expands/copies properties:

```js
const copy = {
    ...user
};
```

Think:

> Spread the properties out.

### Rest

Collects remaining properties:

```js
const {
    name,
    ...details
} = user;
```

Think:

> Collect the rest.

### Quick comparison

```text
SPREAD
...user
↓
EXPANDS

REST
...details
↓
COLLECTS REMAINING
```

---

# 36. Object.keys()

`Object.keys()` returns an array containing the object's property names.

```js
const user = {
    name: "Shivani",
    age: 32,
    city: "Pune"
};

console.log(Object.keys(user));
```

Output:

```js
["name", "age", "city"]
```

Mental model:

```text
Object.keys()
      ↓
PROPERTY NAMES
```

---

# 37. Object.values()

`Object.values()` returns an array containing the object's values.

```js
console.log(Object.values(user));
```

Output:

```js
["Shivani", 32, "Pune"]
```

Mental model:

```text
Object.values()
      ↓
PROPERTY VALUES
```

---

# 38. Object.entries()

`Object.entries()` returns an array containing `[key, value]` pairs.

```js
console.log(Object.entries(user));
```

Output:

```js
[
    ["name", "Shivani"],
    ["age", 32],
    ["city", "Pune"]
]
```

Each entry is:

```js
[key, value]
```

Mental model:

```text
Object.entries()
        ↓
[
    [key, value],
    [key, value],
    [key, value]
]
```

---

# 39. Using Object.entries() with Destructuring

Because each entry is an array:

```js
["name", "Shivani"]
```

we can use array destructuring:

```js
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}
```

Output:

```text
name Shivani
age 32
city Pune
```

This combines:

* Objects
* `Object.entries()`
* Array destructuring
* `for...of`

---

# 40. Optional Chaining

Optional chaining uses:

```js
?.
```

It allows safe access to properties that may not exist.

Example:

```js
const user = {
    name: "Shivani"
};
```

This can throw an error:

```js
console.log(user.address.city);
```

because:

```text
user.address
↓
undefined

undefined.city
↓
TypeError
```

---

# 41. Optional Chaining with `?.`

Instead:

```js
console.log(user.address?.city);
```

Output:

```text
undefined
```

No error occurs.

The `?.` tells JavaScript:

> If the value on the left is `null` or `undefined`, stop and return `undefined`.

---

# 42. Multiple Optional Chains

You can safely check multiple levels:

```js
console.log(user?.address?.city);
```

This safely handles:

```text
user
 ↓
address
 ↓
city
```

If any relevant value is `null` or `undefined`, the expression returns `undefined`.

---

# 43. Normal Access vs Optional Chaining

### Normal access

```js
user.address.city
```

Can throw an error if `address` is `undefined`.

### Optional chaining

```js
user.address?.city
```

Safely returns `undefined` if `address` is `null` or `undefined`.

### Fully safe chain

```js
user?.address?.city
```

Safely checks both `user` and `address`.

---

# 44. Optional Chaining with Methods

Optional chaining can also be used when calling a method:

```js
user.greet?.();
```

This means:

> Call `greet()` only if it exists.

Useful when a method/property may or may not exist.

---

# 45. Important Object Mental Model

Keep this model in your head:

```text
OBJECT
│
├── Properties → data/state
│
├── Methods → behavior
│
├── Can contain nested objects
│
├── Can be mutated
│
├── Access with . or []
│
└── Variables hold references to objects
```

---

# 46. Core Syntax Cheat Sheet

## Create object

```js
const user = {
    name: "Shivani",
    age: 32
};
```

## Access property

```js
user.name;
```

## Dynamic access

```js
const key = "name";

user[key];
```

## Add property

```js
user.city = "Pune";
```

## Update property

```js
user.age = 33;
```

## Delete property

```js
delete user.age;
```

## Method

```js
const user = {
    greet() {
        console.log("Hello");
    }
};
```

## Computed property

```js
const key = "name";

const user = {
    [key]: "Shivani"
};
```

## Destructure

```js
const { name, age } = user;
```

## Rename during destructuring

```js
const { name: userName } = user;
```

## Default value

```js
const { age = 32 } = user;
```

## Nested destructuring

```js
const {
    address: { city }
} = user;
```

## Shallow copy

```js
const copy = {
    ...user
};
```

## Override

```js
const updated = {
    ...user,
    age: 33
};
```

## Rest

```js
const {
    name,
    ...details
} = user;
```

## Keys

```js
Object.keys(user);
```

## Values

```js
Object.values(user);
```

## Entries

```js
Object.entries(user);
```

## Optional chaining

```js
user?.address?.city;
```

---

# 47. Common Interview Traps

## Trap 1 — Dot vs bracket

```js
const key = "name";

user.key;    // undefined
user[key];   // "Shivani"
```

---

## Trap 2 — Object comparison

```js
{} === {}
```

returns:

```text
false
```

because they are different object references.

---

## Trap 3 — Reference assignment

```js
const a = { name: "Shivani" };
const b = a;

b.name = "Rahul";

console.log(a.name);
```

Output:

```text
Rahul
```

Both reference the same object.

---

## Trap 4 — Spread is not deep copy

```js
const copy = {
    ...user
};
```

creates a new outer object but does not recursively clone nested objects.

---

## Trap 5 — Rest does not delete properties

```js
const {
    name,
    ...details
} = user;
```

does not remove `name` from `user`.

The original object remains unchanged.

---

## Trap 6 — Optional chaining

```js
user.address?.city
```

does not throw if `address` is `undefined`.

But:

```js
user.address.city
```

can throw.

---

# 48. Spread vs Reference vs Shallow Copy

This distinction is extremely important.

### Reference

```js
const copy = user;
```

```text
Same outer object
Same nested objects
```

---

### Shallow copy

```js
const copy = {
    ...user
};
```

```text
New outer object
Nested objects may be shared
```

---

### Nested copy

```js
const copy = {
    ...user,
    address: {
        ...user.address
    }
};
```

```text
New outer object
New address object
```

Only the explicitly spread levels are copied.

---

# 49. Real-World Relevance

These concepts are heavily used in modern frontend development.

### Object spread

```js
const updatedUser = {
    ...user,
    name: "Rahul"
};
```

Common in:

* State updates
* Angular
* NgRx
* RxJS transformations
* API transformations
* Immutable programming

### Optional chaining

```ts
user?.profile?.address?.city
```

Very common when working with:

* API responses
* Optional fields
* Forms
* Angular templates
* Nested application state

### Destructuring

```js
const { name, age } = user;
```

Common in:

* Function parameters
* API responses
* Configuration objects
* Angular/TypeScript code

---

# 50. Interview Questions

You should eventually be able to answer these without looking at your notes.

### Beginner

1. What is an object in JavaScript?
2. What is an object literal?
3. What is a property?
4. What is a method?
5. What is the difference between a property and a method?
6. How do you access an object property?
7. What is dot notation?
8. What is bracket notation?
9. What is the difference between `user.name` and `user["name"]`?
10. When would you use bracket notation?

### Intermediate

11. What are computed property names?
12. What is property shorthand?
13. What is object destructuring?
14. How does object destructuring work?
15. Does the order matter in object destructuring?
16. How do you rename a variable during destructuring?
17. How do you provide default values during destructuring?
18. What is nested destructuring?
19. Can objects contain other objects?
20. What is object spread?
21. What is object rest?
22. What is the difference between spread and rest?
23. What does `Object.keys()` return?
24. What does `Object.values()` return?
25. What does `Object.entries()` return?

### Advanced / Interview

26. Are JavaScript objects primitive or reference values?
27. Why does assigning one object to another variable not create a copy?
28. Why does `{ name: "Shivani" } === { name: "Shivani" }` return `false`?
29. What is a shallow copy?
30. Does object spread create a deep copy?
31. Why can changing a nested object after spreading still affect the original?
32. How can you copy nested objects using spread?
33. What happens when duplicate properties exist in an object?
34. Which value wins when using spread and duplicate properties?
35. What is optional chaining?
36. What problem does optional chaining solve?
37. What is the difference between `user.address.city` and `user.address?.city`?
38. How does `this` work inside an object method?
39. What is the difference between `const copy = user` and `const copy = { ...user }`?
40. Explain the difference between reference assignment, shallow copy, and deep copy.

---

# 51. Key Interview Answers

### What is an object?

> An object is a reference value that stores related data and behavior using key-value pairs.

### What is a method?

> A method is a function stored as a property of an object.

### Dot vs bracket notation?

> Dot notation uses a literal property name, while bracket notation evaluates an expression and therefore supports dynamic property access.

### What is destructuring?

> Destructuring is syntax that allows us to extract values from objects or arrays into variables.

### What is object spread?

> Object spread expands an object's enumerable properties into another object and is commonly used to create shallow copies or immutable updates.

### What is object rest?

> Object rest collects the remaining properties during destructuring into a new object.

### What is a shallow copy?

> A shallow copy creates a new outer object but does not recursively copy nested objects. Nested object references can therefore still be shared.

### What is optional chaining?

> Optional chaining allows safe access to properties or methods when a value may be `null` or `undefined`, returning `undefined` instead of throwing an error.

---

# 52. Final Day 8 Mental Model

Remember these relationships:

```text
OBJECT
  ↓
key-value pairs
  ↓
properties + methods
```

```text
user.name
  ↓
direct property access
```

```text
user[key]
  ↓
dynamic property access
```

```text
const { name } = user
  ↓
destructuring
```

```text
const { name: userName } = user
  ↓
destructuring + rename
```

```text
const { address: { city } } = user
  ↓
nested destructuring
```

```text
{ ...user }
  ↓
shallow copy
```

```text
{ name, ...details }
  ↓
rest / remaining properties
```

```text
Object.keys()
  ↓
keys
```

```text
Object.values()
  ↓
values
```

```text
Object.entries()
  ↓
[key, value] pairs
```

```text
user?.address?.city
  ↓
safe nested access
```

### ⭐ Most important rule

```text
const copy = user
        ↓
same object

const copy = { ...user }
        ↓
new outer object
        ↓
nested objects may still be shared
```

---

# 🏆 Day 8 Completion Checklist

Before moving to the next day, make sure you can explain these without looking at the README:

* [ ] I can create an object.
* [ ] I can add, update, and delete properties.
* [ ] I understand dot notation.
* [ ] I understand bracket notation.
* [ ] I understand dynamic property access.
* [ ] I understand methods.
* [ ] I understand `this` inside object methods.
* [ ] I understand computed properties.
* [ ] I understand object destructuring.
* [ ] I can rename destructured variables.
* [ ] I can use default destructuring values.
* [ ] I can destructure nested objects.
* [ ] I understand object references.
* [ ] I understand object spread.
* [ ] I understand object rest.
* [ ] I understand shallow copying.
* [ ] I understand why nested objects can still be shared.
* [ ] I know `Object.keys()`.
* [ ] I know `Object.values()`.
* [ ] I know `Object.entries()`.
* [ ] I understand optional chaining.
* [ ] I can explain all of these in an interview.

**Day 8 is complete when you can explain the concepts, predict outputs, and write the syntax without referring to this README.**
