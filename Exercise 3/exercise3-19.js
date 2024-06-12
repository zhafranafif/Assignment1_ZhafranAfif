function myFunction(a){
    const splitted = String(a).split('')
    const result = []
    for(let i = 0; i < splitted.length; i++){
        result.push(Number(splitted[i]))
    }
    return result
}
console.log(myFunction(10))
console.log(myFunction(931))
console.log(myFunction(193278))