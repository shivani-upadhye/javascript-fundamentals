const arr = [1,2,3]

arr.push(4) // adds to end
arr.unshift(0) // adds to start
arr.pop() // removes from end
arr.shift() // removes from start
console.log(arr)

// array.splice(start, deleteCount, item1, item2, ...)
const numbers = [10, 20, 30, 40];

numbers.splice(1, 2); // start at index 1 and delete 2 elements   - REMOVE

console.log(numbers); // [10, 40]

numbers.splice(1,0,20) // start at index 1,delete nothing and add 20  - ADD

console.log(numbers) // [10,20,40]

numbers.splice(1, 1, 200); // start at index 1 delete 1 and replace by 200  - REPLACE

console.log(numbers) // [10,200,40]

// array.slice(start, end)
const nos = [1,2,3,4,5,6]

const result = nos.slice(1, 4); // start at 1 including 1 end at 2 excluding 2

console.log(result) //[2,3,4]

console.log(numbers.includes(200)) //search if 200 is included
console.log(numbers.indexOf(200)) //returns index of 200

const numberArray = [50,10,30,40,20,60]

for(let i = 0; i < numberArray.length; i++){
    console.log(numberArray[i])
}

for(const number of numberArray){
    console.log(number)
}

numberArray.forEach(number => {
    console.log(number)
})


const mapFinal = numberArray.map(number => number * 2) // map creates a new array by transforming each element
console.log(mapFinal)

const users = [
    { name: "Shivani", age: 32 },
    { name: "Rahul", age: 32 },
    { name: "Amit", age: 25 }
  ];
  
const adults = users.filter(user => user.age >= 30);   // filter creates a new array that matches the condition
console.log(adults)

const findFinal = numberArray.find(number => number > 30) // find gives the first element that matches the condition
console.log(findFinal)

const someFinal = numberArray.some(number => number === 30) // returns true even if one element matches the condition
console.log(someFinal)

const everyFinal = numberArray.every(no => no == 30) // returns true only when all elements satisfy the condition
console.log(everyFinal)

const total = numberArray.reduce(no => no * 2) // reduces the complete array to one output
console.log(total)

const no = [10, 2, 30, 5];

console.log(no.sort()) // sorts considering it as string by default
console.log(no.sort((a,b) => a - b)) // sorts in ascending order
console.log(no.sort((a,b) => b - a)) // sorts in descending order
console.log(no.reverse()) // reverses og array

const copy = [...no]
console.log(copy)
copy.push(80)
console.log(no)
console.log(copy)

const copies = [...no,...numberArray]
console.log(copies)

