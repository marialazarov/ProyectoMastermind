const coloresUsuario = JSON.parse(localStorage.getItem("coloresSeleccionados"));
let currentRow = 1; //  para rastrear la fila actual
let checkIndex = 0;
const winningCombination = generarCombinacionSecreta(coloresUsuario); // Guardo la combinación ganadora generada

const colorDivs = [
  document.getElementById("color5"),
  document.getElementById("color6"),
  document.getElementById("color7"),
  document.getElementById("color8"),
];

const checkBoxes = Array.from({ length: 10 }, (_, rowIndex) =>
  Array.from({ length: 4 }, (_, colIndex) =>
    document.getElementById(`check-box-${rowIndex + 1}-${colIndex + 1}`)
  )
);

const boardBoxes = Array.from({ length: 10 }, (_, rowIndex) =>
  Array.from({ length: 4 }, (_, colIndex) =>
    document.getElementById(`board-box-${rowIndex + 1}-${colIndex + 1}`)
  )
);

if (coloresUsuario && coloresUsuario.length === 4) {
  colorDivs.forEach((colorDiv, index) => {
    colorDiv.style.backgroundColor = coloresUsuario[index];
  });
} else {
  console.error("No hay colores guardados");
}

colorDivs.forEach((colorDiv, index) => {
  colorDiv.addEventListener("click", function () {
    let selectedColor = colorDiv.style.backgroundColor;
    sessionStorage.setItem("color", selectedColor);
  });
});

boardBoxes.forEach((boardRow) => {
  boardRow.forEach((boardBox) => {
    boardBox.addEventListener("click", function () {
      let selectedColor = sessionStorage.getItem("color");
      if (selectedColor) {
        this.style.backgroundColor = selectedColor;
      }
    });
  });
});

// Generar y guardar la combinación secreta si no existe en el localStorage
if (!localStorage.getItem("combinacionSecreta")) {
  const combinacionSecreta = generarCombinacionSecreta();
  localStorage.setItem(
    "combinacionSecreta",
    JSON.stringify(combinacionSecreta)
  );
}

// Función para convertir RGB a hexadecimal
function rgbToHex(rgb) {
  
  if (!rgb) {
    return null;
  }

  //  para extraer los componentes RGB
  const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);

  if (!match) {
    return null; // Devolver null si el formato no es el esperado
  }

  //----- Prueba 2

  // Convertir los componentes a hexadecimal y concatenar
  const hex =
    "#" +
    match
      .slice(1)
      .map((component) => parseInt(component).toString(16).padStart(2, "0"))
      .join("");

  return hex;
}

// Función para generar combinaciones ganadoras
function generarCombinacionSecreta(coloresUsuario) {
  const coloresPosibles = coloresUsuario || [
    "color5",
    "color6",
    "color7",
    "color8",
  ];
  let combinacionSecreta = [];

  for (let i = 0; i < 4; i++) {
    const indiceAleatorio = Math.floor(Math.random() * coloresPosibles.length);
    combinacionSecreta.push(coloresPosibles[indiceAleatorio]);
  }

  return combinacionSecreta;
}

// Función para el final del juego
function handleGameOver() {
  window.location.href = "/pages/perdedor.html";
}

// Función para comprobar la combinación del usuario
function checkCombination() {
  const feedback = [];
  for (let i = 0; i < 4; i++) {
    const boardColor = rgbToHex(
      boardBoxes[currentRow - 1][i].style.backgroundColor
    );

    if (boardColor === winningCombination[i]) {
      feedback.push("purple"); // Color correcto en posición correcta
    } else if (winningCombination.includes(boardColor)) {
      feedback.push("white"); // Color correcto en posición incorrecta
    } else {
      feedback.push("transparent"); // Color que no está en la combinación
    }

    const checkBox = checkBoxes[currentRow - 1][i];
    checkBox.style.backgroundColor = feedback[i];
    checkBox.style.border = "thick solid #cafbfe";
  }

  if (feedback.every((color) => color === "purple")) {
    window.location.href = "/pages/ganador.html";
  } else {
    checkIndex++;
    if (checkIndex >= 10) {
      handleGameOver();
    } else {
      currentRow++;
      document
        .querySelectorAll(`.row${currentRow} .board-box`)
        .forEach((boardBox) => {
          boardBox.style.pointerEvents = "auto";
        });
    }
  }
}

document
  .getElementById("botoncomprobar")
  .addEventListener("click", checkCombination);

