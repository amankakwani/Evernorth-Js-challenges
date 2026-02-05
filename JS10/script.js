const box = document.getElementById("colorbox");
const buttons = document.querySelectorAll(".color-btn");

buttons.forEach(button => {
    button.addEventListener("click" , () =>{
        const color = button.getAttribute("data-color");
        box.style.backgroundColor = color;
    });
});