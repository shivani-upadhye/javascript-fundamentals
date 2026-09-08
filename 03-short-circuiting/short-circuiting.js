// &&
let name = "Richa";
console.log(name && "Heyy");
//Heyy 
//Short-circuiting using && checks if first value is truthy if so then goes to next and prints second
//be it truthy or falsy

let name1 = 0
console.log(name1 && "Heyy")
//0
//Short-circuiting using && checks if first value is falsy if so then prints itself thinking
//theres no point in going to next


// ||
let person = "richa"
console.log(person || "default")
//richa
//In || case if first is truthy then it thinks why need to move further and prints first value
let person2 = ""
console.log(person2 || "default")
//default
//here if first is falsy then moves to 2nd and prints it whether its truthy or false

// left equation || right equation -> Here basically it means that if left works use it 
//if not then only use right.This is widely used in angular
//but if value of left is 0 it takes it as a falsy value so this becomes an issue so here ?? is used

// ??
let age = 0;
let result = age ?? 18;
console.log(result); // 0
age = null
console.log(age ?? 20) // 20
//?? takes null and undefined as falsy

// ?.
let usr = null
// console.log(usr.name) //Throws error so here we use ?. so that it acts has print if available
//if not then print undefined
console.log(usr?.name)

let users = {
    profile: {
        address: {
            city: null
        }
    }
};

console.log(users.profile.address.place)

// ||
// Is left value TRUTHY?
// ↓
// YES → keep it
// NO  → move right

// ??
// Is left value null/undefined?
//         ↓
//    YES → move right
//    NO  → keep it