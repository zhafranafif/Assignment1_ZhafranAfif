function myFunction(a, b){
    return a.filter((num) => num !== b)
}
console.log(myFunction([1,2,3], 2))
console.log(myFunction([1,2,'2'], '2'))
console.log(myFunction([false,'2',1], false))
console.log(myFunction([1,2,'2',1], 1))