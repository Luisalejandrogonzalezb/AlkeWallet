
document.addEventListener("DOMContentLoaded", function () {
    // Select the form and its inputs
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Add event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Validate username
        if (usernameInput.value.trim() === "") {
            usernameInput.classList.add("is-invalid");
        } else {
            usernameInput.classList.remove("is-invalid");
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add("is-invalid");
        } else {
            emailInput.classList.remove("is-invalid");
        }

        // Validate password
        if (passwordInput.value.trim() === "") {
            passwordInput.classList.add("is-invalid");
        } else {
            passwordInput.classList.remove("is-invalid");
        }
    });

    // Add event listener to remove "is-invalid" class when inputs are focused
    const inputs = [usernameInput, emailInput, passwordInput];
    inputs.forEach(function (input) {
        input.addEventListener("focus", function () {
            input.classList.remove("is-invalid");
        });
    });
});
