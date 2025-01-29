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

const temperatura = 30;

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
console.log(evaluarTemp(30));
console.log(evaluarTemp(22));
console.log(evaluarTemp(19));
console.log(evaluarTemp(13));

