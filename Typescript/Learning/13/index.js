var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTOR"] = 1] = "AUTOR";
    Role[Role["READONLY"] = 2] = "READONLY";
})(Role || (Role = {}));
var employee = {
    name: "Jan",
    age: 34,
    role: Role.ADMIN
};
console.log(employee.role);
if (employee.role == 0) {
    console.log("Práva admina");
}
