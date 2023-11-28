document.addEventListener('DOMContentLoaded', function () {
    // Obtener el nombre de usuario almacenado en localStorage
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        // Mostrar la alerta personalizada
        alert(`Enhorabuena ${nombreUsuario} has ganado!!`);
    }

    let botonhome = document.getElementById('botonhome2');
    let botonotravez = document.getElementById('botonganador');

    botonhome.addEventListener('click', function () {
        window.location.href = '/index.html';
    });

    botonotravez.addEventListener('click', function () {
        window.location.href = 'pantalla2.html';
    });
});
