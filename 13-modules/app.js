import * as math from "./math.js"
import { appName } from "./config.js"
import { version } from "./config.js"
import { Student } from "./student.js"
import getTotal  from "./calculator.js"
import { calculateTax as tax } from "./tax.js"


const a = 40
const b = 20

console.log(math.add(a,b))
console.log(math.subtract(a,b))
console.log(math.multiply(a,b))
console.log(math.divide(a,b))

function display(){
    console.log("appName :" + appName)
    console.log("version :" + version)
}

display()

const stu = new Student("Shivani",32)
stu.introduce()

const total = getTotal(500,3)
console.log(total)

console.log(tax(1000));