// Think of function as a resuable piece of logic.

// Now we have just defined a function and stored instructions in it
//This doesn't get automatically executed
function greet(){
    console.log("Hello")
}

//so here we call the function in order to execute the instructions
greet()

//Mental Model for javascript functions
// Define function
//       ↓
// Store the instructions
//       ↓
// Call function
//       ↓
// Execute instructions

//now we give paratmeter to a function, parameter is like a placeholder 
function greetUser(name){ // here name is a parameter 
    console.log("Hello " + name)
}

//in order to pass the value to the parameter we give an argument to the function
greetUser("John") //here John is actually the argument i.e actual value passed to the function

//similary we can also pass multiple parameters to a function
function add(a,b){
    console.log(a + b)
}

add(2,3)

//Till now we have looked into how to define and execute a function along with passing values to the function in order to carry
//out the instructions. 
//Moving further we see how a function can return a value which can be of any type i.e a value,array,object even another function or
// anything

function multiply(a,b){
    return a * b
}

const output = multiply (2,3)
console.log(output)

//-----------------------------------------------------------------

function add2(a, b) {
    console.log(a + b);
}

const result = add2(10, 20);

console.log(result);

//output
//30
//undefined    

//Here we defined a function with parameters, put instructions into it and then set up a variable to take value of function
//in this way the function got called and printed 30 but it doesnt actually return anything so while printing result it gave 
// undefined

//---------------------------------------------------

/* Mental model

console.log():

"Show this value."

return:

"Give this value back to whoever called me." */


function test() {
    return 10;

    console.log("Hello");
}

const testResult = test()
console.log(testResult)

//Here Hello is not printed because as soon as fuction is called it returns value and exits so the further lines of code
//are not executed after the return statement
