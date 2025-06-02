const y = (num:number) => console.log(num)
/*function y(num:number) {
    console.log(num)
}*/
y(15)

function sum(n1:number,n2:number,callbackFunc:(n3:number)=>void){
    const result = n1+n2
    callbackFunc(result)
}

sum(50,30,y)