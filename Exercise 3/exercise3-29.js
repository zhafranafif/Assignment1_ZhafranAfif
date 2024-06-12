function myFunction(arr){
    return arr.sort((a,b) => b - a)
}
console.log(myFunction([1,2,3]))
console.log(myFunction([4,2,3,1]))