let botonprincipiante = document.getElementById('botonprincipiante');

botonprincipiante.addEventListener('click', function () {
    // Obtiene el valor del nombre de usuario
    let nombreUsuario = document.getElementById('input1').value;

    // Verificar si el nombre de usuario está vacío
    if (!nombreUsuario.trim()) {
        // Muestra una alerta si el nombre de usuario está vacío
        alert('Por favor, ingresa tu nombre de usuario');
        return; // Detén la ejecución si el nombre de usuario está vacío
    }

    // Guarda el nombre de usuario en localStorage para que esté disponible en otras páginas
    localStorage.setItem('nombreUsuario', nombreUsuario);

    // Redirige a la otra página
    window.location.href = 'pantalla2.html';
});