const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const phoneField = document.getElementById('phone');
const cityField = document.getElementById('city');
const termsField = document.getElementById('terms');
const successMessage = document.getElementById('successMessage');
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Validate username
    if (usernameField.value.trim() === '') {
        isValid = false;
        showError(usernameField, 'Username is required.');
    }

    // Validate email format
    if (!validateEmail(emailField.value)) {
        isValid = false;
        showError(emailField, 'Invalid email format.');
    }

    // Validate password length
    if (passwordField.value.length < 8) {
        isValid = false;
        showError(passwordField, 'Password must be at least 8 characters long.');
    }

    // Validate password match
    if (passwordField.value !== confirmPasswordField.value) {
        isValid = false;
        showError(confirmPasswordField, 'Passwords do not match.');
    }

    // Validate phone number
    if (phoneField.value.trim() === '') {
        isValid = false;
        showError(phoneField, 'Phone number is required.');
    }

    // Validate city selection
    if (cityField.value === '') {
        isValid = false;
        showError(cityField, 'Please select a city.');
    }

    // Validate terms checkbox
    if (!termsField.checked) {
        isValid = false;
        showError(termsField, 'You must agree to the terms.');
    }

    // Display success message or hide it
    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();  // Reset form fields after successful submission
    } else {
        successMessage.style.display = 'none';
    }
}

// Email validation with regex
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Show error message for a specific field
function showError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerText = message;
    field.parentNode.insertBefore(errorDiv, field.nextSibling);

    // Remove error message on input
    field.addEventListener('input', function () {
        if (field.nextSibling && field.nextSibling.className === 'error') {
            field.nextSibling.remove();
        }
    });
}

passwordField.addEventListener("input", function () {
    var password = this.value;

    // Remove spaces if entered
    if (passwordField.value.includes(" ")) {
        passwordField.value = passwordField.value.replace(/\s/g, '');
    }
    var errorMessage = document.getElementById("error-message");

    if (password.length < 8) {
        errorMessage.style.display = "block";  // Show the error message
    } else {
        errorMessage.style.display = "none";   // Hide the error message
    }
});