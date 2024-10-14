document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const loginForm = document.getElementById("login-form");

    // Email validation function
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

        // Reset previous styles and error messages
        emailInput.classList.remove("valid", "invalid");
        emailError.style.display = "none";

        // Validate the email
        if (!email) {
            emailError.textContent = "Email is required.";
            emailError.style.display = "block";
            emailInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            emailInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else {
            emailInput.classList.add("valid"); // Apply valid style
            return true;
        }
    }

    // Password validation function
    function validatePassword() {
        const password = passwordInput.value.trim();
        const minLength = 8; // Minimum length
        const maxLength = 20; // Maximum length
        const hasUppercase = /[A-Z]/.test(password); // At least one uppercase letter
        const hasLowercase = /[a-z]/.test(password); // At least one lowercase letter
        const hasDigit = /\d/.test(password); // At least one digit
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character

        // Reset previous styles and error messages
        passwordInput.classList.remove("valid", "invalid");
        passwordError.style.display = "none";

        // Validate the password
        if (!password) {
            passwordError.textContent = "Password is required.";
            passwordError.style.display = "block";
            passwordInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else if (password.length < minLength) {
            passwordError.textContent = `Password must be at least ${minLength} characters long.`;
            passwordError.style.display = "block";
            passwordInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else if (password.length > maxLength) {
            passwordError.textContent = `Password must not exceed ${maxLength} characters.`;
            passwordError.style.display = "block";
            passwordInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else if (!hasUppercase) {
            passwordError.textContent = "Password must contain at least one uppercase letter.";
            passwordError.style.display = "block";
            passwordInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else if (!hasLowercase) {
            passwordError.textContent = "Password must contain at least one lowercase letter.";
            passwordError.style.display = "block";
            passwordInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else if (!hasDigit) {
            passwordError.textContent = "Password must contain at least one digit.";
            passwordError.style.display = "block";
            passwordInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else if (!hasSpecialChar) {
            passwordError.textContent = 'Password must contain at least one special character (e.g., @, #, $, %).';
            passwordError.style.display = "block";
            passwordInput.classList.add("invalid"); // Apply invalid style
            return false;
        } else {
            passwordInput.classList.add("valid"); // Apply valid style
            return true;
        }
    }

    // Real-time validation for email and password
    emailInput.addEventListener("keyup", validateEmail);
    emailInput.addEventListener("change", validateEmail);
    passwordInput.addEventListener("keyup", validatePassword);
    passwordInput.addEventListener("change", validatePassword);

    // Handle form submission
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form submission

        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            alert("Login successful!"); // Proceed with login or further processing
        } else {
            alert("Please correct the errors before submitting.");
        }
    });
});
