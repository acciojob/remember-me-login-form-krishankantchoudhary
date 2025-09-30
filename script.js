//your JS code here. If required.
 const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");

    // On page load, check if credentials are saved
    window.onload = function () {
      const savedUsername = localStorage.getItem("username");
      const savedPassword = localStorage.getItem("password");

      if (savedUsername && savedPassword) {
        existingBtn.style.display = "block"; // show existing user button
      }
    };

    // Handle form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent page reload

      const username = usernameInput.value;
      const password = passwordInput.value;

      alert("Logged in as " + username);

      if (checkbox.checked) {
        // Save credentials
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block"; // show button
      } else {
        // Remove credentials if unchecked
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
      }
    });

    // Handle existing user login
    existingBtn.addEventListener("click", function () {
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        alert("Logged in as " + savedUsername);
      }
    });