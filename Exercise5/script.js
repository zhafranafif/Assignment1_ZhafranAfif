const root = document.querySelector(":root")
const button = document.getElementsByClassName("toggle");
const arrButton = [...button];
console.log(root)
arrButton.forEach((element, index) => {
    element.addEventListener("click" , () => {
        element.style.opacity = '1';
        if(index == 0){
            root.style.setProperty("--main-bg-color-1", "hsl(222, 26%, 31%)");
            root.style.setProperty("--bg-toggle-1", "hsl(223, 31%, 20%)");
            root.style.setProperty("--bg-screen-1"," hsl(224, 36%, 15%)");
            root.style.setProperty("--key-bg-db-1", "hsl(225, 21%, 49%)");
            root.style.setProperty("--key-shadow-db-1", "hsl(224, 28%,35%)")
            root.style.setProperty("--key-bg-red-1", "hsl(6, 63%, 50%)")
            root.style.setProperty("--key-shadow-red-1", "hsl(6, 70%, 34%)")
            root.style.setProperty("--key-bg-orange-1", "hsl(30, 25%, 89%)")
            root.style.setProperty("--key-shadow-orange-1", "hsl(28, 16%, 65%)")
            root.style.setProperty("--text-main", "hsl(0, 0%, 100%)")
            root.style.setProperty("--text-num", "hsl(221, 14%, 31%)")
            root.style.setProperty("--text-del-reset", "hsl(0, 0%, 100%)")
            root.style.setProperty("--text-assign", "hsl(0, 0%, 100%)")
        } else if (index == 1){
            root.style.setProperty("--main-bg-color-1", "hsl(0, 0%, 90%)")
            root.style.setProperty("--bg-toggle-1", "hsl(0, 5%, 81%)")
            root.style.setProperty("--bg-screen-1","rgb(211,205,205)")
            root.style.setProperty("--key-bg-db-1", "hsl(185, 42%, 37%)");
            root.style.setProperty("--key-shadow-db-1", "hsl(185, 58%, 25%)")
            root.style.setProperty("--key-bg-red-1", "hsl(25, 98%, 40%)")
            root.style.setProperty("--key-shadow-red-1", " hsl(25, 99%, 27%)")
            root.style.setProperty("--key-bg-orange-1", "hsl(45, 7%, 89%)")
            root.style.setProperty("--key-shadow-orange-1","hsl(35, 11%, 61%)")
            root.style.setProperty("--text-main", "rgb(67,66,61)")
            root.style.setProperty("--text-num", "rgb(67,66,61)")
            root.style.setProperty("--text-del-reset", "hsl(0, 0%, 100%)")
            root.style.setProperty("--text-assign", "hsl(0, 0%, 100%)")
        } else {
            root.style.setProperty("--main-bg-color-1", "hsl(268, 75%, 9%)")
            root.style.setProperty("--bg-toggle-1", "hsl(268, 71%, 12%)")
            root.style.setProperty("--bg-screen-1","hsl(281, 89%, 26%)")
            root.style.setProperty("--key-bg-db-1", "hsl(285, 91%, 52%)");
            root.style.setProperty("--key-shadow-db-1", "hsl(185, 58%, 25%)")
            root.style.setProperty("--key-bg-red-1", "hsl(176, 100%, 44%)")
            root.style.setProperty("--key-shadow-red-1", "hsl(177, 92%, 70%)")
            root.style.setProperty("--key-bg-orange-1", "hsl(268, 47%, 21%)")
            root.style.setProperty("--key-shadow-orange-1","hsl(290, 70%, 36%)")
            root.style.setProperty("--text-main", "hsl(52, 100%, 62%)")
            root.style.setProperty("--text-num", "hsl(52, 100%, 62%)")
            root.style.setProperty("--text-del-reset", "hsl(0, 0%, 100%)")
            root.style.setProperty("--text-assign", " hsl(198, 20%, 13%)")
        }
        arrButton.filter((item) => {
            return item != element
        })
        .forEach((item) => {
            item.style.opacity = "0"
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const textbox = document.querySelector("#textbox");
    const numButton = document.querySelectorAll(".num");
    
    numButton.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        textbox.value += this.value;
      });
    });
  });
document.addEventListener("DOMContentLoaded", function(){
    const textbox = document.querySelector("#textbox");
    const operator = document.querySelectorAll(".operator")
    
    operator.forEach(function(opr) {
        opr.addEventListener("click", function() {
            textbox.value += this.value
        })
    })
})
function resetCalc(){
    const reset = document.getElementById("textbox").value = ''
    return reset
}
function deleteInput(){
    const box = document.getElementById("textbox")
    box.value = box.value.substring(0, box.value.length - 1)
}
function assignNum(){
    const res = document.getElementById("textbox")
    res.value = eval(res.value)
}