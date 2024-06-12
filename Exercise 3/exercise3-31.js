function myFunction(arr){
    const sum = arr.reduce((a,b) => a + b)
    return sum / arr.length
}
console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000]))
console.log(myFunction([-50,0,50,200]))