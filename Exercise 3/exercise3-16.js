function myFunction(a){
    if(Math.floor(a) === a) return true
    return false
}
console.log(myFunction(4))
console.log(myFunction(1.123))
console.log(myFunction(1048))
console.log(myFunction(10.48))