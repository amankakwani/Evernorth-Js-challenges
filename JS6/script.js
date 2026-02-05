const input = document.getElementById("textbox")
const warning = document.getElementById("warning")
const counter = document.getElementById("counter")

const limit = 100;

input.addEventListener("input" , function(){

    let area = input.value.length;

    counter.textContent = area+ "/" +limit + "characters done";  
    if(area>limit){
        
        warning.textContent = "limit reached";
        warning.classList.add("warning");
    }
    else{
        warning.textContent = " ";
        warning.textContent.remove("warning");
    }
} )
