function myFunction(a,b){
    if(a == b && a === b) return true
    return false
}
console.log(myFunction(2,3))
console.log(myFunction(3,3))
console.log(myFunction(1, '1'))
console.log(myFunction('10', '10'))