function myFunction(obj){
    return obj.country
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }))
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }))