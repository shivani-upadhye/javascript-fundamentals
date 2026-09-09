//Global Scope
let name = "shivani" // here this is a global scope variable

function greet(){
    console.log(name)
}

greet()
// ------------------------------------------------------------------------------------------//

//Function Scope

function calculateAge() {
    let age = 32;
    var bar = 40
}
// console.log(bar) This gives reference error as var is function scoped
// console.log(age) This gives reference error as let is block scoped

//---------------------------------------------------------------------------------------------------//

//Block Scope
if(true){
    var a = 10
    let b = 20
    const c = 30
}
console.log(a) // 10 as var is not block scoped
// console.log(b) // referenceError as let is block scoped
// console.log(c) // referenceError as const is block scoped


function test() {
    var c = 30
    if (true) {
        var a1 = 10;
        let b = 20;
    }

    console.log("inner a" + a); // 10
    // console.log(b); // reference error as b is block scoped
}
test();
// console.log("outer a1" + a1) // reference error as a1 is function scoped

//-----------------------------------------------------------------------------------------------//
let d = 10;

function outer() {
    let e = 20;

    function inner() {
        let f = 30;
        console.log(d)
        console.log(e)
        console.log(f)


    }

    // console.log(f) referenceError as f is block scoped and is declared inside inner

    inner();
}

// console.log(e) reference error as e is inside outer scope and not declared globally

outer();

//-----------------------------------------------------------------------------------------------------------------//

let score = 50;

if (true) {
    // var score = 100; error as score has been already declared as let above so cannot be redeclared again

    console.log(score);
}

console.log(score);

//--------------------------------------------------------------------------------------------------------------//


let a = 1;

function test() {
    let b = 2;

    if (true) {
        let c = 3;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);
    // console.log(c); reference error
}

test();

//---------------------------------------------------------------------------------------//

let cartTotal = 0;

function addItem(price) {
    // your code
    cartTotal += price
}

addItem(500);
addItem(200);
addItem(300);

console.log(cartTotal)

let username = "shivani";
function login() {
    let password = "12345";

    console.log(username)
    console.log(password)
}

// console.log(password) reference error

login();


//------------------------------------------------------------------------------------------------//

let value = "global";

function outer() {
    let value = "outer";

    if (true) {
        let value = "block";
        console.log(value);
    }

    console.log(value);
}

outer();

console.log(value);

