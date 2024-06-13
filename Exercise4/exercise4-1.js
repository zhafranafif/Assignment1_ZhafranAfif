function operation(a,b,c){
    if(c == 'divide'){
        if(b == '0'){
            return undefined
        } else {
            return Number(Math.floor(a / b))
        }
    }
    if(c == 'add') return Number(a) + Number(b)
    if(c == 'subtract') return Number(a) - Number(b)
    if(c == 'multiply') return Number(a) * Number(b)
}
console.log(operation("1",  "2",  "add" )) // expected 3
console.log(operation("4",  "5",  "subtract")) // expected -1
console.log(operation("6",  "3",  "divide")) // expected 2
console.log(operation("2",  "7",  "multiply")) // expected 14
console.log(operation("6",  "0",  "divide")) // expected ‘undefined’
