document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("error-msg");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get username and password from form inputs
        const username = loginForm.querySelector("#username").value;
        const password = loginForm.querySelector("#password").value;

        // Mock authentication (replace with actual authentication logic)
        if (username === "user" && password === "password") {
            // Redirect to dashboard or perform other actions
            alert("Login successful!");
            // For redirection:
            // window.location.href = "dashboard.html";
        } else {
            // Display error message
            errorMsg.textContent = "Invalid username or password. Please try again.";
        }
    });
});
