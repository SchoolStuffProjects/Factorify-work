var Department = /** @class */ (function () {
    function Department(na, nu) {
        this.name = na;
        this.number = nu;
    }
    Department.prototype.describe = function () {
        console.log("Odd\u011Blen\u00ED ".concat(this.name, " m\u00E1 \u010D\u00EDslo ").concat(this.number));
    };
    return Department;
}());
var HR = new Department("Human resources", 1);
var MA = new Department("Marketing", 2);
var FI = new Department("Finance", 3);
HR.describe();
MA.describe();
FI.describe();
