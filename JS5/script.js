
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');


function validateEmail(email) {

    if (!email.includes('@')) {
        return 'Email must contain @ symbol';
    }
    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    
    return '';
}

function validatePassword(password) {
    if (password.length < 6) {
        return 'Password must be at least 6 characters long';
    }
    return '';
}


function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add('error');
    input.classList.remove('success');
}


function showSuccess(input, errorElement) {
    errorElement.textContent = '';
    input.classList.remove('error');
    input.classList.add('success');
}


function clearValidation(input, errorElement) {
    errorElement.textContent = '';
    input.classList.remove('error', 'success');
}


emailInput.addEventListener('input', () => {
    const error = validateEmail(emailInput.value);
    if (emailInput.value === '') {
        clearValidation(emailInput, emailError);
    } else if (error) {
        showError(emailInput, emailError, error);
    } else {
        showSuccess(emailInput, emailError);
    }
});

passwordInput.addEventListener('input', () => {
    const error = validatePassword(passwordInput.value);
    if (passwordInput.value === '') {
        clearValidation(passwordInput, passwordError);
    } else if (error) {
        showError(passwordInput, passwordError, error);
    } else {
        showSuccess(passwordInput, passwordError);
    }
});


loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    
    let isValid = true;
    

    if (email === '') {
        showError(emailInput, emailError, 'Email is required');
        isValid = false;
    } else if (emailValidation) {
        showError(emailInput, emailError, emailValidation);
        isValid = false;
    } else {
        showSuccess(emailInput, emailError);
    }
    

    if (password === '') {
        showError(passwordInput, passwordError, 'Password is required');
        isValid = false;
    } else if (passwordValidation) {
        showError(passwordInput, passwordError, passwordValidation);
        isValid = false;
    } else {
        showSuccess(passwordInput, passwordError);
    }
    

    if (isValid) {

        loginForm.style.display = 'none';
        successMessage.style.display = 'block';
        

        setTimeout(() => {
            loginForm.reset();
            clearValidation(emailInput, emailError);
            clearValidation(passwordInput, passwordError);
            loginForm.style.display = 'block';
            successMessage.style.display = 'none';
        }, 3000);
    }
});
