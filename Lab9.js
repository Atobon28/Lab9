const contenedorMensajes = document.getElementById("contenedorMensajes");
const formAmigoUno = document.getElementById("formAmigoUno");
const mensajeAmigoUno = document.getElementById("mensajeAmigoUno");
const formAmigoDos = document.getElementById("formAmigoDos");
const mensajeAmigoDos = document.getElementById("mensajeAmigoDos");
const reiniciarChatButton = document.getElementById("reiniciarChat");

function agregarMensaje(mensaje, clase) {
    if (mensaje.trim() !== "") {
        const nuevoMensaje = document.createElement("div");
        nuevoMensaje.classList.add("mensaje", clase);
        nuevoMensaje.innerText = mensaje;
        contenedorMensajes.insertBefore(nuevoMensaje, contenedorMensajes.firstChild);
        contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
    }
}

formAmigoUno.addEventListener("submit", function (event) {
    event.preventDefault();
    agregarMensaje(mensajeAmigoUno.value, "mensaje-amigo-uno");
    mensajeAmigoUno.value = ""; 
});

formAmigoDos.addEventListener("submit", function (event) {
    event.preventDefault();
    agregarMensaje(mensajeAmigoDos.value, "mensaje-amigo-dos");
    mensajeAmigoDos.value = ""; 
});

reiniciarChatButton.addEventListener("click", function () {
    contenedorMensajes.innerHTML = ""; 
});
