document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y el campo de tarea
    const formulario = document.getElementById("formulario");
    const inputTarea = document.getElementById("tarea");
    const listaTareas = document.getElementById("listaTareas");

    // Función para agregar tarea
    function agregarTarea() {
        const tareaTexto = inputTarea.value.trim(); // Obtener el texto de la tarea

        if (tareaTexto !== "") {
            // Crear el div para la tarea
            const postIt = document.createElement('div');
            postIt.className = "postIt";

            // Crear el texto de la tarea
            const tareaText = document.createTextNode(tareaTexto);
            postIt.appendChild(tareaText);

            // Crear el botón de eliminar
            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.addEventListener('click', function() {
                postIt.remove(); // Eliminar la tarea
            });

            // Crear evento para marcar como completada
            postIt.addEventListener("click", function() {
                postIt.classList.toggle("completada"); // Marcar como completada
            });

            // Añadir el botón de eliminar al div de tarea
            postIt.appendChild(eliminarBtn);

            // Añadir la tarea a la lista
            listaTareas.appendChild(postIt);

            // Limpiar el campo de texto
            inputTarea.value = "";
        } else {
            alert("Por favor, ingresa una tarea.");
        }
    }

    // Agregar tarea cuando se hace clic en el botón de agregar
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        agregarTarea();
    });

    // También permitir agregar tarea al presionar "Enter", sin activar alert si el campo está vacío
    inputTarea.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();  // Prevenir el comportamiento predeterminado del "Enter"
            agregarTarea();
        }
    });
});