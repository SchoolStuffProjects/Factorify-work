var y = function (num) { return console.log(num); };
/*function y(num:number) {
    console.log(num)
}*/
y(15);
function sum(n1, n2, callbackFunc) {
    var result = n1 + n2;
    callbackFunc(result);
}
sum(50, 30, y);
