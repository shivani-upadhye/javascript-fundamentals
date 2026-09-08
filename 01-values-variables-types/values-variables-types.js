let age = 31
console.log(age) // 31
console.log(typeof age) // number

let value = 100
console.log(value) // 100
console.log(typeof value) // number
value = "hello"
console.log(value) // hello
console.log(typeof value) // string
//value associated with the variable changes

let something
console.log(something) // undefined

let data
data = null
console.log(typeof null) // object
//null is basically a primitive type in js but giving object as a type is actually a historic
//behaviour of js

let x = 10
let y = x
y = 20
console.log(x) // 10
console.log(y) // 20
x = 30
console.log(x) // 30
console.log(y) // 20
//Here x and y are primitive value types so basically they are stored separately, hence if
//value of x is changed y doesnt change and vice versa

let user1 = {
    name : "shivani"
};
let user2 = user1
user2.name = "richa"
console.log(user1.name) // richa
console.log(user2.name) // richa
//Here user1 and user2 are object value types, so when user1 is assigned to user2 js doesnt
//create spearate space to store both of them instead both the variables refer to a single
//object.so whenever value changes i.e the object value changes which is referred by both
//variables.
user2 = {
    name : "shubham"
} 
console.log(user1.name) // richa
console.log(user2.name) // shubham
//Here i dont change the value of the object shared between two users but i reassign the
//user2 so the value of user2 changes and user1 remains same

//Primitive types  : number,string,boolean,etc
//Object types : arrays,objects
//In js primitve values are copied independently, whereas when an object is assigned to
//another variable, both the variables point to the similar object so whenever the value is 
//changed it gets reflected at both the variables
//But reassigning one of the variable creates new object so changing one doesnt reflect 
//another.

//Javascript is pass by value. but in case of objects the value being copied is reference to an
//object so two variables can refer to a same object.

//INTERVIEW QUESTIONS
/* 
1. What is a variable?
A variable is a binding name used to refer to a value is JS program. we can create variables
using let,var,const 

2. What is a value?
A value is a piece of data JS program can work with. values can be primitive type like numbers,
string,boolean,etc or of object type like objects,arrays,etc.

3. What is dynamic typing?
JS is dynamically typed means variables doesnt have a fixed type.The type is associated with the
value and the same variable can hold values of diff types at diff points of execution.

4. What is the difference between copying a primitive and copying an object?
When a primitive type value is copied into another variable js creates 2 different copies of the
variables on the other hand when an object is copied to another variable the value refers to same
object
Primitive                             Object
let a = 10;                    let a = { value: 10 };
let b = a;                     let b = a;
b = 20;                        b.value = 20;
console.log(a); // 10          console.log(a.value); // 20
console.log(b); // 20

5. What does dynamically typed actually mean?
I dynamically typed language like javascript the variable doesnt need to be associated with
its type in prior rather the value itslef holds the type. Therefore a variable can hold values
of diff types at diff points of execution.
let val = 10
val = "shivani"
Here the val doesnt permanently become number but it is number at start then changes into string later

6. What does ECMAScript specify versus what the JavaScript engine implements?
ECMAScript
   ↓
defines JavaScript behavior
   ↓
JavaScript engine
   ↓
implements it
*/


let arr = [1,2,3]
console.log(Array.isArray(arr))
//Array.isArray(value) is used to check whether the variable is of type array because typeof arr
//would return object as array is object type in javascript so it returns object

//const object in javascript is not immutable as we can modify the object but cant ressign it
const usr = {
    name : "shivani"
} 
console.log(usr.name)
usr.name = "richa" // usr is constant but we can modify the object
console.log(usr.name)
// usr = {              // but we cant reassign a constant object
//     name : "shubham"
// }
// console.log(usr.name)


let a = 10;
let b = a;

const obj1 = {
    value: 10
};

const obj2 = obj1;

a = 20;
b = 30;

obj1.value = 20;
obj2.value = 30;

console.log(a); // 20
console.log(b); //30
console.log(obj1.value); //30
console.log(obj2.value); //30

let user = {
    name: "Shivani",
    age: 31
};
user.name = "Richa";
console.log(user.name)
console.log(user)
user = {
    name: "Richa"
};
console.log(user.name)
console.log(user)
user.age = 32;
console.log(user)
user = null
console.log(user)
let anotherUser = user;
console.log(anotherUser)
// anotherUser.name = "Pooja";
anotherUser = {
    name : "Pooja"
}
console.log(anotherUser)
console.log(user)

let age1 = 30;
age1 = 31;

const name = "Shivani";
// name = "Richa"; not possible due to const

console.log(age1);
console.log(name);

let selectedUser;
let loggedOutUser = null;
console.log(typeof selectedUser)
console.log(loggedOutUser === null)

const user4 = {
    name: "Shivani"
};

const user5 = user4;

const user3 = {
    name: "Shivani"
};

console.log(user4 === user5);
console.log(user4 === user3);
console.log(user5 === user3);

const use = {
    name: "Shivani",
    address: {
        city: "Pune"
    }
};

use.name = "Richa";
use.address.city = "Mumbai";

console.log(use);