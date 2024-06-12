function myFunction(a, b){
    if(a.includes(b)){
        return b.concat(a)
    }
    return a.concat(b)
}
console.log(myFunction('cheese', 'cake'))
console.log(myFunction('lips', 's'))
console.log(myFunction('Java', 'script'))
console.log(myFunction(' think, therefore I am', 'I'))
