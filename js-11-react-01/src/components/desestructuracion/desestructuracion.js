

let x = 10;
let y = 20;
console.log( x, y );

// Pasar el valor de "x" a "y" y viceversa
let variableTemporal = x;
x = y;
y= variableTemporal;

console.log( x, y );
[ x, y] = [y, x];

/**
 *  Desestructuración 
 * 
 *  La desestructuración en JavaScript es una característica 
 *  que te permite extraer datos de arrays y objetos 
 *  de manera más conveniente y legible, 
 *  asignándolos a variables individuales.  
 */

// Desestructuración de arrays
const numeros = [1, 2, 3, 4];
let a;
let b;
let c;

// forma tradicional
// a = numeros[0];
// b = numeros[1];
// c = numeros[3];
 [a , b, , c ]   = numeros;

 console.log(a, b, c); // 1 2 4

 // ------------------------------

 const [valueA, valueB, , valueC ] = numeros;

 // Ejercicio
 // Del siguiente arreglo ["Isabel", "María", "Ana", "Luis", "Pedro"];
 // Extraer en variables independientes los valores de Isabel y Ana
 const nombres = ["Isabel", "María", "Ana", "Luis", "Pedro"];
 const [nombre1, , nombre2] =  nombres;
 console.log (nombre1, nombre2);


// Desestructuración de objetos
const datosMiguel = {
    name: "Miguel",
    lastName: "González",
    age: 20
}


// forma tradicional
// const name = datosMiguel.name;
// const lastName = datosMiguel.lastName;
// const age = datosMiguel.age;

 const { age, name : nombre }  = datosMiguel;

 console.log( nombre, age);

 
// Ejercicio
const product = {
    name: "Jabón Zote",
    precio: {
        frontera: 10,
        zonaCentro: 20,
        korea: 1000 
    },
    color: "blanco"
}

// obtener en variables independientes el valo de name y color
