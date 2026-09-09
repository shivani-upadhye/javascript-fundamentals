// function greet(){
//     let name = "shiv"

//     return function(){
//         console.log("Hello " + name)
//     }
// }

// const sayHello = greet()

// sayHello()

// //-----------------------------------------------------------------------//

// function createGreeting(name){
  
//     return function(){
//         console.log("Hello " + name)
//     }
// }


// const greetShivani = createGreeting("Shivani");
// const greetPooja = createGreeting("Pooja");
// greetShivani();
// greetPooja();


// //---------------------------------------------------------------------------------------------

// function createCounter(){

//     let count = 0

//     return function(){
//         count += 1
//         return count
//     }
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1());   
// console.log(counter1());   
// console.log(counter2());   
// console.log(counter1());   
// console.log(counter2());   

// //---------------------------------------------------------------------------//

// function createBankAccount() {
//     let balance = 1000;

    
//     function deposit(amount){
//         balance += amount
//     }

//     function withdraw(amount){
//         balance -= amount
//     }

//      function getBalance(){
//         return balance
//     }

//     return {
//         deposit,
//         withdraw,
//         getBalance
//     }

// }

// const account = createBankAccount()
// account.deposit(500)
// console.log(account.getBalance())
// account.withdraw(200)
// console.log(account.getBalance())

// //-----------------------------------------------------------------------------------//

// function createLoginTracker(){

//     let track = 0

//     function loginAttempt(){
//         track += 1
//     }

//     function getAttempts(){
//         return track
//     }

//     return {
//         loginAttempt,
//         getAttempts
//     }

  
// }

// const tracker = createLoginTracker();

// tracker.loginAttempt();
// tracker.loginAttempt();
// tracker.loginAttempt();

// console.log(tracker.getAttempts()); // 3

//----------------------------------------------------------------------------------//


function createMultiplier(mul){
    console.log(mul)


    return function(number){
        return mul * number
    }
    
}

const multiplyByFive = createMultiplier(5);

console.log(multiplyByFive(10)); // 50
console.log(multiplyByFive(4));  // 20

const multiplyByTwo = createMultiplier(2);
console.log(multiplyByTwo(10)); // 20

//---------------------------------------------------------------------------------------//

function createShoppingList(){
    let items = []

    function add(item){
         items.push(item)
    }

    function getItems(){
        return items
    }

    function remove(item){
        const index = items.indexOf(item);
        items.splice(index, 1);
    }

    return {
        add,
        getItems,
        remove
    }

}

const list = createShoppingList();
list.add("Milk");
list.add("Paneer");
list.add("Rice");
list.remove("Milk");
console.log(list.getItems());

//----------------------------------------------------------------------------


function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

// console.log(counter1()); 
// console.log(counter1()); 

// console.log(counter2()); 

// console.log(counter1()); 

// console.log(counter2()); 


//-------------------------------------------------------------------------//

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}