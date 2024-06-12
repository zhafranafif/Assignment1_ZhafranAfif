function myFunction(obj){
    if(obj.a && obj.a.b){
        return obj.a.b
    } else {
        return undefined
    }
}
console.log(myFunction({a:1}))
console.log(myFunction({a:{b:{c:3}}}))
console.log(myFunction({b:{a:1}}))
console.log(myFunction({a:{b:2}}))