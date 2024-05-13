document.getElementById('contact-form').addEventListener('submit', function (event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    if (!nameInput.value || !emailInput.value) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos do formulário.');
    } else {
        alert('Enviado com sucesso')
    }
});
