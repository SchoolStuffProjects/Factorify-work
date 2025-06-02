var sum;
sum = function (n1, n2) {
    return n1 + n2;
};
var result = sum(5, 15);
console.log(result);
/*let person1: IAmGreeting
person1 = {
    name: "Jan",
    age: 18,

    greet(myPhrase: string){
        console.log(`${myPhrase} ${this.name}`)
    }
}

person1.greet("Ahoj já jsem")*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (myPhrase) {
        console.log("".concat(myPhrase, " ").concat(this.name));
    };
    return Person;
}());
var person2 = new Person("Jan");
console.log(person2);
person2.greet("Ahoj já jsem");
