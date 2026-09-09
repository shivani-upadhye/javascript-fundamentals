console.log(name) // gives undefined as declaration of name is processed first
// console.log(age) //reference error as let is not declared yet so age is in TDZ hence gives referenceError
// console.log(gender) // same goes for const
var name = "shivani"
let age = 32
const gender = "F"

// var
// → hoisted
// → initialized as undefined
// → can be accessed before declaration

// let
// → hoisted
// → TDZ
// → cannot be accessed before declaration

// const
// → hoisted
// → TDZ
// → cannot be accessed before declaration