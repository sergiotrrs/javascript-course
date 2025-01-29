/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

let temperatura = 30;

/**
 * Función que recibe la temperatura y devuelve un mensaje:
 * Si la temperatura es = 22 grados: La temperatura de 22 grados es ideal
 * Si la temperatura es de 15 a 21 grados: La temperatura de 14 grados es fresca.
 * Si la temperatura es menor a 15 grados: La temperatura de 8 grados es fria
 * Si la temperatura es mayor a 22 grados: La temperatura de 30 grados es calurosa y le gustaría a Nan
 * @param {number} temperatura
 * @returns {string} mensaje
 */
const evaluarTemp = (temp) => {
    if (temp === 22) {  
        return `La temperatura de ${temp}🌡️ es ideal 😊👌.`;
    } else if (temp >= 15 && temp <= 21) {
        return `La temperatura de ${temp}° es fresca.`;
    } else if (temp < 15) {
        return `La temperatura de ${temp}° es fria 🥶.`;
    } else {
        return `La temperatura de ${temp}° es calurosa y le gustaría a Nan.`;
    }
};
console.log(temperatura);
console.log(evaluarTemp(30));
console.log(evaluarTemp(22));
console.log(evaluarTemp(19));
console.log(evaluarTemp(13));



//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
temperatura = 19;
switch (temperatura) {
    case 22:
        console.log(`La temperatura de ${temperatura}🌡️ es ideal 😊👌.`);
        break;
    case 15:
        console.log("estoy en 15 grados");
    case 16:
        console.log("estoy en 16 grados");
    case 17:
        console.log("estoy en 17 grados");
    case 18:
        console.log("estoy en 18 grados");
    case 19:
        console.log("estoy en 19 grados");
    case 20:
        console.log("estoy en 20 grados");
    case 21:
        console.log(`La temperatura de ${temperatura}° es fresca.`);
        break;
    case 13:
    case 14:
        console.log(`La temperatura de ${temperatura}° es fria 🥶.`);
        break;
    default:
        console.log(`La temperatura de ${temperatura}° es calurosa y le gustaría a Nan.`);
        break;

}

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */