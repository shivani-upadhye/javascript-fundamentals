# Day 12 — Classes & Prototypes in JavaScript

## 📚 Overview

Today I learned how JavaScript uses **classes and prototypes** to create objects, share behavior, and implement inheritance.

Although JavaScript provides `class` syntax, its underlying object model is **prototype-based**.

This topic is especially important for moving from JavaScript to **TypeScript and Angular**, where classes are used extensively for components, services, models, and other application structures.

---

## 🎯 Learning Objectives

By the end of Day 12, I learned:

* What classes are
* How to create instances using `new`
* Constructors
* Instance properties
* Instance methods
* The `this` keyword inside classes
* Prototypes
* Prototype chains
* `Object.getPrototypeOf()`
* `instanceof`
* Class inheritance
* `extends`
* `super()`
* Method overriding
* `super.method()`
* Static methods
* Static properties
* Class vs object
* Class vs prototype
* Real-world uses of classes and prototypes

---

# 1. Classes

A **class** is a blueprint for creating objects.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}
```

A class defines:

* Properties
* Methods
* How an object should be initialized

---

# 2. Creating Instances

Objects are created from a class using the `new` keyword.

```js
const person1 = new Person("Shivani", 32);
const person2 = new Person("Richa", 30);
```

`person1` and `person2` are instances of `Person`.

```js
console.log(person1 instanceof Person); // true
```

### Mental Model

```text
Person
  ↓
Class / Blueprint
  ↓
new
  ↓
Instances
  ├── person1
  └── person2
```

---

# 3. Constructor

The `constructor()` method runs automatically when an instance is created.

```js
class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
}
```

When:

```js
const employee = new Employee("Shivani", 50000, "IT");
```

the constructor runs automatically.

### Constructor Flow

```text
new Employee(...)
       ↓
constructor(...)
       ↓
initialize instance
       ↓
instance returned
```

---

# 4. Instance Properties

Properties created using `this` belong to the individual instance.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

```js
const person1 = new Person("Shivani", 32);
const person2 = new Person("Richa", 30);
```

Conceptually:

```text
person1
├── name → Shivani
└── age  → 32

person2
├── name → Richa
└── age  → 30
```

Each instance has its own property values.

---

# 5. Instance Methods

A method defined inside a class without `static` is an instance method.

```js
class Calculator {

    add(a, b) {
        return a + b;
    }

}
```

Create an instance:

```js
const calculator = new Calculator();

console.log(calculator.add(10, 20));
```

Output:

```text
30
```

Instance methods are called through the instance:

```js
calculator.add();
```

---

# 6. The `this` Keyword

Inside a constructor, `this` refers to the newly created instance.

```js
class User {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

}

const user = new User("Shivani");

user.sayName();
```

Output:

```text
Shivani
```

When:

```js
user.sayName();
```

is called, `this` refers to `user`.

Therefore:

```js
this.name
```

is effectively:

```js
user.name
```

### Important

Do not memorize:

> `this` always refers to the object.

A better rule is:

> The value of `this` depends on how a function is called.

---

# 7. The `new` Keyword

The `new` keyword is used to create an instance of a class.

```js
const person = new Person("Shivani", 32);
```

Conceptually, `new`:

1. Creates a new object
2. Connects it to `Person.prototype`
3. Calls the constructor
4. Sets `this` to the new object
5. Returns the new object

### Mental Model

```text
new Person(...)
      ↓
new object
      ↓
Person.prototype connection
      ↓
constructor()
      ↓
instance returned
```

---

# 8. Prototypes

JavaScript uses a **prototype-based object model**.

A prototype is an object that another object can use for inherited properties and methods.

Example:

```js
class Person {

    greet() {
        console.log("Hello");
    }

}

const person = new Person();
```

We can check the prototype:

```js
console.log(
    Object.getPrototypeOf(person) === Person.prototype
);
```

Output:

```text
true
```

Conceptually:

```text
person
  ↓
Person.prototype
```

---

# 9. Where Class Methods Live

Consider:

```js
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

}
```

Create an instance:

```js
const person = new Person("Shivani");
```

The `name` property belongs directly to the instance:

```text
person
└── name → Shivani
```

The `greet()` method is available through the prototype:

```text
person
   ↓
