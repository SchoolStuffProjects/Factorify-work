var Department = /** @class */ (function () {
    function Department(name, number) {
        this.name = name;
        this.number = number;
        this.employee = [];
    }
    Department.prototype.describe = function () {
        console.log("Odd\u011Blen\u00ED ".concat(this.name, " m\u00E1 \u010D\u00EDslo ").concat(this.number));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employee.push(employee);
    };
    Department.prototype.listEmployees = function () {
        console.log(this.employee);
    };
    Department.prototype.printAllEmployee = function () {
        this.employee.forEach(function (oneEmployee) {
            console.log(oneEmployee);
        });
    };
    return Department;
}());
var HR = new Department("Human resources", 1);
var MA = new Department("Marketing", 2);
var FI = new Department("Finance", 3);
HR.addEmployee("Jan Kalisz");
HR.addEmployee("J Kalisz");
HR.addEmployee("Ja Kalisz");
HR.addEmployee("Jana Kalisz");
HR.listEmployees();
HR.printAllEmployee();
