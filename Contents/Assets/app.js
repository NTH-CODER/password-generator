const passwordGenBtn = document.getElementById('passwordGenBtn');

passwordGenBtn.onclick = () => {
    const passwordInput = document.getElementById('passwordInput');

    // set password length
    const passwordLength = 8;

    // set possible characters that can be used as the password
    const possibleCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~{}[]|,.<>/?:";

    // create an empty string that would store the password
    let password = '';

    // Generate a random password by selecting a random character from the possibleCharacters string and adding it to the password string until the password is the desired length

    for (let i = 0; i < passwordLength; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    const alertBox = document.getElementById('alertBox');

    passwordInput.value = password;
    alertBox.classList.remove('d-none');
    alertBox.innerHTML = `Your generated password is: ${password}`;
}