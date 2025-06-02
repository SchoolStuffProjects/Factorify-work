function test(myValue) {
    console.log(myValue);
}
function generateError(errorText, errorNumber) {
    throw { message: errorText, errorCode: errorNumber };
}
var result = generateError("Závažná chyba", 688);
console.log(result);
