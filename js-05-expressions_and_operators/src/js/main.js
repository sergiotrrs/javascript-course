/*
 En JavaScript, una expresión es cualquier fragmento de código que 
 produce un valor. Puede ser tan simple como un número o una variable, 
 o más compleja, como una operación matemática o una llamada a función.

Ejemplos:

10          // Número (expresión literal)
x           // Variable (si x está definida)
5 + 3       // Expresión aritmética (devuelve 8)
true && false // Expresión lógica (devuelve false)
"Hola".length // Expresión con propiedad (devuelve 4)

*/


// ---------------- Opéradores aritméticos ----------------
/* 
   Los operadores aritméticos toman valores numéricos 
   (ya sean literales o variables) como sus operandos 
   y devuelven un solo valor numérico.

   adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3
*/
// ---- Precedencia de operadores -------------------------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(  3 * 2 / 2  ); // 3
console.log(  3 / 2 * 2  ); // 3
console.log(  2 * 4 / 2**3 ); // 1
console.log(  3 ** 2 ** 3  ); // 6561 

// ---------------- Opéradores relacionales ----------------
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than
  
  Un operador de comparación compara sus operandos y devuelve un valor 
  Boolean basado en si la comparación es verdadera o no.

  <  menor que
  >  mayor que
  <= menor o igual que
  >= mayor o igual que

   - Valores booleanos true y false se convierten en 1 y 0 respectivamente.
   - null se convierte a 0.
   - undefined se convierte a NaN.
*/
console.log(  3 < 5 ); // true
console.log(  3 > 5 ); // false
console.log(  3 <= 3 ); // true
console.log(  3 >= 3 ); // true

console.log( null <= 0 ); // true
console.log( undefined <= 0 ); // false

console.log(  "3" >= 3 ); // true
console.log(  "tree" >= 3 ); // false


// ---------------- Operadores de igualdad ----------------
/*
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Equality

  Un operador de igualdad compara dos valores y devuelve un valor Boolean
  basado en si la comparación es verdadera o no.
  ==  igual que
  !=  diferente que
  === igual que y mismo tipo de dato
  !== diferente que y mismo tipo de dato

  - null y undefined NO son convertidos a cero

*/
console.log(  3 == 3 );  // true
console.log(  3 == "3" ); // true
console.log(  3 === "3" ); // false
console.log(  3 !== "3" ); // true
console.log(  3 != "3" );  // false

// Si un operando es null y el otro undefined, devuelve verdadero(true).
console.log( null == undefined ); // true

// Si ambos son objetos, devuelve true solo si ambos operandos hacen 
// referencia al mismo objeto.
const obj1 = { name: "Juan" };
const obj2 = { name: "Juan" };
const obj3 = obj1;

console.log( obj1 == obj2 ); // false
console.log( obj1 == obj3 ); // true

//--- Si los operandos son de diferente tipos, intenta convertirlos al mismo tipo antes de comparar:-----
// Al comparar un número con una cadena, convierte la cadena en un valor numérico.
console.log(  3 == "3" ); // true


// Si uno de los operandos es booleano, convierte el operando booleano en 
// 1 si es verdadero y en 0 en el caso de falso.
console.log(  1 == true ); // true
console.log(  0 == false ); // true

//--- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:-----
// String: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
console.log( "hola" == "hola" ); // true
console.log( "hola" == "Hola" ); // false