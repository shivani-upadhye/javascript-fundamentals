# 💰 Transaction Manager

A small **pure JavaScript transaction management system** built as a Day 14 review project.

The purpose of this project is to practice and combine core JavaScript concepts learned so far, including **objects, arrays, classes, modules, array methods, destructuring, operators, and `reduce()`**.

No Angular, TypeScript, frameworks, or external libraries are used.

---

## 🚀 Features

* Add transactions
* Delete transactions by ID
* Filter transactions by type
* Find a transaction by ID
* Calculate total income
* Calculate total expenses
* Calculate current balance
* Generate category-wise transaction summary
* Count total transactions
* Find the largest transaction
* Calculate average expense

---

## 📁 Project Structure

```text
transaction-manager/
│
├── transaction.js
├── transaction-manager.js
├── app.js
└── README.md
```

### `transaction.js`

Contains:

* `Transaction` class
* Sample transaction data

### `transaction-manager.js`

Contains the `TransactionManager` class and the core transaction management logic.

### `app.js`

Acts as the entry point of the application.

It:

* Imports the required classes and data
* Creates a `TransactionManager`
* Adds transactions
* Tests the different methods

---

## 🧱 Transaction Structure

Each transaction contains:

```javascript
{
    id: 1,
    title: "Salary",
    amount: 50000,
    type: "income",
    category: "Salary"
}
```

### Properties

| Property   | Description                         |
| ---------- | ----------------------------------- |
| `id`       | Unique transaction identifier       |
| `title`    | Name/description of the transaction |
| `amount`   | Transaction amount                  |
| `type`     | `income` or `expense`               |
| `category` | Transaction category                |

---

## 🧩 TransactionManager

The `TransactionManager` class maintains all transactions in:

```javascript
this.transactions = [];
```

### Add Transaction

```javascript
addTransaction(transaction)
```

Adds a new transaction to the manager.

Example:

```javascript
manager.addTransaction(transaction);
```

---

### Delete Transaction

```javascript
deleteTransaction(id)
```

Removes a transaction using its ID.

The implementation uses `filter()` to create a new array without the matching transaction.

---

### Filter Transactions

```javascript
filterTransaction(type)
```

Returns transactions matching a particular type.

Example:

```javascript
manager.filterTransaction("expense");
```

The original transaction array remains unchanged.

---

### Find Transaction

```javascript
findTransaction(id)
```

Uses `find()` to return a transaction matching the given ID.

Example:

```javascript
manager.findTransaction(3);
```

Returns:

```javascript
{
    id: 3,
    title: "Electricity Bill",
    amount: 2000,
    type: "expense",
    category: "Bills"
}
```

---

### Get Total Income

```javascript
getTotalIncome()
```

Uses:

```text
filter() → reduce()
```

to select income transactions and calculate their total amount.

Example result:

```text
₹58,000
```

---

### Get Total Expense

```javascript
getTotalExpense()
```

Uses `filter()` and `reduce()` to calculate the total expense amount.

Example result:

```text
₹7,700
```

---

### Get Balance

```javascript
getBalance()
```

Calculates:

```text
Balance = Total Income - Total Expense
```

Example:

```text
₹58,000 - ₹7,700 = ₹50,300
```

---

### Get Category Summary

```javascript
getCategorySummary()
```

Uses `reduce()` to group transactions by category and calculate the total amount for each category.

Example:

```javascript
{
    Salary: 50000,
    Food: 2700,
    Bills: 2000,
    Freelance: 8000,
    Shopping: 3000
}
```

---

### Get Transaction Count

```javascript
getTransactionCount()
```

Returns the total number of transactions using:

```javascript
this.transactions.length
```

---

### Get Largest Transaction

```javascript
getLargestTransaction()
```

Uses `reduce()` to find the transaction with the highest amount.

Example:

```javascript
{
    id: 1,
    title: "Salary",
    amount: 50000,
    type: "income",
    category: "Salary"
}
```

---

### Get Average Expense

```javascript
getAverageExpense()
```

Calculates:

```text
Total Expense / Number of Expense Transactions
```

For the sample data:

```text
₹7,700 / 4 = ₹1,925
```

---

## 🧠 JavaScript Concepts Practiced

This project combines several concepts from the JavaScript learning journey.

### Variables and Data Types

Used throughout the application to store transaction information and calculation results.

### Objects

Transactions are represented as objects.

```javascript
{
    id: 1,
    title: "Groceries",
    amount: 1500
}
```

### Arrays

Transactions are stored in an array:

```javascript
const transactions = [];
```

### Classes

Two classes are used:

```javascript
Transaction
TransactionManager
```

### Constructors

The `Transaction` constructor initializes transaction properties.

```javascript
constructor(id, title, amount, type, category) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.type = type;
    this.category = category;
}
```

### `this`

Used inside class methods to access the current object and its properties.

### Array Methods

The project practices:

```javascript
filter()
find()
reduce()
forEach()
```

### `filter()`

Used for:

* Finding income transactions
* Finding expense transactions
* Filtering by type
* Removing transactions

### `find()`

Used to locate a transaction by ID.

### `reduce()`

Used for:

* Total income
* Total expenses
* Category summary
* Largest transaction

### `forEach()`

Used to iterate through transactions and add them to the manager.

### Ternary Operator

Used when comparing transactions, such as finding the largest transaction.

### Nullish Coalescing Operator

Used while building the category summary:

```javascript
summary[transaction.category] ?? 0
```

This provides `0` when a category does not yet exist in the summary object.

### ES Modules

The project is split into multiple files using:

```javascript
export
import
```

---

## 📊 Sample Data

The project uses the following transactions:

```text
Salary          ₹50,000   Income    Salary
Groceries        ₹1,500   Expense   Food
Electricity      ₹2,000   Expense   Bills
Freelance        ₹8,000   Income    Freelance
Shopping         ₹3,000   Expense   Shopping
Restaurant       ₹1,200   Expense   Food
```

### Expected Results

```text
Total Income:       ₹58,000
Total Expense:       ₹7,700
Balance:             ₹50,300
Transaction Count:        6
Average Expense:      ₹1,925
```

### Category Summary

```javascript
{
    Salary: 50000,
    Food: 2700,
    Bills: 2000,
    Freelance: 8000,
    Shopping: 3000
}
```

---

## ▶️ How to Run

Because this project uses ES modules, make sure your JavaScript environment supports modules.

If using a browser, include `app.js` as a module:

```html
<script type="module" src="app.js"></script>
```

Then open the application through a local development server.

---

## 🎯 Learning Objective

This project was created as a **JavaScript review project** after learning the fundamentals of:

* Values and variables
* Data types
* Primitive and reference values
* Operators and equality
* Functions
* Scope
* Hoisting
* Closures
* `this`
* Objects
* Arrays
* Spread and rest
* Destructuring
* Classes and prototypes
* ES modules

The main goal was to move from learning individual concepts to **combining them to solve a real programming problem**.

---

## 🔮 Possible Future Improvements

The project can later be extended with:

* Update transaction
* Search transactions
* Filter by category
* Filter by amount range
* Sort transactions
* Monthly summaries
* Date support
* Persistent storage using `localStorage`
* Input validation
* Error handling
* A browser-based UI
* Eventually rebuilding it as an Angular application

---

## 👩‍💻 Learning Journey

This project is part of my JavaScript fundamentals learning journey, focused on rebuilding strong programming fundamentals before moving deeper into **TypeScript and Angular**.
