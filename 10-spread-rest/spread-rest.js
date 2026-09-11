const nums = [1, 2, 3];

const copy = [...nums];

copy.push(4);

console.log(nums); //[1,2,3]
console.log(copy); //[1,2,3,4]
console.log(nums === copy); //false as ... creates a new array rather than pointing to the same
//----------------------------------------------------------------------------------------------------

const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

console.log(result); //[1,2,3,4]
//----------------------------------------------------------------------------------------------------

const user = {
    name: "Shivani",
    age: 32,
};

const updated = {
    ...user,
    age: 33
};

console.log(user); // {name:"Shivani",age:32}
console.log(updated); //{name : "Shivani", age : 33}
//----------------------------------------------------------------------------------------------------

const user2 = {
    name: "Shivani",
    city: "Pune"
};


const updated2 = {
    city: "Mumbai",
    ...user2
};

console.log(updated2.city); //Pune as spread is added later so Mumbai is reverted back to pune
//----------------------------------------------------------------------------------------------------

function test(...values) {
    console.log(values);
}

test(10, 20, 30); //[10,20,30] rest collects the elements together into an array
//----------------------------------------------------------------------------------------------------

function test2(a, ...rest) {
    console.log(a);
    console.log(rest);
}

test2(10, 20, 30, 40); // 10 and then [20,30,40]
//----------------------------------------------------------------------------------------------------

const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first); // 10
console.log(rest); //[20,30,40]
//----------------------------------------------------------------------------------------------------

const userDetails = {
    name: "Shivani",
    age: 32,
    city: "Pune",
    role: "Angular Developer"
};

const { name, ...details } = userDetails;

console.log(name); // shivani
console.log(details); 
// { age: 32,
// city: "Pune",
// role: "Angular Developer"}
//----------------------------------------------------------------------------------------------------

const user1 = {
    name: "Shivani",
    address: {
        city: "Pune"
    }
};

const copy1 = {
    ...user1
};

copy1.address.city = "Mumbai";

console.log(user1.address.city); //Mumbai because spread creates shallow copy so the nested object remains same only the outer is created differently
//but both point the same nested object
//----------------------------------------------------------------------------------------------------

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node", "Express"];

const languages = [...frontend,...backend]
//----------------------------------------------------------------------------------------------------


function sum(...nums){
   return nums.reduce((total,num) => total + num,0)
}

console.log(sum(10, 20, 30));
console.log(sum(10, 20))
console.log(sum(5, 10, 15, 20))
//----------------------------------------------------------------------------------------------------

const userTest = {
    name: "Shivani",
    age: 32,
    city: "Pune",
    role: "Angular Developer"
};

const {role,...info} = userTest

const newUser = info
console.log(newUser)