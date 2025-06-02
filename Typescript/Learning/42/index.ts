class House {
    street: string 
    number: number
    floors: number

    constructor(st:string,nu:number,fl:number) {
        this.street = st
        this.number = nu
        this.floors = fl
    }
}

const ein = new House("ul", 1, 2)
const zwei = new House("el", 25, 1)
const drei = new House("al", 2082, 4)