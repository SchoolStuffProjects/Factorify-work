var House = /** @class */ (function () {
    function House(st, nu, fl, sta) {
        this.street = st;
        this.number = nu;
        this.floors = fl;
        this.state = sta;
    }
    House.prototype.describe = function () {
        console.log("Jedn\u00E1 se o ".concat(this.state, " d\u016Fm. Nach\u00E1z\u00ED se v ulici ").concat(this.street, " ").concat(this.number, ". M\u00E1 ").concat(this.floors, " podla\u017E\u00ED."));
    };
    return House;
}());
var ein = new House("ul", 1, 2, "nový");
ein.describe();
