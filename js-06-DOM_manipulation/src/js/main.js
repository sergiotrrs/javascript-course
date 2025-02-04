

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

    const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre    
    console.log( elementParagraph );

    const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
    console.log( classTextCenter );

    const anchorAndTextWarning = document.querySelector("a.text-warning"); // primer anchor que tenga la clases text-warning
    console.log( anchorAndTextWarning)
}

getElementsByQuerySelector();

/**
 * Acceder a varios elementos usando el selector universal
 * 
 */
const getListItemsByQuerySelector = () =>{
    // const listItems = document.querySelectorAll("main li");
    const listItems = document.querySelectorAll(".text-start li");
    console.log( listItems );
}

getListItemsByQuerySelector();

// ----------------------- Ejercicio ----------------------------------
// Seleccionar la imagen de dinosaurio que se muestra.
// mostrar en consola el objeto
const getImagenDinosaurio = ( ) => {
    const  imagenDinosaurio = document.querySelector ( "main img" );
    console.log ( imagenDinosaurio );
    return imagenDinosaurio;
}
getImagenDinosaurio( );

// Cambiar la imagen de dinosaurio a la imagen web-developer
const changeImage = () => {
    const refImage = getImagenDinosaurio();
    refImage.src = "./public/images/web-developer.jpg";
    refImage.alt = "Chica ninja como web developer";

}

const imagenPrincipal = getImagenDinosaurio();
imagenPrincipal.style.cursor = "pointer";

// imagenPrincipal.addEventListener( evento , callback );
// imagenPrincipal.addEventListener( "click" , changeImage );
imagenPrincipal.addEventListener( "click" , ()=>{
    // Hacer otras cosas
    changeImage();
} );


// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)

// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");

refBtnPrimary.addEventListener("click", ()=>{
    refBtnPrimary.style.display = "none";
} );

// Aplicar visibility = "hidden" para el btn-secondary
refBtnSecondary.addEventListener("click", () => {
    refBtnSecondary.style.visibility = "hidden";
});

// Reestablecer la visualizacion de los botones primary y secondary
// Usando el evento mouseover : Se activa cuando el puntero del ratón pasa sobre el botón
// display: "block"      visibility: "visible"
refBtnSuccess.addEventListener ( "mouseover", () => {
    refBtnPrimary.style.display = "block";
    refBtnSecondary.style.visibility = "visible"; 
} );