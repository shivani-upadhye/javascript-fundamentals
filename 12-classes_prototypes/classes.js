// class Person {

//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     greet(){
//         console.log("Hello :" + this.name + ",age :" + this.age)
//     }

   
// }

// const person1 = new Person("shivani",32)
// const person2 = new Person("richa",30)
// person1.greet()
// person2.greet()

// class Calculator{

//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }

//     add(){
//         console.log(this.a + this.b)
//     }

//     subtract(){
//         console.log(this.a - this.b)
//     }

//     multiply(){
//         console.log(this.a * this.b)
//     }

//     divide(){
//         console.log(this.a / this.b)
//     }


// }

// const result = new Calculator(50,30)
// result.add()
// result.subtract()
// result.multiply()
// result.divide()

// class Employee{
//     constructor(name,salary,department){
//         this.name = name
//         this.salary = salary
//         this.department = department
//     }

//     getDetails(){
//         console.log(
//             `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
//         )
//     }
// }

// const employee = new Employee("shivani",50000,"IT")
// employee.getDetails()

// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }

// class Developer extends Person{
//     constructor(name, age, language, experience) {
//         super(name, age);
//         this.language = language
//         this.experience = experience
//     }

//     greet(){
//         console.log(
//             `Hi this is ${this.name} age ${this.age}, a developer with ${this.experience} yoe in ${this.language}.`
//         )
//     }

// }

// const dev = new Developer("Shivani",32,"Angular",4)
// dev.greet()

// class Animal{
//     makeSound(){
//         console.log("Animal makes a sound")
//     }
// }

// class Dog extends Animal{
//     makeSound(){
//         console.log("Woof!")
//     }
// }

// const animal = new Animal()
// const dog = new Dog()
// animal.makeSound()
// dog.makeSound()

class Employee{
    static company = "Google";
    static getCompany(){
        console.log(this.company)
    }
}

const emp = new Employee()
Employee.getCompany()