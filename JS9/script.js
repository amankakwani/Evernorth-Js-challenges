
const toggleButton = document.getElementById("toggleButton");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

toggleButton.addEventListener("click", function() {
    section1.classList.toggle("visible");
    section2.classList.toggle("visible");
});
