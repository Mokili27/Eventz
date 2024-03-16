function showSignUp() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
}

function signUp() {
    // Your sign-up logic here
    alert("Sign Up Successful!");
    showLogin(); // Switch to login page after sign up
    return false; // Prevent form submission
}

function login() {
    // Your login logic here
    alert("Logged In Successfully!");
    window.location.href = "home.html"; // Redirect to home page
    return false; // Prevent form submission
}


