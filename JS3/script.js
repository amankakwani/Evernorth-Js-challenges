
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const btnIcon = document.querySelector('.icon');
const btnText = document.querySelector('.text');


function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    

    if (body.classList.contains('dark-mode')) {
        btnIcon.textContent = '☀️';
        btnText.textContent = 'Disable Dark Mode';
    } else {
        btnIcon.textContent = '🌙';
        btnText.textContent = 'Enable Dark Mode';
    }
}


toggleBtn.addEventListener('click', toggleDarkMode);
