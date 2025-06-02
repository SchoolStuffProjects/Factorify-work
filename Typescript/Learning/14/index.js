var Condition;
(function (Condition) {
    Condition[Condition["HABITABLE"] = 0] = "HABITABLE";
    Condition[Condition["NORMAL"] = 1] = "NORMAL";
    Condition[Condition["UNHABITABLE"] = 2] = "UNHABITABLE";
})(Condition || (Condition = {}));
var house = {
    windows: 4,
    doors: 1,
    color: "#fff",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: ["Build-store", "Damage-do", "Bum-bum-company"],
    clients: ["Daniel Stavitel", "Petr Oknorad", "Dana Parketová"],
    condition: Condition.UNHABITABLE
};
console.log(house.condition);
