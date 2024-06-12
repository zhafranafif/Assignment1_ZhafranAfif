function myFunction(a,b){
    if(a[b]){
        return true
    } else if(a[b] === undefined || a[b] === null){
        return false
    }
}

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:null,z:'c'},'y'))
console.log(myFunction({x:'a',b:'b',z:undefined},'z'))
