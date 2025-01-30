
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