function myFunction(arr) {
    return arr.sort((a,b) => a.a - b.b)
}
console.log(myFunction([{a:1,b:2},{a:5,b:4}]))
console.log(myFunction([{a:2,b:10},{a:5,b:4}]))
console.log(myFunction([{a:1,b:7},{a:2,b:1}]))