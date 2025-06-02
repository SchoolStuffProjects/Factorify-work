class Department {
    name: string
    number: number

    constructor(na: string, nu: number){
        this.name = na
        this.number = nu
    }

    describe(){
        console.log(`Oddělení ${this.name} má číslo ${this.number}`)
    }
}

const HR = new Department("Human resources", 1)
const MA = new Department("Marketing", 2)
const FI = new Department("Finance", 3)


HR.describe();
MA.describe();
FI.describe();