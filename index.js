const form = document.getElementById("registrationForm");
        form.addEventListener("submit", function (event) {
            let valid = true;
            const username = document.getElementById("username");
            const email = document.getElementById("email");
            const password = document.getElementById("password");
            const emailError = document.getElementById("emailError");
            usernameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
          })
            if (!valid) {
                event.preventDefault();
            }
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        