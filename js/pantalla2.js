document.getElementById('botonlisto').addEventListener('click', function () {
    var coloresSeleccionados = []
    // se crea el array para uso posterior


    coloresSeleccionados.push(document.querySelector('.color1').value);
    coloresSeleccionados.push(document.querySelector('.color2').value);
    coloresSeleccionados.push(document.querySelector('.color3').value);
    coloresSeleccionados.push(document.querySelector('.color4').value);
    // se almacenan en ese array los valores de los colores que elija el usuario
   
   
    localStorage.setItem('coloresSeleccionados', JSON.stringify(coloresSeleccionados));
    //propiedad para almacenarlos en la información del navegador para su uso posterior.
   
    window.location.href ="juego.html";
    //al pulsar el botón 'listo' almacena toda esta información previa y además nos
    //redirige a la próxima pantalla 'juego'.
});