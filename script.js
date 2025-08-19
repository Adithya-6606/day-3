document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from refreshing page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value.trim();
    let year = document.getElementById("year").value.trim();
    let projectTitle = document.getElementById("projectTitle").value.trim();
    let successMessage = document.getElementById("successMessage");

    // Check all fields filled
    if (!name || !email || !department || !year || !projectTitle) {
        successMessage.style.color = "red";
        successMessage.textContent = "⚠ Please fill all fields.";
        return;
    }

    // Email format validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        successMessage.style.color = "red";
        successMessage.textContent = "⚠ Please enter a valid email address.";
        return;
    }

    // Success message
    successMessage.style.color = "green";
    successMessage.textContent = "✅ Registration Successful!";
});
