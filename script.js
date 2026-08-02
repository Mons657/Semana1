const campoTexto = document.getElementById("campo");
const contadorCaracteres = document.getElementById("contador");

function actualizarContador() {
    if (!campoTexto || !contadorCaracteres) return;
    
    const cantidad = campoTexto.value.length;
    contadorCaracteres.textContent = (cantidad === 1) ? "1 carácter" : `${cantidad} caracteres`;
    
    contadorCaracteres.style.color = (cantidad > 100) ? "#dc2626" : "#6b7280";
}

if (campoTexto) {
    campoTexto.addEventListener("input", actualizarContador);
}


$(document).ready(function() {
    $("#btn-detalles").click(function() {
        $("#info-extra").slideToggle(300);
    });
});