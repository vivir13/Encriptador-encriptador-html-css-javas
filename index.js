
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muneco");
    let resultado = document.querySelector(".texto-resultado");
    let btnCopiar = document.querySelector(".botonStyle");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.trim().length !== 0) {
        resultado.textContent = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        btnCopiar.classList.remove("ocultar");
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡Error!", "Ningún mensaje fue encontrado", "error");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muneco");
    let resultado = document.querySelector(".texto-resultado");
    let btnCopiar = document.querySelector(".botonStyle");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.trim().length !== 0) {
        resultado.textContent = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.style.display = "none";
        btnCopiar.classList.remove("ocultar");
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("¡Error!", "Ningún mensaje fue encontrado", "error");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const btnCopiar = document.querySelector(".botonStyle");
    if (btnCopiar) {
        btnCopiar.addEventListener("click", () => {
            let contenido = document.querySelector(".texto-resultado").textContent;
            navigator.clipboard.writeText(contenido)
                .then(() => {
                    let txtcopiado = document.querySelector(".txtcopiado.ocultar");
                    txtcopiado.textContent = "¡Texto copiado!";
                    txtcopiado.classList.remove("ocultar");
                    setTimeout(() => {
                        txtcopiado.classList.add("ocultar");
                    }, 1000);
                })
                .catch(err => console.error("Error al copiar el texto:", err));
        });
    } else {
        console.error("No se encontró el botón de copiar");
    }
});
