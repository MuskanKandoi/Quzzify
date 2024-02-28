function validateLoginForm() {
    const emailInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password complexity requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        alert('Password must be 8 characters or more and contain at least one uppercase letter, one lowercase letter, one special character, and one number.');
        return;
    }

    // If the form passes all validations, you can proceed with submitting the form or other actions
    submitLoginForm();
}
function validateSignupForm() {
    const emailInput = document.getElementById('signupUsername');
    const passwordInput = document.getElementById('signupPassword');

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password complexity requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        alert('Password must be 8 characters or more and contain at least one uppercase letter, one lowercase letter, one special character, and one number.');
        return;
    }

    // If the form passes all validations, you can proceed with submitting the form or other actions
    submitSignupForm();
}

function toggleForm(formType) {
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');

    if (formType === 'signup') {
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    } else if (formType === 'login') {
        loginSection.style.display = 'block';
        signupSection.style.display = 'none';
    }
}

function submitLoginForm() {
    // Implement your login form submission logic here
    // For now, you can log the login form data to the console
    console.log('Login form submitted');
    // After successful login, you can redirect the user to the home page
    window.location.href = 'homeindex.html';
}

function submitSignupForm() {
    // Implement your signup form submission logic here
    // For now, you can log the signup form data to the console
    console.log('Signup form submitted');
    // After successful signup, you can redirect the user to the home page
    window.location.href = 'homeindex.html';
}
