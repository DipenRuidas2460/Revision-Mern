const inputField = document.getElementById('username') as HTMLInputElement;
const submitButton = document.getElementById('submit') as HTMLButtonElement;

submitButton.addEventListener('click', () => {
    const username = inputField.value;
    if (username.trim() === '') {
        alert('Please enter a username.');
    } else {
        console.log(`Username: ${username}`);
    }
});