Person.prototype
   └── greet()
```

This allows multiple instances to share the same method.

---

# 10. Prototype Sharing

```js
class Person {

    greet() {
        console.log("Hello");
    }

}

const person1 = new Person();
const person2 = new Person();

console.log(person1.greet === person2.greet);
```

Output:

```text
true
```

Both instances can access the same prototype method.

---

# 11. Prototype Chain

When JavaScript cannot find a property directly on an object, it searches its prototype chain.

For a class instance:

```text
person
   ↓
Person.prototype
   ↓
Object.prototype
   ↓
null
```

Example:

```js
person.toString();
```

`toString()` may not exist directly on `person`.

JavaScript searches:

```text
person
   ↓
Person.prototype
   ↓
Object.prototype
   ↓
toString() found
```

This is called **prototype lookup**.

---

# 12. Object.prototype

Most ordinary JavaScript objects ultimately inherit from `Object.prototype`.

It provides methods such as:

```js
toString()
hasOwnProperty()
valueOf()
```

Example:

```js
const user = {
    name: "Shivani"
};

user.toString();
```

We did not define `toString()` ourselves.

JavaScript can find it through the prototype chain.

---

# 13. Object.getPrototypeOf()

`Object.getPrototypeOf()` allows us to inspect an object's prototype.

```js
class Person {}

const person = new Person();

console.log(
    Object.getPrototypeOf(person) === Person.prototype
);
```

Output:

```text
true
```

---

# 14. `instanceof`

`instanceof` checks whether a constructor's prototype exists in an object's prototype chain.

```js
class Person {}

const person = new Person();

console.log(person instanceof Person);
```

Output:

```text
true
```

Inheritance example:

```js
class Person {}

class Developer extends Person {}

const developer = new Developer();

console.log(developer instanceof Developer); // true
console.log(developer instanceof Person);    // true
console.log(developer instanceof Object);    // true
```

Prototype chain:

```text
developer
   ↓
Developer.prototype
   ↓
Person.prototype
   ↓
Object.prototype
```

---

# 15. Inheritance

Inheritance allows one class to reuse behavior from another class.

```js
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

}

class Developer extends Person {
}
```

Now:

```js
const developer = new Developer("Shivani");

developer.greet();
```

Output:

```text
Hello Shivani
```

`Developer` inherited `greet()` from `Person`.

---

# 16. `extends`

The `extends` keyword establishes inheritance.

```js
class Developer extends Person {
}
```

Mental model:

```text
Person
   ↑
   │ inherits from
   │
Developer
```

A child class can:

* Use parent properties
* Use parent methods
* Add new properties
* Add new methods
* Override parent methods

---

# 17. `super()`

`super()` calls the parent class constructor.

```js
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

class Developer extends Person {

    constructor(name, age, language) {

        super(name, age);

        this.language = language;
    }

}
```

Create an instance:

```js
const developer = new Developer(
    "Shivani",
    32,
    "Angular"
);
```

Result:

```text
developer
├── name     → Shivani
├── age      → 32
└── language → Angular
```

The parent constructor initializes:

```js
this.name
this.age
```

The child initializes:

```js
this.language
```

---

# 18. Important `super()` Rule

In a derived class constructor, `super()` must be called before using `this`.

❌ Incorrect:

```js
class Developer extends Person {

    constructor(name) {

        this.name = name;

        super(name);
    }

}
```

✅ Correct:

```js
class Developer extends Person {

    constructor(name) {

        super(name);

        this.name = name;
    }

}
```

---

# 19. Method Overriding

Method overriding occurs when a child class provides its own implementation of a method inherited from the parent.

```js
class Animal {

    makeSound() {
        console.log("Animal makes a sound");
    }

}

class Dog extends Animal {

    makeSound() {
        console.log("Woof!");
    }

}
```

Now:

```js
const animal = new Animal();
const dog = new Dog();

