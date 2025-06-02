class Department {
    name: string
    number: number

    constructor(na: string, nu: number){
        this.name = na
        this.number = nu
    }
}

const HR = new Department("Human resources", 1)
const MA = new Department("Marketing", 2)
const FI = new Department("Finance", 3)

console.log(HR, MA, FI)
console.log(HR.name, MA.name, FI.name)
console.log(HR.number, MA.number, FI.number)