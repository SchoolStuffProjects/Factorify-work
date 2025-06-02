const array: string[] = ["David", "Harry", "Ron"]
const tuples: [string, number] = ["David", 10]

const employee: {
  name: string,
  department: [number, string]
} = {
  name: "Jan",
  department: [2, "IT student"]
}

console.log(employee.department[0])
console.log(employee.department[1])

for(let i = 0; i < employee.department.length; i++){
  console.log(employee.department[i])
}