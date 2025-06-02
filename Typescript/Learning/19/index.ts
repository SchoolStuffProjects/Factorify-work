/*function sum(n1:number,n2:number):string{
   const result = (n1+n2).toString();
   return result;
}

const result = sum(10,20)
console.log(result);*/

function sum(n1:number,n2:number):number{
     return n1+n2
}

function sumToString(n1:number,n2:number):string{
     return (n1+n2).toString();
}

function writeResult(num: number):void{
  console.log("Result: " + num)
  console.log(`Result: ${num}`)
}