document.addEventListener('DOMContentLoaded', () => {

    const checkboxChangePassword = document.querySelector('input[name="option"]');
    const changeFormPassword = document.querySelector('#change-password-form');
    const newPasswordInput = document.getElementById('new-password');
    const submitButton = document.querySelector('.btn-submit');

    // Инициално скриване на формата за смяна на парола
    changeFormPassword.style.display = 'none';

    // Превключване на видимостта на формата за смяна на парола в зависимост от отметката
    checkboxChangePassword.addEventListener('change', () => {
        if (checkboxChangePassword.checked) {
            changeFormPassword.style.display = 'block';
        } else {
            changeFormPassword.style.display = 'none';
        }
    });

    submitButton.addEventListener('click', (event) => {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;

        const currentPassword = document.getElementById('current-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const newPassword = newPasswordInput.value;

        const errorMessages = document.querySelectorAll('.error-message');
        for (const message of errorMessages) {
            message.remove();
        }

        let isValidData = true;

        if (!currentPassword) {
            showError('current-password', 'Моля, въведете текущата си парола.');
            isValidData = false;
        }

        if (newPassword !== confirmPassword) {
            showError('confirm-password', 'Новата парола и потвърждението не съвпадат.');
            isValidData = false;
        }

        if (isValidData) {
            //save data in local storage
            const userData = {
                fname,
                lname,
                email,
                currentPassword,
                newPassword
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            alert('Данните са запазени в локалното хранилище.');
        } else {
            event.preventDefault(); //prevent form submission
        }
    });

    function showError(input, message) {
        const inputElement = document.getElementById(input);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    }

    const getPasswordStrength = (password) => {
        const minLength = 8;

        // Regular expressions for password validation
        const specialCharacterRegex = /[?!.:*@#$%^&|]/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;

        // Initialize the strength score
        let strengthScore = 0;

        if (password.length >= minLength) {
            strengthScore++;
        }
        if (uppercaseRegex.test(password)) {
            strengthScore++;
        }
        if (lowercaseRegex.test(password)) {
            strengthScore++;
        }
        if (numberRegex.test(password)) {
            strengthScore++;
        }
        if (specialCharacterRegex.test(password)) {
            strengthScore++;
        }

        switch (strengthScore) {
            case 0:
                return 'Няма въведена парола';
            case 1:
            case 2:
                return 'Лесна';
            case 3:
                return 'Средна';
            case 4:
            case 5:
                return 'Трудна';
            default:
                return 'Лесна';
        }
    };

    const showStrengthMessage = (input, message) => {
        const inputElement = document.getElementById(input);
        let strengthMessage = inputElement.parentNode.querySelector('.strength-message');

        if (!strengthMessage) {
            strengthMessage = document.createElement('div');
            strengthMessage.className = 'strength-message';
            inputElement.parentNode.insertBefore(strengthMessage, inputElement.nextSibling);
        }

        strengthMessage.textContent = message;
    };

    newPasswordInput.addEventListener('input', () => {
        const passwordStrength = getPasswordStrength(newPasswordInput.value);
        showStrengthMessage('new-password', `Сигурност на паролата: ${passwordStrength}.`);
    });
});