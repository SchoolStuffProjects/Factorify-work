interface AddFunction{
    (a:number, b:number):number
}

let sum: AddFunction
sum=(n1:number,n2:number):number => {
    return n1 + n2
}
const result = sum(5,15)
console.log(result)

interface Name{
    readonly name: string
}

interface IAmGreeting extends Name{
    greet(phrase: string): void
}

/*let person1: IAmGreeting
person1 = {
    name: "Jan",
    age: 18,

    greet(myPhrase: string){
        console.log(`${myPhrase} ${this.name}`)
    }
}

person1.greet("Ahoj já jsem")*/

class Person implements IAmGreeting{
    name:string

    constructor(name:string){
        this.name = name
    }

    greet(myPhrase: string): void {
        console.log(`${myPhrase} ${this.name}`)
    }
}

let person2 = new Person("Jan")
console.log(person2)
person2.greet("Ahoj já jsem")