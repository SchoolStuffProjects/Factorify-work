class Department {
    private employee: string[] = []

    constructor(private readonly name: string, private number: number){}

    public describe(){
        console.log(`Oddělení ${this.name} má číslo ${this.number}`)
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
}

const HR = new Department("Human resources", 1)
const MA = new Department("Marketing", 2)
const FI = new Department("Finance", 3)

HR.addEmployee("Jan Kalisz")
HR.addEmployee("J Kalisz")
HR.addEmployee("Ja Kalisz")
HR.addEmployee("Jana Kalisz")

HR.listEmployees()
HR.printAllEmployee()