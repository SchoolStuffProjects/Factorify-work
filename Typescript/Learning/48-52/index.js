var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, number, employee) {
        if (employee === void 0) { employee = []; }
        this.name = name;
        this.number = number;
        this.employee = employee;
    }
    Department.prototype.describe = function () {
        console.log("Odd\u011Blen\u00ED ".concat(this.name, " m\u00E1 \u010D\u00EDslo ").concat(this.number, " (v roce ").concat(Department.currentYear, ")"));
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
    Department.createEmployee = function (name) {
        return name;
    };
    Department.currentYear = 2025;
    return Department;
}());
//const dep1 = new Department("Borgus", 5)
var emp1 = Department.createEmployee("Ron");
console.log(emp1, Department.currentYear);
var ITDepartnment = /** @class */ (function (_super) {
    __extends(ITDepartnment, _super);
    function ITDepartnment(number, admins) {
        var _this = _super.call(this, "IT", number) || this;
        _this.admins = admins;
        _this.admins = admins;
        _this.mainAdmin = admins[0];
        return _this;
    }
    Object.defineProperty(ITDepartnment.prototype, "leadAdmin", {
        get: function () {
            if (this.mainAdmin) {
                return this.mainAdmin;
            }
            throw new Error("Hlavní admin gone :(");
        },
        set: function (value) {
            if (this.mainAdmin) {
                this.mainAdmin = value;
            }
            else {
                throw new Error("Už existuje takže ruky pryč!!!");
            }
        },
        enumerable: false,
        configurable: true
    });
    ITDepartnment.prototype.addEmployee = function (name) {
        if (name === "Jan" || name === "Jana") {
            return "Nuh uh";
        }
        else {
            this.employee.push(name);
        }
    };
    return ITDepartnment;
}(Department));
var IT = new ITDepartnment(4, ["Jan", "Jana"]);
console.log(IT.leadAdmin);
IT.leadAdmin = "BINGUS";
console.log(IT.leadAdmin);
IT.describe();
IT.addEmployee("Jan");
console.log(IT);
var HR = new Department("Human resources", 1);
var MA = new Department("Marketing", 2);
var FI = new Department("Finance", 3);
HR.addEmployee("Jan Kalisz");
HR.addEmployee("J Kalisz");
HR.addEmployee("Ja Kalisz");
HR.addEmployee("Jana Kalisz");
HR.listEmployees();
HR.printAllEmployee();
