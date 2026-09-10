const user = {
    name  : "shivani",
    age : 32,
    job:"developer",
    address : {
        city : "pune"
    }
}

const copy = {
    ...user
}

//above the complete object is not newly created as the nested object is still being shared by copy and user
//in order to create a complete copy we use spread for nested object as well

const copy2 = {
    ...user,
    address : {
        ...user.address
    }
}

const {name,...restParams} = user
console.log(restParams)
console.log(user.name)
copy.name = "richa"
console.log(copy.name)
console.log(user.name === copy.name)

const updatedUser = {
    ...user,
    age: 33
};

const result = {
    age : 34,
    ...user
}

console.log(result.age) // 34 first the age is 34 then user is copied using spread so it overrides and changes to 32



console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.course?.timeline)