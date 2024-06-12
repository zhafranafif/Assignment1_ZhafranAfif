function myFunction(a,b){
    let Obj = {}
    for(const [key, value] of Object.entries(a)){
        Obj[key] = value * b
    }
    console.log(Obj)
}
myFunction({a:1,b:2,c:3},3)
myFunction({j:9,i:2,x:3,z:4},10)
myFunction({w:15,x:22,y:13},6)