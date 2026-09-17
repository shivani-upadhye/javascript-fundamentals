export class Student{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    introduce(){
        console.log(`Hey I'm ${this.name} age  ${this.age}`)
    }
}