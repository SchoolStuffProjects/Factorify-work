var Department = /** @class */ (function () {
    function Department(na, nu) {
        this.name = na;
        this.number = nu;
    }
    return Department;
}());
var HR = new Department("Human resources", 1);
var MA = new Department("Marketing", 2);
var FI = new Department("Finance", 3);
console.log(HR, MA, FI);
console.log(HR.name, MA.name, FI.name);
console.log(HR.number, MA.number, FI.number);
