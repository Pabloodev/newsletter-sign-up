document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const mainContent = document.querySelector('.white-content');
    const subMessage = document.querySelector('.thanks-forsub');
    const dismissButton = document.querySelector('.dismiss-btn');

    if (dismissButton) {
        dismissButton.addEventListener('click', function() {
            mainContent.style.display = 'flex';
            subMessage.style.display = 'none';
        });
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!emailInput.value) {
            emailError.textContent = 'Valid email required.';
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Valid email required';
            emailInput.classList.add('error');
            emailInput.classList.add('error-email');
            return;
        }

        emailError.textContent = '';
        emailInput.classList.remove('error-email');
        emailInput.classList.remove('error');
        alert('E-mail válido! Formulário enviado.');

        mainContent.style.display = 'none';
        subMessage.style.display = 'flex';

        emailInput.value = '';
    });
});