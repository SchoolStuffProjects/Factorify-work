interface Name{
    name: string
    age?: number
}

interface IAmGreeting extends Name{
    greet(phrase: string): void
}

class Person implements IAmGreeting{
    name:string
    age?: number

    constructor(name:string,age?:number){
        this.name = name
        if(age){
            this.age = age
        }
    }

    greet(myPhrase: string): void {
        console.log(`${myPhrase} ${this.name}`)
    }
}

let person2 = new Person("Jan")
console.log(person2)
person2.greet("Ahoj já jsem")