animal.makeSound();
dog.makeSound();
```

Output:

```text
Animal makes a sound
Woof!
```

The `Dog` implementation overrides the inherited `Animal` implementation.

---

# 20. How Method Overriding Works

Prototype chain:

```text
dog
 ↓
Dog.prototype
 └── makeSound()
 ↓
Animal.prototype
 └── makeSound()
 ↓
Object.prototype
```

When:

```js
dog.makeSound();
```

JavaScript searches:

```text
dog
 ↓
Dog.prototype
 ↓
makeSound() found
 ↓
execute Dog's version
```

It does not need to continue searching for the parent's version.

---

# 21. `super.method()`

A child class can call the parent's method using `super.method()`.

```js
class Animal {

    makeSound() {
        console.log("Animal makes a sound");
    }

}

class Dog extends Animal {

    makeSound() {

        super.makeSound();

        console.log("Woof!");
    }

}
```

Output:

```text
Animal makes a sound
Woof!
```

### Difference

Without `super`:

```js
makeSound() {
    console.log("Woof!");
}
```

Parent behavior is replaced.

With `super`:

```js
makeSound() {
    super.makeSound();
    console.log("Woof!");
}
```

Parent behavior is reused and additional behavior is added.

---

# 22. `super()` vs `super.method()`

### `super()`

Calls the parent constructor.

```js
super(name);
```

### `super.method()`

Calls the parent's method.

```js
super.greet();
```

Remember:

```text
super()
    ↓
parent constructor

super.greet()
    ↓
parent greet()

super.makeSound()
    ↓
parent makeSound()
```

---

# 23. Static Methods

A static method belongs to the class itself rather than its instances.

```js
class Employee {

    static getCompany() {
        return "Google";
    }

}
```

Call it using the class:

```js
console.log(Employee.getCompany());
```

Output:

```text
Google
```

You do not need:

```js
new Employee()
```

to call a static method.

---

# 24. Static Properties

A property can also be static.

```js
class Employee {

    static company = "Google";

}
```

Access it through the class:

```js
console.log(Employee.company);
```

Output:

```text
Google
```

It is not an instance property.

---

# 25. Instance vs Static Methods

| Feature           | Instance Method      | Static Method           |
| ----------------- | -------------------- | ----------------------- |
| Belongs to        | Instance             | Class                   |
| Keyword           | None                 | `static`                |
| Called using      | `employee.method()`  | `Employee.method()`     |
| Requires instance | Yes                  | No                      |
| Example           | `employee.getName()` | `Employee.getCompany()` |

### Mental Model

```text
Instance method:

Employee
   ↓ new
employee
   ↓
getName()


Static method:

Employee
   ↓
getCompany()
```

---

# 26. Real JavaScript Examples

JavaScript's built-in APIs use static methods.

### Array.isArray()

```js
Array.isArray([1, 2, 3]);
```

The method is accessed through `Array`.

---

### Object.keys()

```js
const user = {
    name: "Shivani",
    age: 32
};

Object.keys(user);
```

The method is accessed through `Object`.

---

### Math.max()

```js
Math.max(10, 20, 30);
```

These demonstrate the idea of functionality being associated with the constructor/object rather than an individual instance.

---

# 27. Class vs Object

### Class

A blueprint:

```js
class Car {

    constructor(brand) {
        this.brand = brand;
    }

}
```

### Object / Instance

An actual object created from the class:

```js
const car = new Car("Toyota");
```

Mental model:

```text
Class
 ↓
Blueprint

Instance
 ↓
Actual object
```

---

# 28. Class vs Prototype

### Class

Provides convenient syntax for defining:

* Constructors
* Methods
* Inheritance
* Static members

Example:

```js
class Person {
    greet() {}
}
```

### Prototype

The underlying mechanism JavaScript uses for:

* Property lookup
* Shared methods
* Inheritance

Example:

```js
Person.prototype
```

### Important Interview Point

> JavaScript has a prototype-based object model. The `class` syntax provides a cleaner way to work with that model.

Classes do not eliminate prototypes.

---

# 29. Objects Without Classes

JavaScript can create objects without using classes.

```js
const personMethods = {

    greet() {
        console.log(`Hello ${this.name}`);
    }

};
```

Then:

```js
const person = Object.create(personMethods);

