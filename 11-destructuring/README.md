# Day 11 — Destructuring in JavaScript

## 📌 Overview

Destructuring is a JavaScript feature that allows us to **extract values from objects and arrays and assign them to variables in a concise and readable way**.

It is commonly used when working with:

* API responses
* Function parameters
* Objects and arrays
* Angular and TypeScript applications
* Data transformation
* Modern JavaScript code

---

## 🎯 Learning Objectives

By the end of this topic, I learned:

* Object destructuring
* Array destructuring
* Renaming variables
* Default values
* Nested destructuring
* Arrays inside objects
* Objects inside arrays
* Destructuring function parameters
* Extracting values from complex API responses

---

# 1. Object Destructuring

Object destructuring extracts values using the object's **property names**.

```javascript
const user = {
  name: "Shivani",
  age: 32,
  city: "Pune"
};

const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

Output:

```text
Shivani
32
Pune
```

### Key Point

```javascript
const { name } = user;
```

is equivalent to:

```javascript
const name = user.name;
```

---

# 2. Extracting Only Required Properties

We don't need to extract every property.

```javascript
const user = {
  name: "Shivani",
  age: 32,
  city: "Pune",
  profession: "Angular Developer",
  experience: 4
};

const { name, profession } = user;

console.log(name);
console.log(profession);
```

This is especially useful when an API returns many fields but the application only needs a few.

---

# 3. Renaming Variables

We can assign a property to a differently named variable.

```javascript
const user = {
  name: "Shivani",
  age: 32
};

const {
  name: userName,
  age: userAge
} = user;

console.log(userName);
console.log(userAge);
```

Output:

```text
Shivani
32
```

### Syntax

```javascript
const { propertyName: newVariableName } = object;
```

Important:

```javascript
const { name: userName } = user;
```

means:

* `name` → object property
* `userName` → variable

It does **not** create a variable called `name`.

---

# 4. Array Destructuring

Array destructuring extracts values based on their **position**.

```javascript
const skills = [
  "JavaScript",
  "TypeScript",
  "Angular"
];

const [first, second, third] = skills;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```text
JavaScript
TypeScript
Angular
```

### Key Difference

Objects:

```javascript
const { name } = user;
```

Use **property names**.

Arrays:

```javascript
const [first] = skills;
```

Use **position**.

---

# 5. Skipping Array Elements

We can skip elements using commas.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, , third, , fifth] = numbers;

console.log(first);
console.log(third);
console.log(fifth);
```

Output:

```text
10
30
50
```

The empty positions represent skipped elements.

---

# 6. Rest with Array Destructuring

The rest operator can collect the remaining elements.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining);
```

Output:

```text
10
20
[30, 40, 50]
```

`...remaining` collects all elements that haven't already been destructured.

---

# 7. Default Values

Default values can be provided when a property or array element is `undefined`.

```javascript
const user = {
  name: "Shivani",
  age: 32
};

const {
  name,
  city = "Pune"
} = user;

console.log(name);
console.log(city);
```

Output:

```text
Shivani
Pune
```

---

# 8. Default Values in Arrays

```javascript
const skills = ["JavaScript"];

const [
  firstSkill,
  secondSkill = "Angular"
] = skills;

console.log(firstSkill);
console.log(secondSkill);
```

Output:

```text
JavaScript
Angular
```

---

# 9. Default Values Apply to `undefined`

A destructuring default value is applied only when the value is `undefined`.

```javascript
const user = {
  city: undefined
};

const { city = "Pune" } = user;

console.log(city);
```

Output:

```text
Pune
```

However, `null` does not trigger the default.

```javascript
const user = {
  city: null
};

const { city = "Pune" } = user;

console.log(city);
```

Output:

```text
null
```

### Remember

```text
undefined → default value is used
null      → default value is NOT used
```

---

# 10. Missing Properties

If a property does not exist, destructuring gives `undefined`.

```javascript
const user = {
  name: "Shivani"
};

const { age } = user;

console.log(age);
```

Output:

```text
undefined
```

We can provide a default:

```javascript
const { age = 32 } = user;
```

Now:

```text
32
```

---

# 11. Nested Object Destructuring

Objects can be destructured at multiple levels.

```javascript
const user = {
  name: "Shivani",
  address: {
    city: "Pune",
    state: "Maharashtra"
  }
};

const {
  name,
  address: {
    city,
    state
  }
} = user;

console.log(name);
console.log(city);
console.log(state);
```

Output:

```text
Shivani
Pune
Maharashtra
```

### Structure

```text
user
├── name
└── address
    ├── city
    └── state
```

The destructuring follows the same structure.

---

# 12. Arrays Inside Objects

Arrays can be destructured while destructuring an object.

```javascript
const user = {
  name: "Shivani",
  skills: [
    "JavaScript",
    "Angular",
    "RxJS"
  ]
};

const {
  name,
  skills: [firstSkill, secondSkill]
} = user;

console.log(name);
console.log(firstSkill);
console.log(secondSkill);
```

Output:

```text
Shivani
JavaScript
Angular
```

---

# 13. Objects Inside Arrays

Objects inside arrays can also be destructured.

```javascript
const employees = [
  {
    name: "Shivani",
    role: "Angular Developer"
  },
  {
    name: "Rahul",
    role: "Backend Developer"
  }
];

const [
  { name: firstName, role: firstRole },
  { name: secondName, role: secondRole }
] = employees;

console.log(firstName);
console.log(firstRole);

console.log(secondName);
console.log(secondRole);
```

