
const postres = [];

// Agregar un postres al final del arreglo.
postres.push("Pastel de Guayaba");
postres.push("Flan", "Gelatina");

console.log(  postres ); // ["Pastel de Guayaba", "Flan", "Gelatina"]

// Eliminar un postre al final del arreglo.
console.log(`Elemento eliminado con pop() ${postres.pop()}`); // Gelatina
console.log(  postres ); // ["Pastel de Guayaba", "Flan"]

// Agregar un postre al inicio del arreglo.
postres.unshift("Tiramisú");
console.log(  postres ); // ["Tiramisú", "Pastel de Guayaba", "Flan"]

// Eliminar un postre al inicio del arreglo.
console.log(`Elemento eliminado con shift() ${postres.shift()}`); // Tiramisú

console.log(  postres ); // ["Pastel de Guayaba", "Flan"]

// Buscar un elemento dentro del arreglo usando indexOf().
console.log(`Índice de "Flan": ${postres.indexOf("Flan")}`); // 1

// Buscar el postres "Flan" 
// Si existe mostrar "El flan existe"
// Si no existe mostrar "El flan no existe"
// Para evaluar usar el operador ternario.     evaluación ? valor si verdadero : valor si falso
postres.indexOf('Flan') != -1 ? console.log('El flan existe'): console.log('El flan no existe');
const msjExistencia = postres.indexOf("Flan") === -1 ? "El flan no existe" : "El flan existe";
console.log(msjExistencia);

console.log( postres.indexOf("Flan") != -1 ? "El flan existe" : "El flan no existe" );

// =================================================
// El método slice crea una copia superficial de un fragmento de un array y devuelve un nuevo array.


const pasteles = ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"];

const eliminarPastel = ( array, indice ) => {
    const copyArray = array.slice();    
    const pastelEliminado = copyArray.splice(indice, 1);
    console.log( copyArray ); // ["Pastel de Chocolate", "Pastel de Limón"]
    return pastelEliminado;
}

eliminarPastel( pasteles, 1 ); 
console.log( pasteles ); // ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"]

// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]


