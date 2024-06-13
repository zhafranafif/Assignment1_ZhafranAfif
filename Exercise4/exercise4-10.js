function isSpecialArray(arr){
    const arrEmpty = []
    for(let i = 0; i < arr.length - 1; i++){
       if((arr[i] % 2 === 0 && i % 2 === 0 )|| (arr[i] % 2 !== 0 && i % 2 !== 0)){
        arrEmpty.push(true)
       } else {
        arrEmpty.push(false)
       }
    }
    if(arrEmpty.includes(false)){
        return false
    } else {
        return true
    }
    // return arr.every((item, index) => item % 2 === 0 && index % 2 === 0 || item % 2 !== 0 && index % 2 !== 0)
}
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) // Expected true, Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) // Expected false, Index 2 has an odd number 9.
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) // Expected false, Index 3 has an even number 8.
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) // Expected true
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) // Expected false
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) // Expected false
console.log(isSpecialArray([1, 1, 1, 2])) // Expected false
console.log(isSpecialArray([2, 2, 2, 2])) // Expected false
console.log(isSpecialArray([2, 1, 2, 1])) // Expected true
console.log(isSpecialArray([4, 5, 6, 7])) // Expected true
console.log(isSpecialArray([4, 5, 6, 7, 0, 5])) // Expected true
