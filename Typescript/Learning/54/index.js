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
    function Department(na, nu) {
        this.name = na;
        this.number = nu;
    }
    return Department;
}());
/*const marketing = new Department("Marketing", 100)
marketing.describe()*/
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(name, number) {
        return _super.call(this, name, number) || this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("Nový popis");
    };
    ITDepartment.getObject = function () {
        if (this.myObject) {
            return this.myObject;
        }
        else {
            this.myObject = new ITDepartment("IT", 999);
            return this.myObject;
        }
    };
    return ITDepartment;
}(Department));
/*const IT = new ITDepartment("CZIT", 900)
IT.describe()*/
var IT = ITDepartment.getObject();
var IT2 = ITDepartment.getObject();
console.log(IT);
console.log(IT2);
