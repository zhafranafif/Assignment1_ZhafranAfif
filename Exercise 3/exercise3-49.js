function myFunction(y){
    let Obj = {}
    for(const [key, value] of Object.entries(y)){
        if(y[key] === 'b'){
            Obj[key] = 'd'
        } else {
            Obj[key] = value
        }
    }
    console.log(Obj)
}
console.log(myFunction({ c: 3, b: 4, e: 5 }))
// console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))