function myFunction(a,b){
    let result = {}
    a.forEach((key,value) => result[key] = b[value])
    return result
}
console.log((myFunction(['a','b','c'],[1,2,3])))
console.log(myFunction(['w','x','y','z'],[10,9,5,2]))
console.log(myFunction([1,'b'],['a',2]))