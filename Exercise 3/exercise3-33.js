function myFunction(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if( arr[i] < arr[i + 1] || arr[i] !== arr[i + 1]){
            return false
        }
    }
    return true
}
console.log(myFunction([true,true,true,true]))
console.log(myFunction(['test','test','test','test']))
console.log(myFunction([1,1,1,2]))
console.log(myFunction(['10',10,10,10]))
