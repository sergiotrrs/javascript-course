import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js"; // ruta absoluta
// import { amdRadeonRx } from "../modules/class/amd-radeon-rx.js"; // ruta relativa
import { amdRadeonRx, mouseGamerPixArt } from "/src/modules/class/amd-radeon-rx.js"; // ruta absoluta
import { Product } from "../modules/class/Product.js";

/*
 Ruta relativa: Son rutas que dependen de la ubicación actual del archivo. 
 Rutas absolutas: Especifican la ubicación exacta de un archivo 
    o recurso sin importar desde dónde se acceda.
*/

insertMainHeader();
insertMainFooter();

console.log( amdRadeonRx );
// Podemos acceder a los atributos usando el operador objeto.atributo (access and call), n.precedence: 17
// podemos acceder usando objeto[nombreAtributo]


// Accediendo al modelo
console.log( amdRadeonRx.model ); // RX7800XT
// console.log( amdRadeonRx["model"] ); // RX7800XT
let attribute = "model"
console.log( amdRadeonRx[attribute] ); // RX7800XT
attribute = "price";
console.log( amdRadeonRx[attribute] ); // 10699

// Acceder al atributo title e imprimir en consola, usando los dos métodos para aceder

console.log( amdRadeonRx["title"]); // Tarjeta de Video Po
console.log( amdRadeonRx.title); // Tarjeta de Video Po
let titulo = "title"
console.log( amdRadeonRx[titulo] ); // Tarjeta de Video Po

const number = 1;
console.log( amdRadeonRx[`dato${number}`] ); // Tarjeta de Video Po

// accediendo a atributos que no existen
console.log( amdRadeonRx.dato1 ); // Descrip 1
console.log( mouseGamerPixArt.dato1 ); //  undefined

console.log( mouseGamerPixArt.compatibilidad ); //  undefined

// Obteniendo el número de elementos
console.log( amdRadeonRx.compatibilidad.length ); // 2
//console.log( mouseGamerPixArt.compatibilidad.length ); // Cannot read properties of undefined

// Operador de encadenamiento opcional  ( ?. )
console.log( mouseGamerPixArt.compatibilidad?.length ); 

console.log( amdRadeonRx.imprimirPrecioMxN() );
console.log( amdRadeonRx.imprimirPrecioDolares() );

console.log( mouseGamerPixArt.imprimirPrecioMxN() );
console.log( mouseGamerPixArt.imprimirPrecioDolares() );

//============= Usando la clase Product =====================

const mouseLogi = new Product("Mouse");
const tecladoGamer = new Product("Teclado");
const monitorHp = new Product("Monitor");
const bateria = new Product();
