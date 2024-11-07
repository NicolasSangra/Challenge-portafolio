emailjs.init("gwvlglMnKg5auCOEs"); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto (recarga de página)

    // Obtiene los valores de los campos del formulario
    const nombre = document.querySelector('[name="nombre"]').value;
    const email = document.querySelector('[name="email"]').value;
    const asunto = document.querySelector('[name="asunto"]').value;
    const mensaje = document.querySelector('[name="mensaje"]').value;

    // Crea un objeto con los datos del formulario
    const templateParams = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };

    // Enviar el correo utilizando EmailJS
    emailjs.send('service_8x7lz3o', 'template_thymbry', templateParams)
        .then(function(response) {
            console.log('Correo enviado con éxito:', response);

            // Crear y mostrar el cartel de éxito
            var successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = '¡Mensaje enviado exitosamente!';
            document.body.appendChild(successMessage);

            // El cartel de éxito desaparece después de 3 segundos
            setTimeout(function() {
                successMessage.remove();
            }, 3000);

            // Resetea el formulario después de enviar
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('Error al enviar el correo:', error);

            // Crear y mostrar el cartel de error
            var errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.';
            document.body.appendChild(errorMessage);

            // El cartel de error desaparece después de 3 segundos
            setTimeout(function() {
                errorMessage.remove();
            }, 3000);
        });
});

