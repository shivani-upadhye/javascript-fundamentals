export class User{
    constructor(name,balance){
        this.name = name
        this.balance = balance
    }

    showBalance(){
        console.log(`Balance for ${this.name} is ${this.balance}`)
    }
}