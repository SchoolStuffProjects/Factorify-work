abstract class Department {
    name:string
    number:number

    constructor(na:string,nu:number){
        this.name = na
        this.number = nu
    }

    abstract describe(): void
}

/*const marketing = new Department("Marketing", 100)
marketing.describe()*/

class ITDepartment extends Department {
    private static myObject: ITDepartment

    private constructor(name: string,number:number){
        super(name, number)
    }

    describe(){
        console.log("Nový popis")
    }

    static getObject(){
        if(this.myObject){
            return this.myObject
        } else {
            this.myObject = new ITDepartment("IT", 999)
            return this.myObject
        }
    }
}

/*const IT = new ITDepartment("CZIT", 900)
IT.describe()*/

const IT = ITDepartment.getObject()
const IT2 = ITDepartment.getObject()

console.log(IT)
console.log(IT2)