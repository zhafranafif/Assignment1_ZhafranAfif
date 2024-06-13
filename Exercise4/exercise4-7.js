function missingNum(arr){
    const sortNumber = arr.sort((a,b) => a - b)

    for(let i = 0; i < sortNumber.length; i++){
        if(sortNumber[i] !== i + 1){
            return i + 1
        }
    }
    return sortNumber.length + 1
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])) // Expected 5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])) // Expected 10
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])) // Expected 7
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])) // Expected 5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])) // Expected 10
console.log(missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10])) // Expected 1
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])) // Expected 7
console.log(missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9])) // Expected 3