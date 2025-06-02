function test(myValue: number){
    console.log(myValue)
}

function generateError(errorText:string,errorNumber:number):never{
    throw {message:errorText, errorCode:errorNumber}
}

let result = generateError("Závažná chyba", 688)
console.log(result)