Output:

```text
Shivani
Angular Developer
Rahul
Backend Developer
```

---

# 14. Destructuring Function Parameters

Function parameters can also be destructured.

Instead of:

```javascript
function displayUser(user) {
  console.log(user.name);
  console.log(user.age);
}
```

We can write:

```javascript
function displayUser({ name, age }) {
  console.log(name);
  console.log(age);
}

displayUser({
  name: "Shivani",
  age: 32
});
```

This makes the function cleaner and clearly shows which properties it needs.

---

# 15. Complex API Response

Consider an API response:

```javascript
const apiResponse = {
  status: "success",
  data: {
    user: {
      id: 101,
      name: "Shivani",
      email: "shivani@example.com",
      role: "Angular Developer",
      experience: 4,

      address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
      },

      skills: [
        "JavaScript",
        "TypeScript",
        "Angular",
        "RxJS"
      ],

      preferences: {
        theme: "dark",
        notifications: true
      }
    }
  }
};
```

We can extract only the required fields:

```javascript
const {
  data: {
    user: {
      name,
      email,
      role,

      address: {
        city,
        state
      },

      skills: [
        firstSkill,
        secondSkill
      ],

      preferences: {
        theme,
        notifications
      }
    }
  }
} = apiResponse;
```

Now the required values are directly available:

```javascript
console.log(name);
console.log(email);
console.log(role);
console.log(city);
console.log(state);
console.log(firstSkill);
console.log(secondSkill);
console.log(theme);
console.log(notifications);
```

---

# 16. Complex Destructuring with Defaults

If an API may not provide some values:

```javascript
const apiResponse = {
  data: {
    user: {
      name: "Shivani",
      address: {
        city: "Pune"
      },
      skills: ["JavaScript"]
    }
  }
};
```

We can use:

```javascript
const {
  data: {
    user: {
      name,

      address: {
        city
      },

      skills: [
        firstSkill,
        secondSkill = "Not available"
      ],

      preferences: {
        theme = "light"
      } = {}
    }
  }
} = apiResponse;
```

This gives:

```text
name        → Shivani
city        → Pune
firstSkill  → JavaScript
secondSkill → Not available
theme       → light
```

The `= {}` after `preferences` is useful when the entire nested `preferences` object might be missing.

---

# 🧠 Mental Model

Always look at the data structure first.

For example:

```text
apiResponse
└── data
    └── user
        ├── name
        ├── address
        │   ├── city
        │   └── state
        │
        ├── skills []
        │
        └── preferences
            ├── theme
            └── notifications
```

Then destructure according to the structure.

### Data type determines syntax:

```text
Object → {}
Array  → []
```

Example:

```javascript
address: {
  city
}
```

because `address` is an object.

```javascript
skills: [
  firstSkill,
  secondSkill
]
```

because `skills` is an array.

---

# 🔑 Key Interview Points

### 1. Object destructuring

```javascript
const { name, age } = user;
```

Works using property names.

### 2. Array destructuring

```javascript
const [first, second] = numbers;
```

Works using position.

### 3. Rename

```javascript
const { name: userName } = user;
```

### 4. Default

```javascript
const { city = "Pune" } = user;
```

### 5. Missing property

```javascript
const { age } = user;
```

returns:

```javascript
undefined
```

unless a default is provided.

### 6. Default behavior

```text
undefined → default applied
null      → default NOT applied
```

### 7. Nested destructuring

```javascript
const {
  address: { city }
} = user;
```

### 8. Array inside object

```javascript
const {
  skills: [firstSkill]
} = user;
```

### 9. Object inside array

```javascript
const [{ name }] = users;
```

### 10. Function parameter destructuring

```javascript
function displayUser({ name, age }) {
  // ...
}
```

---

# 🎯 Exercises Completed

* [x] Basic object destructuring
* [x] Rename variables
* [x] Array destructuring
* [x] Skip array elements
* [x] Default values
* [x] Nested object destructuring
* [x] Arrays inside objects
* [x] Objects inside arrays
* [x] Complex API response
* [x] Nested destructuring with defaults
* [x] Interview questions

---

# ❓ Interview Questions

1. What is destructuring in JavaScript?
2. What is the difference between object and array destructuring?
3. How do you rename a variable during object destructuring?
4. How do you provide default values?
5. When is a destructuring default value applied?
6. What happens if the property doesn't exist?
7. Can you destructure nested objects?
8. Can you destructure arrays inside objects?
9. Can you destructure objects inside arrays?
10. Can function parameters be destructured?
11. What is the difference between `const { name } = user` and `const { name: userName } = user`?
12. What happens when a destructured property has a value of `null`?
13. How would you destructure a complex API response?
14. How can you safely destructure a potentially missing nested object?

---

# ⭐ One-Line Rule to Remember

> **Objects destructure by property name; arrays destructure by position.**

---

## 🚀 Why Destructuring Matters for Angular

Destructuring becomes especially useful when working with:

* API responses
* HTTP requests
* RxJS `subscribe()`
* Component data
* Function parameters
* Configuration objects
* TypeScript interfaces
* State management
* Modern Angular applications

Example:

```typescript
this.userService.getUser().subscribe(({ data }) => {
  console.log(data);
});
```

Understanding destructuring now will make upcoming **TypeScript, RxJS and Angular code much easier to read.**
