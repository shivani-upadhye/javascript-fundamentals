
export class Transaction{

    constructor(id,title,amount,type,category){
        this.id = id
        this.title = title
        this.amount = amount
        this.type = type
        this.category = category
    }
}

export const transactions = [
    new Transaction(1, "Salary", 50000, "income", "Salary"),

    new Transaction(2, "Groceries", 1500, "expense", "Food"),

    new Transaction(3, "Electricity Bill", 2000, "expense", "Bills"),

    new Transaction(4, "Freelance Work", 8000, "income", "Freelance"),

    new Transaction(5, "Shopping", 3000, "expense", "Shopping"),

    new Transaction(6, "Restaurant", 1200, "expense", "Food")
];


