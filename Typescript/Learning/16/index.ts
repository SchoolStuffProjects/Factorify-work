function combination(input1:string | number,input2: string | number){
  let result: string | number;
  if(typeof(input1) === "number" && typeof(input2) === "number"){
    result = input1 + input2
    return result
  } else {
    result = input1.toString() + input2.toString()
    return result
  }
}

console.log(combination(5,6));

console.log(combination("Jan","Kalisz"));