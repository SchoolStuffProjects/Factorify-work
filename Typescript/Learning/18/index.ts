type Combination = string | number
type resultType = "as-number" | "as-text"

function combination(input1: Combination,input2: Combination, resultType: resultType){
  let result: Combination;
  if(typeof(input1) === "number" && typeof(input2) === "number" || resultType === "as-number"){
    result = +input1 + +input2
    return result
  } else {
    result = input1.toString() + input2.toString()
    return result
  }

  if(resultType === "as-number"){
    result = +result;
  } else {
    result = result.toString();
  }
}

console.log(combination(5,6, "as-number"));

console.log(combination("Jan","Kalisz", "as-text"));

console.log(combination("10","1", "as-number"));

console.log(combination("10",3,"as-number"))