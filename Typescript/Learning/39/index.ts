const employees: string[] = ["a", "b", "c", "d"]

const [employee1, employee2, ...otherEmployees] = employees

console.log(employee1)
console.log(employee2)
console.log(otherEmployees)
console.log(employees)

const person = {
    firstName: "Jan",
    age: 18,
    adult: true
}

const {firstName, age} = person
console.log(firstName)
console.log(age)