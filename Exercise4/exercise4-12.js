function inBox(arr){
for(let i = 0; i < arr.length; i++){
    if(arr[i].match(/[*]/g)){
        return true
    }
}
}
console.log(inBox(["###","#*#","###"])) // Expected true
console.log(inBox(["*####","# #","#  #*","####"]))// Expected false
//  console.log(inBox([
//     "###",
//     "#*#",
//     "###"
//   ])) // Expected true
  
//  console.log(inBox([
//     "####",
//     "#* #",
//     "#  #",
//     "####"
//   ])) // Expected true
  
//  console.log(inBox([
//     "*####",
//     "# #",
//     "#  #*",
//     "####"
//   ])) // Expected false
  
//  console.log(inBox([
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
//   ])) // Expected false
  
//  console.log(inBox([
//   "###", 
//   "# #", 
//   "###"
//   ])) // Expected false
  
//  console.log(inBox([
//   "####", 
//   "#  #", 
//   "#  #", 
//   "####"
//   ])) // Expected false
  
//  console.log(inBox([
//   "#####", 
//   "#   #", 
//   "#   #", 
//   "#   #", 
//   "#####"
//   ])) // Expected false
  
//  console.log(inBox([
//   "###", 
//   "#*#", 
//   "###"
//   ])) // Expected true
  
//  console.log(inBox([
//   "####", 
//   "# *#", 
//   "#  #", 
//   "####"
//   ])) // Expected true
  
//  console.log(inBox([
//   "#####", 
//   "#  *#", 
//   "#   #", 
//   "#   #", 
//   "#####"
//   ])) // Expected true
  
//  console.log(inBox([
//   "#####", 
//   "#   #", 
//   "# * #", 
//   "#   #", 
//   "#####"
//   ])) // Expected true
  
//  console.log(inBox([
//   "#####", 
//   "#   #", 
//   "#   #", 
//   "# * #", 
//   "#####"
//   ])) // Expected true
  
//  console.log(inBox([
//   "#####", 
//   "#*  #", 
//   "#   #", 
//   "#   #", 
//   "#####"
//   ])) // Expected true