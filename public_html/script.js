//funcion que realiza el boton Calcular promedio
function calcularPromedio() {
    // Obtener los datos del formulario
    
    //obtiene el texto que el usuario escribió en el campo con id
    let nombre = document.getElementById("nombre").value;
    //Convierte el valor de la edad en número decimal, para hacer operaciones matematicas
    let edad = parseFloat(
        document.getElementById("edad").value);
    //Convierte el valor de la calificacion1 en número decimal, para hacer operaciones matematicas
    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value);
    //Convierte el valor de la calificacion1 en número decimal, para hacer operaciones matematicas
    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value);
    //Convierte el valor de la calificacion2 en número decimal, para hacer operaciones matematicas
    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value);
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value);
    // Validar que los datos estén completos
    if (
        //verifica que el apartado nombre no este vacio
        nombre === "" ||
        //se asegura que los datos ingresados sean numeros
        isNaN(edad) ||
        //se asegura que los datos ingresados sean numeros
        isNaN(calificacion1) ||
        //se asegura que los datos ingresados sean numeros
        isNaN(calificacion2) ||
        //se asegura que los datos ingresados sean numeros
        isNaN(calificacion3) ||
        //se asegura que los datos ingresados sean numeros
        isNaN(calificacion4)) {
        //si los datos estan incompletos devuelve un mensaje
        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";
        return;}
    // Calcular promedio
    //suma las calificaciones y las divide entre cuatro, guardando el resultado en la variable promedio
    let promedio =
        (calificacion1 + calificacion2 + calificacion3+calificacion4) / 4;
    // Mostrar resultado
    //evalua si el promedio es mayor o igual a 0 y menor o igual a 5.9
    if (promedio >= 0 && promedio <=5.9) {
        document.getElementById("resultado").innerHTML = //escribe directamente en el HTML
            "<strong>Alumno:</strong> " + nombre + //devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) + //redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>REPROBADO"+"<br><br>Vete a turismo o a la 11";
    } 
    //evalua si el promedio es mayor o igual a 6 y menor o igual a 6.4
    if (promedio >= 6 && promedio <=6.4) {
        document.getElementById("resultado").innerHTML =//escribe directamente en el HTML
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>Date de baja";
    } 
    //evalua si el promedio es mayor o igual a 6.5 y menor o igual a 6.9
    if (promedio >= 6.5 && promedio <=6.9) {
        document.getElementById("resultado").innerHTML =//escribe directamente en el HTML
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>Piensa en conta";
    } 
    //evalua si el promedio es mayor o igual a 7 y menor o igual a 7.9
    if (promedio >= 7 && promedio <=7.9) {
        document.getElementById("resultado").innerHTML =//escribe directamente en el HTML
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>Bien";
    } 
    //evalua si el promedio es mayor o igual a 8 y menor o igual a 8.9
    if (promedio >= 8 && promedio <=8.9) {
        document.getElementById("resultado").innerHTML =//escribe directamente en el HTML
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>Muy bien";
    } 
    //evalua si el promedio es mayor o igual a 9 y menor o igual a 10
    if (promedio >= 9 && promedio <=10) {
        document.getElementById("resultado").innerHTML =//escribe directamente en el HTML
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>EXCELENTE";
    } 
}

//se ecarga de vaciar todos los campos del formulario
function limpiar() {
    //busca el elemento en el HTML con el atributo id y borra el contenido dentro del campo
    document.getElementById("nombre").value = "";
    //busca el elemento en el HTML con el atributo id y borra el contenido dentro del campo
    document.getElementById("edad").value = "";
    //busca el elemento en el HTML con el atributo id y borra el contenido dentro del campo
    document.getElementById("calificacion1").value = "";
    //busca el elemento en el HTML con el atributo id y borra el contenido dentro del campo
    document.getElementById("calificacion2").value = "";
    //busca el elemento en el HTML con el atributo id y borra el contenido dentro del campo
    document.getElementById("calificacion3").value = "";
    //busca el elemento en el HTML con el atributo id y borra el contenido dentro del campo
    document.getElementById("calificacion4").value = "";
    //borra el resultado obtenido
    document.getElementById("resultado").innerHTML = "";
}


