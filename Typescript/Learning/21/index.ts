function sum(n1:number,n2:number):number{
  return n1+n2
}

function test(dsc: string):string{
  return dsc
}

let myNumber = 5
let myString = "Jan"

//let myFunction: Function
let myFunction: (x:number, y:number) => number 
myFunction = sum
//myFunction = test

console.log(myFunction(10,50))