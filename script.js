document.addEventListener('DOMContentLoaded', (event) => {
    const messageBox = document.getElementById('messageBox');
    const charCounter = document.getElementById('charCounter');
    const maxLength = messageBox.getAttribute('maxlength');

    messageBox.addEventListener('input', () => {
        const currentLength = messageBox.value.length;
        const remainingLength = maxLength - currentLength;
        charCounter.textContent = `${currentLength} characters written, ${remainingLength} characters remaining`;
    });
});