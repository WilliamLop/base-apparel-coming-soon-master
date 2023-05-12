const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const boton = document.getElementById('button');
const iconError = document.getElementById('email-error');
const textError = document.getElementById('message-error');



button.addEventListener('click', function(e) {
    // Llama a la misma función que usas para el evento de entrada
    validateEmail(e);
});

function validateEmail(e) {
    if (emailInput.value === '') {
        e.preventDefault();
        textError.style.display = 'block';
        textError.textContent = 'Please enter an email';
    } else if (!emailInput.validity.valid) {
        e.preventDefault();
        iconError.style.display = 'block';
        textError.style.display = 'block';
        textError.textContent = 'Please provide a valid email';
    } else {
        iconError.style.display = 'none';
        textError.style.display = 'none';
        textError.textContent = '';
    }
}

emailInput.addEventListener('input', function(e) {
    validateEmail(e);
});