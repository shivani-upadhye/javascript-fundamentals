let student = {
    name : "shivani",
    age : "32",
    course : "CSE",
    isActive : "Y"
}

console.log(student.name)
console.log(student.age)
console.log(student.course)
console.log(student.isActive)

const person = {
    name: "Shivani",
    age: 31
};

person.age = 32
person.city = "Pune"
delete person.age
console.log(person)

const product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};

console.log(product.name)
console.log(product["name"])
console.log(product.price)
console.log(product["price"])
console.log(product.category)
console.log(product["category"])


const key = "email";
const value = "shivani@example.com";

const credentials = {
    [key] : value
}
console.log(credentials)

const user = {
    name: "Shivani",
    greet(){
        console.log("Hello " + this.name)
    }
};

user.greet()

const employee = {
    name: "Shivani",
    role: "Angular Developer",
    experience: 4,
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
};

const {name : employeename,role : jobRole,experience,address : {
    city,
    state,
    country
}} = employee
console.log(employeename)
console.log(jobRole)
console.log(experience)
console.log(city)
console.log(state)
console.log(country)


console.log(employee.address.city)
console.log(employee.address.state)
console.log(employee.address.country)