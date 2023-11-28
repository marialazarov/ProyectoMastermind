document.getElementById('botonlisto').addEventListener('click', function () {
    var coloresSeleccionados = [];

    // Obtener los valores de los colores seleccionados por el usuario
    coloresSeleccionados.push(document.querySelector('.color1').value);
    coloresSeleccionados.push(document.querySelector('.color2').value);
    coloresSeleccionados.push(document.querySelector('.color3').value);
    coloresSeleccionados.push(document.querySelector('.color4').value);

    // Verificar si algún color está vacío o tiene el valor predeterminado
    if (coloresSeleccionados.some(color => color.trim() === '' || color.trim() === 'default')) {
        // Mostrar una alerta si hay algún color vacío o no seleccionado
        alert('Por favor, elija un color diferente para cada posición.');
    } else if (new Set(coloresSeleccionados).size !== coloresSeleccionados.length) {
        // Mostrar una alerta si hay colores duplicados
        alert('Por favor, elija un color diferente para cada posición.');
    } else {
        // Almacenar los colores seleccionados en el localStorage
        localStorage.setItem('coloresSeleccionados', JSON.stringify(coloresSeleccionados));

        // Redirigir a la próxima pantalla 'juego'
        window.location.href = "juego.html";
    }
});