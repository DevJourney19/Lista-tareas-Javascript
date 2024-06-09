function agregarTarea() {

    //Obtenemos el valor del campo de la tarea (del valor del input ingresado)
    let nuevaTareaTexto = document.getElementById('extraccion').value;

    //Verificamos si se va a agregar una tarea vacía
    if (nuevaTareaTexto === '') {
        alert("La tarea no puede estar vacia");
        return;
    }
    
    //Creamos los items de la lista (elementos de la lista)
    let nuevaTarea = document.createElement("li"); //Si lo dejamos asi nomas va a estar vacío (solo habriamos creado el reglon)
    nuevaTarea.textContent = nuevaTareaTexto + " ";
    
    //Crear boton eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    //Al hacer clic en el boton vamos a ejecutar una funcion
    btnEliminar.onclick = function () {
        nuevaTarea.remove();
    }
    //Agregar boton eliminar al elemento de la lista //Estamos vinculando el boton con el elemento de la lista
    nuevaTarea.appendChild(btnEliminar);
    
    //Agregar el elemento a la lista
    document.getElementById("listar_tarea").appendChild(nuevaTarea); //que traiga a listarTarea
    
    //Limpiar el input
    document.getElementById('extraccion').value = "";
}
