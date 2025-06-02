/*function sum(n1:number,n2:number):string{
   const result = (n1+n2).toString();
   return result;
}

const result = sum(10,20)
console.log(result);*/
function sum(n1, n2) {
    return n1 + n2;
}
function sumToString(n1, n2) {
    return (n1 + n2).toString();
}
function writeResult(num) {
    console.log("Result: " + num);
    console.log("Result: ".concat(num));
}
