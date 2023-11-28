document.addEventListener('DOMContentLoaded', function () {
    // Obtener el nombre de usuario almacenado en localStorage
    const nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        // Mostrar la alerta personalizada
        alert(`Una pena, ${nombreUsuario}... has perdido!!`);
    }

    
    let botonhome = document.getElementById('botonperdedor1');
    let botonjugar = document.getElementById('botonperdedor2');

    botonhome.addEventListener('click', function () {
        window.location.href = '/index.html';
    });

    botonjugar.addEventListener('click', function () {
        window.location.href = 'pantalla1.html';
    });
});