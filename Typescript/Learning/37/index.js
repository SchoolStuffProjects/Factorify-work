var hobbies = ["a", "b", "c"];
var activeHobbies = ["d", "e", "f"];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
