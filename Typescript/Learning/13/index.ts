enum Role {ADMIN, AUTOR, READONLY}

const employee = {
  name: "Jan",
  age: 34,
  role: Role.ADMIN
}

console.log(employee.role)

if(employee.role == 0){
  console.log("Práva admina")
}