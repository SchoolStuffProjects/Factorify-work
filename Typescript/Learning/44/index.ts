class House {
    street: string 
    number: number
    floors: number
    state: string

    constructor(st:string,nu:number,fl:number,sta:string) {
        this.street = st
        this.number = nu
        this.floors = fl
        this.state = sta
    }

    describe(){
        console.log(`Jedná se o ${this.state} dům. Nachází se v ulici ${this.street} ${this.number}. Má ${this.floors} podlaží.`)
    }
}

const ein = new House("ul", 1, 2, "nový")

ein.describe();