person.name = "Shivani";

person.greet();
```

Prototype relationship:

```text
person
  ↓
personMethods
```

This demonstrates that prototypes are fundamental to JavaScript.

---

# 30. Real-Life Programming Example — E-commerce

A product can be represented using a class:

```js
class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    applyDiscount(percent) {
        return this.price - (this.price * percent / 100);
    }

}
```

Create products:

```js
const laptop = new Product("Laptop", 60000);
const phone = new Product("Phone", 30000);
```

Both objects can use:

```js
laptop.getPrice();
phone.getPrice();
```

The class provides reusable behavior.

---

# 31. Real-Life Programming Example — User Roles

```js
class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in`);
    }

}

class Admin extends User {

    deleteUser() {
        console.log("User deleted");
    }

}
```

Now:

```js
const admin = new Admin(
    "Shivani",
    "shivani@example.com"
);

admin.login();
admin.deleteUser();
```

`Admin` gets:

```text
User behavior
+
Admin-specific behavior
```

---

# 32. Real-Life Programming Example — Payment Systems

```js
class Payment {

    process() {
        console.log("Processing payment");
    }

}

class CreditCardPayment extends Payment {

    process() {
        console.log("Processing credit card payment");
    }

}

class UpiPayment extends Payment {

    process() {
        console.log("Processing UPI payment");
    }

}
```

Usage:

```js
const cardPayment = new CreditCardPayment();
const upiPayment = new UpiPayment();

cardPayment.process();
upiPayment.process();
```

Output:

```text
Processing credit card payment
Processing UPI payment
```

This demonstrates:

* Inheritance
* Method overriding
* Polymorphic behavior

---

# 33. Real-Life Angular Connection

Classes are heavily used in TypeScript and Angular.

### Angular Component

```ts
@Component({
    selector: 'app-user'
})
export class UserComponent {

    name = 'Shivani';

    greet() {
        console.log(this.name);
    }

}
```

The component class contains:

* Properties
* Methods
* Application behavior

---

### Angular Service

```ts
@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUsers() {
        // API call
    }

}
```

This is also a TypeScript class.

Understanding JavaScript classes makes TypeScript and Angular much easier to understand.

---

# 34. Classes & Angular Mental Model

```text
JavaScript Classes
        ↓
TypeScript Classes
        ↓
Angular Components
        ↓
Angular Services
        ↓
Dependency Injection
        ↓
Real Angular Applications
```

---

# 🧪 Hands-on Exercises Completed

## Exercise 1 — Person Class

Created a `Person` class with:

* `name`
* `age`
* `greet()`

```js
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello: ${this.name}, age: ${this.age}`);
    }

}
```

---

## Exercise 2 — Calculator

Created a `Calculator` class with:

* `add()`
* `subtract()`
* `multiply()`
* `divide()`

```js
class Calculator {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        console.log(this.a + this.b);
    }

    subtract() {
        console.log(this.a - this.b);
    }

    multiply() {
        console.log(this.a * this.b);
    }

    divide() {
        console.log(this.a / this.b);
    }

}
```

---

## Exercise 3 — Employee

Created an `Employee` class with:

* `name`
* `salary`
* `department`
* `getDetails()`

---

## Exercise 4 — `this`

Learned that `this` refers to the relevant instance when an instance method is called normally.

---

## Exercise 5 — Inheritance

Learned:

```js
extends
super()
```

and how a child class can inherit properties and behavior from a parent class.

---

## Exercise 6 — Method Overriding

```js
class Animal {

    makeSound() {
        console.log("Animal makes a sound");
    }

}

class Dog extends Animal {

    makeSound() {
        console.log("Woof!");
    }

}
```

The child class provides its own implementation of the inherited method.

---

## Exercise 7 — Calling Parent Method

Learned:

```js
super.greet();
```

can be used to call the parent's implementation from an overridden child method.

---

## Exercise 8 — Static Methods

Learned that static methods belong to the class rather than its instances.

Example:

```js
class Employee {

