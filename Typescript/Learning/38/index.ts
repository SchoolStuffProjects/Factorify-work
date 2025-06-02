const sum = (...myNum: number[]) => {
    return myNum.reduce((result, value)=>{
        return result + value
    })
}

console.log(sum(3,5,30))
console.log(sum(5,5,5,5,5))