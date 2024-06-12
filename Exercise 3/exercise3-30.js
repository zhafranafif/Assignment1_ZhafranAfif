function myFunction(arr){
    return arr.reduce((a,b) => a + b)
}
console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000,1]))
console.log(myFunction([-50,0,50, 200]))