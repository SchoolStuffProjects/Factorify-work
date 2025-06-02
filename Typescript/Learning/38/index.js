var sum = function () {
    var myNum = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        myNum[_i] = arguments[_i];
    }
    return myNum.reduce(function (result, value) {
        return result + value;
    });
};
console.log(sum(3, 5, 30));
console.log(sum(5, 5, 5, 5, 5));
