import { TransactionManager } from "./transaction-manager.js";
import { transactions,Transaction } from "./transaction.js"

const manager = new TransactionManager()

transactions.forEach(transaction => {
    manager.addTransaction(transaction)
})

const transaction = new Transaction(
    7,
    "Groceries",
    2000,
    "expense",
    "Food"
);

manager.addTransaction(transaction)
manager.deleteTransaction(7)

const expense = manager.filterTransaction("expense")

console.log("Original transactions :")
console.log(manager.transactions)

console.log("Filtered based on expense categpry :")
console.log(expense)

console.log(manager.getBalance())

console.log(manager.getCategorySummary())

console.log(manager.findTransaction(3))

console.log(manager.getTransactionCount())

console.log(manager.getLargestTransaction())

console.log(manager.getAverageExpense())






