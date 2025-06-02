var array = ["a", "b", "c"];
var object = {
    a: 1,
    b: 2,
    c: 3
};
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var key = array_1[_i];
    console.log(object[key]);
}
array.forEach(function (item) { return console.log(object[item]); });
