function myFunction(a,b){
    const combineArr = a.concat(b)
    const res = [... new Set(combineArr)]
    return res.sort((a,b) => a - b)
}
console.log(myFunction([1,2,3], [3,4,5]))
console.log(myFunction([-10,22,333,42], [-11,5,22,41,42]))