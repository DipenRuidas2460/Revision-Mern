"use strict";
const inputField = document.getElementById('username');
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    const username = inputField.value;
    if (username.trim() === '') {
        alert('Please enter a username.');
    }
    else {
        console.log(`Username: ${username}`);
    }
});
