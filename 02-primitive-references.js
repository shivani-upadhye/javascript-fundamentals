let a = 10
let b = a
console.log(a) // a is initially 10
console.log(b) // b is assigned value of a hence and b are created separately
let c = 10
console.log(a===c) //True because primitive types are compared by value
b = 4 
console.log(a) // a remains as it is
console.log(b) // b changes to 4
//In case of primitive types separate copies are created so value of
// every variable remains distinct

let user1 = {
    name : "richa"
}                    // variable user1 refers to an object
let user2 = user1    //assigning the same variable to another makes both variables refer/point
//same object. As different copies are not created here instead diff variabls refer to same object
user2.name = "shivani" //variable user2 changes the property value of the object which is also refered
//by user1. 
console.log(user1.name) //shivani - This happens because both variables were pointing same object

user2 = {
    name : "pooja"
}
console.log(user1) // shivani
console.log(user2) // pooja
//Here both variables point diff objects as we have reassigned user2 so the output comes out different

const usr1 = {
    name : "richa"
}
user2.name = "pooja" // This is possible as mutation is allowed even if object is const
// usr1.name = {
//     name : "shivani"
// } This will throw error as mutation is allowed for const object but reassignment is not possible

let person1 = {
    name : "richa"
}
let person2 = person1
//Here no 2 copies are created as the variables refer to same object
console.log(person1 === person2) // True

let person3 = {...person1} //This is a method of creating shallow copy using the spread operator.
// Therefore a new object is created
//even when the content are same.
console.log(person1 === person2) //True
console.log(person2 === person3) //False
console.log(person3 === person1) //False
//This is because objects are compared by reference identity and not content

person3.name = "shivani"
console.log(person1.name)
console.log(person2.name)
console.log(person3.name) //gives updated value as the reference object for person3 is diff here


let number1 = 10
let number2 = number1
number2 = 20
console.log(number1) //10
console.log(number2) //20
//Value of number1 doesnt change as primitive types are immutable. When primitive types are
//assigned to another variable the value is copied so there are 2 different copies of the 
//variables

let per1 = {
    name : "richa"
}
let per2 = per1
console.log(per1) //richa
console.log(per2) //richa
per2.name = "shivani"
let per3 = {...per1}
per3.name = "pooja"
console.log(per1) //shivani
console.log(per2) //shivani
console.log(per3) //pooja
console.log(per1 === per2) //True
console.log(per2 == per3) //False
console.log(per3 == per1) //False

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));