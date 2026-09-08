// A function that accepts or returns another function is known as higher order function
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));