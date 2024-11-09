document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener("submit",function(event){
        event.preventDefault(); //Prevenimos que el formulario se envie

        var tarea = document.getElementById("tarea").value;

        let postIt = document.createElement ('div');
        postIt.className="postIt";
        const tareatext = document.createTextNode(tarea);
        postIt.appendChild(tareatext);
        document.body.appendChild(postIt);

        formulario.parentNode.insertBefore(postIt, formulario.nextSibling);

        document.getElementById("tarea").value = "";
    });
});