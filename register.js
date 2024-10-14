document.addEventListener("DOMContentLoaded", function () {
    // Regular expression for only alphabetic characters (no digits or special characters)
    const nameRegex = /^[a-zA-Z]+$/;

    // Validate First Name
    function validateFirstName() {
        const firstname = document.getElementById("firstname").value.trim();
        const errorElement = document.getElementById("firstname-err");
        
        if (!firstname) {
            errorElement.textContent = "First name is required.";
            errorElement.style.display = "block";
            document.getElementById("firstname").classList.add("invalid");
            return false;
        } else if (!nameRegex.test(firstname)) {
            errorElement.textContent = "First name should contain only alphabetic characters.";
            errorElement.style.display = "block";
            document.getElementById("firstname").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("firstname").classList.remove("invalid");
            return true;
        }
    }

    // Validate Last Name
    function validateLastName() {
        const lastname = document.getElementById("lastname").value.trim();
        const errorElement = document.getElementById("lastname-err");

        if (!lastname) {
            errorElement.textContent = "Last name is required.";
            errorElement.style.display = "block";
            document.getElementById("lastname").classList.add("invalid");
            return false;
        } else if (!nameRegex.test(lastname)) {
            errorElement.textContent = "Last name should contain only alphabetic characters.";
            errorElement.style.display = "block";
            document.getElementById("lastname").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("lastname").classList.remove("invalid");
            return true;
        }
    }

    // Validate Date of Birth
    function validateDob() {
        const dob = document.getElementById("dob").value;
        const errorElement = document.getElementById("dob-err");

        if (!dob) {
            errorElement.textContent = "Date of birth is required.";
            errorElement.style.display = "block";
            document.getElementById("dob").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("dob").classList.remove("invalid");
            return true;
        }
    }

    // Validate Gender
    function validateGender() {
        const gender = document.querySelector("input[name='gender']:checked");
        const errorElement = document.getElementById("gender-err");

        if (!gender) {
            errorElement.textContent = "Gender is required.";
            errorElement.style.display = "block";
            document.querySelectorAll("input[name='gender']").forEach((elem) => {
                elem.classList.add("invalid");
            });
            return false;
        } else {
            errorElement.style.display = "none";
            document.querySelectorAll("input[name='gender']").forEach((elem) => {
                elem.classList.remove("invalid");
            });
            return true;
        }
    }

    // Validate Phone Number
    function validatePhone() {
        const phone = document.getElementById("phone").value.trim();
        const errorElement = document.getElementById("phone-err");
        const phoneRegex = /^\d{10}$/; // Simple regex for 10-digit number

        if (!phone) {
            errorElement.textContent = "Phone number is required.";
            errorElement.style.display = "block";
            document.getElementById("phone").classList.add("invalid");
            return false;
        } else if (!phoneRegex.test(phone)) {
            errorElement.textContent = "Please enter a valid 10-digit phone number.";
            errorElement.style.display = "block";
            document.getElementById("phone").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("phone").classList.remove("invalid");
            return true;
        }
    }

    // Validate Email
    function validateEmail() {
        const email = document.getElementById("email").value.trim();
        const errorElement = document.getElementById("email-err");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            errorElement.textContent = "Email is required.";
            errorElement.style.display = "block";
            document.getElementById("email").classList.add("invalid");
            return false;
        } else if (!emailRegex.test(email)) {
            errorElement.textContent = "Please enter a valid email address.";
            errorElement.style.display = "block";
            document.getElementById("email").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("email").classList.remove("invalid");
            return true;
        }
    }

    // Validate State
    function validateState() {
        const state = document.getElementById("state").value;
        const errorElement = document.getElementById("state-err");

        if (!state) {
            errorElement.textContent = "State is required.";
            errorElement.style.display = "block";
            document.getElementById("state").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("state").classList.remove("invalid");
            return true;
        }
    }

    // Validate City
    function validateCity() {
        const city = document.getElementById("city").value;
        const errorElement = document.getElementById("city-err");

        if (!city) {
            errorElement.textContent = "City is required.";
            errorElement.style.display = "block";
            document.getElementById("city").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("city").classList.remove("invalid");
            return true;
        }
    }

    // Populate city options based on selected state
    document.getElementById('state').addEventListener('change', function () {
        let selectedState = this.value;
        let cityOptions = "";

        if (selectedState === 'mdi') {
            cityOptions = "<option value='KV'>Kaala vasal</option><option value='MTU'>Maatuthaavani</option><option value='peri'>Periyar</option>";
        } else if (selectedState === 'cni') {
            cityOptions = "<option value='EGM'>Egmore</option><option value='TM'>Thambaram</option><option value='bch'>Vadapalani</option>";
        } else if (selectedState === 'tvl') {
            cityOptions = "<option value='PLG'>Palayamkottai</option><option value='Tn'>Town</option><option value='jun'>Junction</option>";
        } else {
            cityOptions = "<option value=''>Select a city</option>"; // Default option if no state is selected
        }

        document.getElementById('city').innerHTML = cityOptions;
        validateState();  // Re-validate state when changed
        validateCity();   // Re-validate city when the state is changed
    });

    // Validate Username
    function validateUsername() {
        const username = document.getElementById("username").value.trim();
        const errorElement = document.getElementById("username-err");
        const minLength = 3; // minimum length
        const maxLength = 15; // maximum length
        const usernameRegex = /^[a-zA-Z0-9_]+$/; // allows alphanumeric and underscore

        if (!username) {
            errorElement.textContent = "Username is required.";
            errorElement.style.display = "block";
            document.getElementById("username").classList.add("invalid");
            return false;
        } else if (username.length < minLength) {
            errorElement.textContent = `Username must be at least ${minLength} characters long.`;
            errorElement.style.display = "block";
            document.getElementById("username").classList.add("invalid");
            return false;
        } else if (username.length > maxLength) {
            errorElement.textContent = `Username must not exceed ${maxLength} characters.`;
            errorElement.style.display = "block";
            document.getElementById("username").classList.add("invalid");
            return false;
        } else if (!usernameRegex.test(username)) {
            errorElement.textContent = "Username can only contain letters, numbers, and underscores.";
            errorElement.style.display = "block";
            document.getElementById("username").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("username").classList.remove("invalid");
            return true;
        }
    }

    // Validate Password
    function validatePassword() {
        const password = document.getElementById("password").value.trim();
        const errorElement = document.getElementById("password-err");
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least one uppercase, one lowercase, one number, at least 8 characters

        if (!password) {
            errorElement.textContent = "Password is required.";
            errorElement.style.display = "block";
            document.getElementById("password").classList.add("invalid");
            return false;
        } else if (!passwordRegex.test(password)) {
            errorElement.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
            errorElement.style.display = "block";
            document.getElementById("password").classList.add("invalid");
            return false;
        } else {
            errorElement.style.display = "none";
            document.getElementById("password").classList.remove("invalid");
            return true;
        }
    }

    // Validate form before submission
    document.getElementById("register-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isDobValid = validateDob();
        const isGenderValid = validateGender();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        const isStateValid = validateState();
        const isCityValid = validateCity();
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        // If all fields are valid, submit the form
        if (isFirstNameValid && isLastNameValid && isDobValid && isGenderValid && isPhoneValid && isEmailValid && isStateValid && isCityValid && isUsernameValid && isPasswordValid) {
            // Here you can submit the form or send the data to the server
            alert("Registration successful!"); // Example action on successful validation
            this.submit(); // Uncomment this to actually submit the form
        }
    });

    // Attach input events for real-time validation
    document.getElementById("firstname").addEventListener("input", validateFirstName);
    document.getElementById("lastname").addEventListener("input", validateLastName);
    document.getElementById("dob").addEventListener("change", validateDob);
    document.querySelectorAll("input[name='gender']").forEach(elem => {
        elem.addEventListener("change", validateGender);
    });
    document.getElementById("phone").addEventListener("input", validatePhone);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("state").addEventListener("change", validateState);
    document.getElementById("city").addEventListener("input", validateCity);
    document.getElementById("username").addEventListener("input", validateUsername);
    document.getElementById("password").addEventListener("input", validatePassword);
});
