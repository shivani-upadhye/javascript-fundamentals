import { User } from "./user.js";
import { add,subtract } from "./calculator.js"
import calculateTotal from "./calculator.js";

const user = new User("Shivani", 5000);

console.log("main balance :")
user.showBalance()

console.log("after addition:")
user.balance = add(user.balance,1000)
user.showBalance()

console.log("after deduction")
user.balance = subtract(user.balance,500)
user.showBalance()

console.log(calculateTotal(user.balance))