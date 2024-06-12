function myFunction(arr){
    return arr.reduce(
        function(a, b){
            return a.length > b.length ? a : b
        }
    )
}
console.log(myFunction(['help', 'me']))
console.log(myFunction(['I', 'need', 'candy']))