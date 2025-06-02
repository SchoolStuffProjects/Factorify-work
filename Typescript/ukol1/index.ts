const array = ["a","b","c"]
const object = {
  a:1,
  b:2,
  c:3
}
for (const key of array) {
  console.log(object[key]);
}

array.forEach(item => console.log(object[item]));