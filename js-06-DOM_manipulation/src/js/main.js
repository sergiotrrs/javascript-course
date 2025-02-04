

/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = () =>{
  // document: representa cualquier página web carga en el navegador
  //         sirve como punto e entrada al contenido de la página.
  //         document es el objeto principal del DOM.
    const descripcionOperadores = document.getElementById("descripcion-operadores");
    console.log( descripcionOperadores );
    // descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerText = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerHTML = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
    descripcionOperadores.innerHTML = '<span class="text-warning">document</span>: representa cualquier página web carga en el navegador.';
}

changeElementById();

/**
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
   const listItems = document.getElementsByTagName("li");
   console.log( listItems );

   for( let item of listItems){
     item.innerText = "Mi nuevo li"
   }

}

// changeElementsByTagName();

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () =>{
                  // document.getElementById("descripcion-operadores");
    const element = document.querySelector("#descripcion-operadores");
    console.log(element);

}

getElementsByQuerySelector();