
const textInput = document.getElementById('textInput');
const mirrorText = document.getElementById('mirrorText');


function updateMirror() {
    const inputValue = textInput.value;
    
    if (inputValue.trim() === '') {
        mirrorText.textContent = '';
    } else {
        mirrorText.textContent = inputValue;
    }
}


textInput.addEventListener('input', updateMirror);
