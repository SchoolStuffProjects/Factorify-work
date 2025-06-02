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
    constructor(name: string,number:number){
        super(name, number)
    }

    describe(){
        console.log("Nový popis")
    }
}

const IT = new ITDepartment("CZIT", 900)
IT.describe()