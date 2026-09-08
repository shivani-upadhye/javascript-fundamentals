const result = function add(a,b){
    return a + b
}

//A function can be stored in a variable, This is nothing but a function expression
//Therefore in js functions are also first class values, for ex. the above variable result stores a function as value


//Arrow functions
//The above way of writing function expression is a basic way but generally we write it in the form of arraow functio

const addition = (a,b) => {
    return a + b
}

//and more shorter version

const addition2 = (a,b) => a + b

function adds(a, b) {
    console.log(a + b)
    return a + b;
}

console.log(adds(40));