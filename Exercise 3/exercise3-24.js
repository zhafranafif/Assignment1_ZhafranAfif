function myFunction(a, n){
    return a.splice(a.length - n, n)
}
console.log(myFunction([1,2,3,4,5], 2))
console.log(myFunction([1,2,3], 6))
console.log(myFunction([1,2,3,4,5,6,7,8], 3))