let botonprincipiante = document.getElementById('botonprincipiante');


botonprincipiante.addEventListener('click', function () {
    
    let nombreUsuario = document.getElementById('input1').value;

    // Guarda el nombre de usuario en localStorage para que esté disponible en otras páginas
    localStorage.setItem('nombreUsuario', nombreUsuario);

    // Redirige a la otra página
    window.location.href = 'pantalla2.html';
    });
