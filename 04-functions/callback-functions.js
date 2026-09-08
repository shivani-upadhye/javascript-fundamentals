function greet() {
    return "Hello";
}

function execute(fn) {
    return fn();
}
const result = execute(greet);

console.log(result);