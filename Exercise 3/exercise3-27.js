function myFunction(arr){
    let negativeNum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negativeNum += 1
        }
    }
    return negativeNum
}
console.log(myFunction([1,-2,2,-4]))
console.log(myFunction([0,9,1]))
console.log(myFunction([4,-3,2,1,0]))