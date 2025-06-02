/*const employees: any[] = ["David", "Diana", "Harry",4,true];
console.log(employees[1]);

for(const i of employees){
  console.log(i);
}

for(let i = 0; i < employees.length; i++){
  console.log(employees[i])
}

const person = {
  firstName: "Jan",
  hobbies: ["jedna", "dva", "a", 3]
}

console.log(person.hobbies[2])

for(let i = 0; i < person.hobbies.length; i++){
  console.log(person.hobbies)
}
*/
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
