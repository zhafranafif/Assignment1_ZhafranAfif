function myFunction(a){
    return a.splice(a.length - 3, 3)
}
console.log(myFunction([1,2,3,4]))
console.log(myFunction([5,4,3,2,1,0]))
console.log(myFunction([99,1,1]))