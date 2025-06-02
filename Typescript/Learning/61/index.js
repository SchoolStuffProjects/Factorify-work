var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        if (age) {
            this.age = age;
        }
    }
    Person.prototype.greet = function (myPhrase) {
        console.log("".concat(myPhrase, " ").concat(this.name));
    };
    return Person;
}());
var person2 = new Person("Jan");
console.log(person2);
person2.greet("Ahoj já jsem");
