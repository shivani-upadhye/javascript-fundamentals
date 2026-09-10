const person = {
    name: "Shivani",

    greet() {
        console.log(this.name);
    }
};

// person.greet();
const greetFunction = person.greet;

greetFunction();