function agregarAlumno() {
    //busca el elemento con la clase .contenedor en el HTML y lo guarda en una variable
    let contenedor = document.querySelector(".contenedor");
    //se encarga de crear un nuevo div que no existe
    let nuevo = document.createElement("div");
    //a la variable nuevo le asigna la calse formulario para que tenga el mismo estilo CSS que el formulario original
    nuevo.className = "formulario";

    //se crea un nuevo formulario debajo del primero para agregar los datos de cada alumno
    nuevo.innerHTML = `
        <label>Nombre del alumno:</label>
        <input type="text" placeholder="Escribe el nombre">

        <label>Edad:</label>
        <input type="number" min="0" max="100">

        <label>Calificación 1:</label>
        <input type="number" min="0" max="10">
        <label>Calificación 2:</label>
        <input type="number" min="0" max="10">
        <label>Calificación 3:</label>
        <input type="number" min="0" max="10">
        <label>Calificación 4:</label>
        <input type="number" min="0" max="10">

        <button onclick="calcularPromedioFormulario(this)">
            Calcular promedio
        </button>
        <button onclick="limpiarFormulario(this)">
            Limpiar
        </button>

        <div class="resultado"></div>
      `;
    //Guarda el elemento HTML del nuevo div creado y agrega ese nuevo elemento dentro del contenedor
    contenedor.appendChild(nuevo);
}
//funcion que realiza el boton Calcular promedio en el nuevo formulario
function calcularPromedioFormulario(boton) {
    //busca el formulario más cercano al boton dentro del HTML
    let form = boton.closest(".formulario");
    //busca todos los campos dentro del formulario
    let inputs = form.querySelectorAll("input");
    //los campos se guardan en un array
    //toma el valor del campo nombre
    let nombre = inputs[0].value;
    //convierte el segundo campo a numero decimal
    let edad = parseFloat(inputs[1].value);
    //convierte el tercer campo a numero decimal
    let cali1 = parseFloat(inputs[2].value);
    //convierte el cuarto campo a numero decimal
    let cali2 = parseFloat(inputs[3].value);
    //convierte el quinto campo a numero decimal
    let cali3 = parseFloat(inputs[4].value);
    //convierte el sexto campo a numero decimal
    let cali4 = parseFloat(inputs[5].value);

    if (
      //verifica que el apartado nombre del nuevo formulario no este vacio
      nombre === "" ||
      //se asegura que los datos ingresados en el nuevo formulario sean numeros
      isNaN(edad) ||
      //se asegura que los datos ingresados en el nuevo formulario sean numeros
      isNaN(cali1) ||
      //se asegura que los datos ingresados en el nuevo formulario sean numeros
      isNaN(cali2) ||
      //se asegura que los datos ingresados en el nuevo formulario sean numeros
      isNaN(cali3) ||
      //se asegura que los datos ingresados en el nuevo formulario sean numeros
      isNaN(cali4)
    ) {
    //si los datos estan incompletos devuelve un mensaje en el nuevo formulario
      form.querySelector(".resultado").innerHTML =
        "Por favor, completa todos los datos.";
      return;
    }
    // Calcular promedio
    //suma las calificaciones y las divide entre cuatro, guardando el resultado en la variable promedio
    let promedio = (cali1 + cali2 + cali3 + cali4) / 4;
    //evalua si el promedio es mayor o igual a 0 y menor o igual a 5.9
    if (promedio >= 0 && promedio <=5.9) {
        //busca en el formulario el elemento de clase .resultado y lo muestra junto a una serie de mensajes
        form.querySelector(".resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>REPROBADO"+"<br><br>Vete a turismo o a la 11";
    } 
    //evalua si el promedio es mayor o igual a 6 y menor o igual a 6.4
    if (promedio >= 6 && promedio <=6.4) {
        //busca en el formulario el elemento de clase .resultado y lo muestra junto a una serie de mensajes
        form.querySelector(".resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>Date de baja";
    } 
    //evalua si el promedio es mayor o igual a 6.5 y menor o igual a 6.9
    if (promedio >= 6.5 && promedio <=6.9) {
        //busca en el formulario el elemento de clase .resultado y lo muestra junto a una serie de mensajes
        form.querySelector(".resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>Piensa en conta";
    } 
    //evalua si el promedio es mayor o igual a 7 y menor o igual a 7.9
    if (promedio >= 7 && promedio <=7.9) {
        //busca en el formulario el elemento de clase .resultado y lo muestra junto a una serie de mensajes
        form.querySelector(".resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>Bien";
    } 
    //evalua si el promedio es mayor o igual a 8 y menor o igual a 8.9
    if (promedio >= 8 && promedio <=8.9) {
        //busca en el formulario el elemento de clase .resultado y lo muestra junto a una serie de mensajes
        form.querySelector(".resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>Muy bien";
    } 
    //evalua si el promedio es mayor o igual a 9 y menor o igual a 10
    if (promedio >= 9 && promedio <=10) {
        //busca en el formulario el elemento de clase .resultado y lo muestra junto a una serie de mensajes
        form.querySelector(".resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +//devuelve el texto alumno en negritas junto al valor guardado en la variable
            "<br><strong>Edad:</strong> "+edad+//devuelve el texto edad en negritas junto al valor guardado en la variable
            //devuelve el texto promedio en negritas junto al valor guardado en la variable
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +//redondea el promedio a dos decimales
            //devuelve mensajes de acuerdo con el promedio
            "<br><br>APROBADO"+"<br><br>EXCELENTE";
    } 
  
}  
// se encarga de limpiar el formulario nuevo al presionar el boton
function limpiarFormulario(boton) {
    //encuentra el formulario donde el boton fue presionado
  let form = boton.closest(".formulario");
  //busca los campos input en el formulario, los recorre y los deja vacios
  form.querySelectorAll("input").forEach(i => i.value = "");
  //borra el contenido del campo resultado
  form.querySelector(".resultado").innerHTML = "";
}