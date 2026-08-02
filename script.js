// Paso 3: Seleccionar los elementos del DOM usando getElementById
const campoTexto = document.getElementById("campo");
const contadorCaracteres = document.getElementById("contador");

// Paso 5: Función que lee la longitud del texto y actualiza el párrafo
function actualizarContador() {
    // Obtenemos la cantidad de caracteres con .value.length
    const cantidad = campoTexto.value.length;
    
    // Ajustamos la palabra 'carácter' o 'caracteres' según la cantidad
    if (cantidad === 1) {
        contadorCaracteres.textContent = "1 carácter";
    } else {
        contadorCaracteres.textContent = `${cantidad} caracteres`;
    }
    if (cantidad > 100){
        contadorCaracteres.style.color = "#FF2400";
        contadorCaracteres.style.fontWeight = "bold";
    } else {
        contadorCaracteres.style.color = "#6b7280";
        contadorCaracteres.style.fontWeight = "600";

    }
}
// Paso 4: Escuchar el evento "input" sobre el área de texto
// El evento "input" se dispara con cada tecla presionada, al borrar o al pegar texto
campoTexto.addEventListener("input", actualizarContador);