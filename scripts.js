function postIdea() {
    const ideaInput = document.getElementById("ideaInput"); // Obtiene el texto del área de texto
    const ideaText = ideaInput.value.trim(); // Obtiene el texto y elimina espacios extra

    if (ideaText === "") {
        alert("Por favor, ingresa una idea antes de compartir."); // Mensaje de error si está vacío
        return; // Detiene la ejecución si está vacío
    }

    const ideaDiv = document.createElement("div"); // Crea un contenedor para la idea
    ideaDiv.className = "idea hidden"; // Comienza oculto
    ideaDiv.textContent = ideaText; // Asigna el texto de la idea

    const revealButton = document.createElement("button"); // Botón para mostrar/ocultar la idea
    revealButton.textContent = "Mostrar Idea"; // Texto del botón
    revealButton.onclick = function() {
        ideaDiv.classList.toggle("hidden"); // Alterna la visibilidad
    };

    const ideaList = document.getElementById("ideaList"); // Obtiene el contenedor de ideas
    ideaList.appendChild(revealButton); // Agrega el botón
    ideaList.appendChild(ideaDiv); // Agrega la idea

    ideaInput.value = ""; // Limpia el área de texto
}