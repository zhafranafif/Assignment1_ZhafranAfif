function myFunction(a, b){
    let occur = 0
    for(let i = 0; i < b.length; i++){
        if(b[i] == a){
            occur += 1
        }
    }
    return occur
}
console.log(myFunction('m', 'how many times does the character occur in this sentence?'))
console.log(myFunction('h', 'how many times does the character occur in this sentence?'))
console.log(myFunction('?', 'how many times does the character occur in this sentence?'))
console.log(myFunction('z', 'how many times does the character occur in this sentence?'))
