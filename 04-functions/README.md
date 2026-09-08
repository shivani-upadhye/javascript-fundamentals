Mental Model for javascript functions

Define function
     ↓
Store the instructions
       ↓
Call function
       ↓
Execute instructions


console.log():

"Show this value."

return:

"Give this value back to whoever called me."


# Functions can be passed to other functions
function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(greet);

Here:

greet is passed as an argument
fn receives that function
fn() calls the function

This is the basic idea behind callback functions.

# Callback Function
A callback is a function passed to another function to be called later or when a particular operation occurs.

function processUser(name, callback) {
  console.log(`Processing ${name}`);
  callback();
}

function completed() {
  console.log("Completed");
}

processUser("Richa", completed);

Output:

Processing Richa
Completed