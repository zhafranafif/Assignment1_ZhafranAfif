function myFunction(a, b){
    return {
        [a]: b
    }
}
console.log(myFunction('a','b'))
console.log(myFunction('z','x'))
console.log(myFunction('b', 'w'))