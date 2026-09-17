export class TransactionManager{

    constructor(){
        this.transactions = []
    }

    addTransaction(transaction){
        this.transactions.push(transaction)
    }

    deleteTransaction(id){
        this.transactions = this.transactions.filter(transaction => 
            transaction.id !== id
        )
    }

    filterTransaction(type){
        return this.transactions.filter(transaction => 
            transaction.type === type
        )
    }

    getTotalIncome(){
        const income = this.transactions.filter(transaction => 
            transaction.type === "income"
        )
        const total =  income.reduce((total,transaction) => {
            return total + transaction.amount
        },0)

        return total
    }

    getTotalExpense(){

        const expense = this.transactions.filter(transaction => 
            transaction.type === "expense"
        )
        const total =  expense.reduce((total,transaction) => {
            return total + transaction.amount
        },0)

        return total

    }

    getBalance(){

        const totalIncome = this.getTotalIncome()
        const totalExpense =  this.getTotalExpense()

        return totalIncome - totalExpense

    }

    getCategorySummary(){


       const summ = this.transactions.reduce((summary,transaction) => {

        summary[transaction.category] = (summary[transaction.category] ?? 0) + transaction.amount

        return summary

       },{})

       return summ

    }

    findTransaction(id){

        const trans = this.transactions.find(transaction => 
             transaction.id === id
        )

        return trans

    }

    getTransactionCount(){
        return this.transactions.length
    }

    getLargestTransaction(){

        // return this.transactions.reduce((initial,next) => {
           
        //     return  (initial.amount ?? 0) > next.amount ? initial : next
        // },{})

        return this.transactions.reduce((initial,next) => {
           
            return  initial.amount  > next.amount ? initial : next
        },this.transactions[0])
    }

    getAverageExpense(){
       
        const expense = this.transactions.filter(transaction => 
            transaction.type === "expense"
        )

        return this.getTotalExpense() / expense.length
    }

   
}

