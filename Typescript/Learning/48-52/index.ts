class Department {
    static currentYear: number = 2025
    constructor(public readonly name: string, private number: number, protected employee: string[] = []){}

    public describe(){
        console.log(`Oddělení ${this.name} má číslo ${this.number} (v roce ${Department.currentYear})`)
    }

    public addEmployee(employee: string){
        this.employee.push(employee)
    }

    public listEmployees(){
        console.log(this.employee)
    }

    public printAllEmployee() {
        this.employee.forEach(oneEmployee => {
            console.log(oneEmployee);
        });
    }

    static createEmployee(name: string){
        return name
    }
}

//const dep1 = new Department("Borgus", 5)
const emp1 = Department.createEmployee("Ron")
console.log(emp1, Department.currentYear)

class ITDepartnment extends Department{
    private mainAdmin: string
    constructor(number: number, public admins: string[]){
        super("IT", number)
        this.admins = admins
        this.mainAdmin = admins[0]
    }

    get leadAdmin(){
        if(this.mainAdmin){
            return this.mainAdmin
        }
        throw new Error("Hlavní admin gone :(")
    }

    set leadAdmin(value: string){
        if(this.mainAdmin){
            this.mainAdmin = value
        } else {
            throw new Error("Už existuje takže ruky pryč!!!")
        }
    }

    addEmployee(name: string) {
        if(name === "Jan" || name === "Jana"){
            return "Nuh uh"
        } else {
            this.employee.push(name)
        }
    }
}

const IT = new ITDepartnment(4, ["Jan", "Jana"])
console.log(IT.leadAdmin)
IT.leadAdmin = "BINGUS"
console.log(IT.leadAdmin)
IT.describe()
IT.addEmployee("Jan")
console.log(IT)

const HR = new Department("Human resources", 1)
const MA = new Department("Marketing", 2)
const FI = new Department("Finance", 3)

HR.addEmployee("Jan Kalisz")
HR.addEmployee("J Kalisz")
HR.addEmployee("Ja Kalisz")
HR.addEmployee("Jana Kalisz")

HR.listEmployees()
HR.printAllEmployee()