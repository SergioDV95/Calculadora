const input = document.getElementById("resultado");
const historial = document.getElementById("historial");
const botones = document.querySelectorAll("button");

function imprimir(valor) {
    input.value += valor;
}

function borrar() {
    let resultado = input.value;
    resultado = resultado.slice(0, -1);
    input.value = resultado;
}

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      imprimir(boton.value);
    });
});

document.addEventListener("keydown", (tecla) => {
    if (tecla.key === "Enter") { 
        calcular(); 
    }
})

input.addEventListener("input", () => {
    let resultado = input.value
    let regex = /^[\d+\-*\/.()]+$/;
    if (!regex.test(resultado)) {
        input.value = resultado.replace(/[^\d+\-*\/.()]/g, "");
    }
})

function calcular() {
    historial.innerHTML = input.value;
    input.value = eval(input.value);
}

function limpiar() {
    input.value = "";
    historial.innerHTML = "";
}

