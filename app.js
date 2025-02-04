// Lista para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista si no está vacío
    amigos.push(nombre);
    input.value = ""; // Limpiar el input
    actualizarLista(); // Actualizar la visualización
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombre, index) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el nombre del amigo sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡Tu amigo secreto es: ${amigoSecreto}! 🎁</li>`;
}