    static getCompany() {
        return "Google";
    }

}

Employee.getCompany();
```

---

# 🧠 Interview Questions

### 1. What is a class?

A class is a blueprint for creating objects and defining their properties and behavior.

### 2. What is an instance?

An instance is an object created from a class using `new`.

### 3. What does `new` do?

It creates a new object, establishes the prototype connection, invokes the constructor, and returns the resulting instance.

### 4. What is a constructor?

A special method that runs automatically when an instance is created and is commonly used to initialize properties.

### 5. What does `this` refer to?

In a normal instance method call, `this` refers to the object through which the method was called.

### 6. What is a prototype?

A prototype is an object that JavaScript uses for inherited property and method lookup.

### 7. What is the prototype chain?

It is the chain of objects JavaScript searches when a property or method isn't found on the current object.

### 8. What is `extends`?

`extends` establishes inheritance between a child class and a parent class.

### 9. What is `super()`?

`super()` calls the parent constructor from a derived class constructor.

### 10. What is method overriding?

When a child class provides its own implementation of a method inherited from its parent.

### 11. What is `super.method()`?

It calls the parent class's implementation of a method.

### 12. What is a static method?

A method that belongs to the class itself rather than its instances.

### 13. Can an instance directly access a static method?

No. A static method is accessed through the class.

### 14. Where do class methods live?

Instance methods defined in a class are associated with the class's prototype.

### 15. What is `instanceof`?

It checks whether a constructor's prototype exists in an object's prototype chain.

### 16. What does `Object.getPrototypeOf()` do?

It returns the prototype of an object.

### 17. Is JavaScript class-based or prototype-based?

JavaScript has a prototype-based object model. `class` provides syntax for working with that model.

### 18. Can JavaScript inheritance be implemented without classes?

Yes. JavaScript supports prototype-based inheritance directly using mechanisms such as `Object.create()`.

---

# ⭐ Day 12 Key Takeaways

```text
class
    ↓
Blueprint for objects

new
    ↓
Creates an instance

constructor()
    ↓
Initializes the instance

this
    ↓
Refers to the relevant object in a normal method call

prototype
    ↓
Provides shared behavior and inheritance lookup

prototype chain
    ↓
Object → prototype → parent prototype → Object.prototype → null

extends
    ↓
Inheritance

super()
    ↓
Parent constructor

super.method()
    ↓
Parent method

static
    ↓
Belongs to the class rather than instances

instanceof
    ↓
Checks the prototype chain
```

---

# 🔥 Most Important Concept

The most important mental model from Day 12 is:

```text
JavaScript
    ↓
Prototype-based object model
    ↓
Classes provide convenient syntax
    ↓
Class creates instances
    ↓
Instances access shared methods through prototypes
    ↓
Inheritance works through the prototype chain
```

---

## 📌 Revision Checklist

Before moving to the next topic, I should be able to explain without looking at notes:

* [ ] What is a class?
* [ ] What is an instance?
* [ ] What does `new` do?
* [ ] What is a constructor?
* [ ] What does `this` mean?
* [ ] What is an instance method?
* [ ] What is a prototype?
* [ ] What is a prototype chain?
* [ ] What is `Object.prototype`?
* [ ] What does `extends` do?
* [ ] What does `super()` do?
* [ ] Why must `super()` come before `this`?
* [ ] What is method overriding?
* [ ] What does `super.method()` do?
* [ ] What is a static method?
* [ ] Difference between static and instance methods
* [ ] What does `instanceof` do?
* [ ] What does `Object.getPrototypeOf()` do?
* [ ] How are classes related to prototypes?
* [ ] Can inheritance work without classes?
* [ ] Where are classes used in Angular?

---

## 🚀 Next Step

The next stage after mastering JavaScript classes and prototypes is to connect these concepts to **TypeScript classes**, where we add:

* Type annotations
* Access modifiers (`public`, `private`, `protected`)
* `readonly`
* Interfaces
* Abstract classes
* Generics
* Type aliases
* Optional properties
* Union/intersection types

These concepts will form the bridge between your **JavaScript fundamentals → TypeScript → Angular**.
