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
function echoHouse(obj) {
    console.log("Tento d\u016Fm m\u00E1 ".concat(obj.windows, " okna. Po\u010Det dve\u0159\u00ED je ").concat(obj.doors, ". Barva domu je ").concat(obj.color, ". V\u00FD\u0161ka domu je ").concat(obj.height, " metr\u016F."));
}
echoHouse(house);
