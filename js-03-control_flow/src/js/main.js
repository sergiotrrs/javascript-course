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
    console.log(
      `La temperatura de ${temperatura}° es calurosa y le gustaría a Nan.`
    );
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
const velocidadVentilador = (velocidad) => {
  switch (velocidad) {
    case 0:
      return `Apagado`;
    case 1:
      return `Baja`;
    case 2:
      return `Media`;
    case 3:
      return `Alta`;
    default:
      return `Valor desconocido`;
  }
};
console.log(velocidadVentilador(0));
console.log(velocidadVentilador(1));
console.log(velocidadVentilador(2));
console.log(velocidadVentilador(3));
console.log(velocidadVentilador(8));

const velocidadVenti = (velocidad) => {
  if (velocidad === 0) {
    return `Apagado`;
  } else if (velocidad === 1) {
    return `Baja`;
  } else if (velocidad === 2) {
    return `Media`;
  } else if (velocidad === 3) {
    return `Alta`;
  } else {
    return `Valor desconocido`;
  }
};
console.log(velocidadVenti(0));
console.log(velocidadVenti(1));
console.log(velocidadVenti(2));
console.log(velocidadVenti(3));
console.log(velocidadVenti(8));

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
const pagoTarjetaCredito = true;
let msj;

if (pagoTarjetaCredito) {
  msj = "A realizado el pago de su TC";
} else {
  msj = "No ha realizado el pago de su TC";
}

// Operador ternario
msj = pagoTarjetaCredito === true? "A realizado el pago de su TC" : "No ha realizado el pago de su TC";
console.log(msj);

console.log(pagoTarjetaCredito ? "Pagado" : "No pagado");

/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */
const verificarEdad = (edad) => edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(verificarEdad(18));
console.log(verificarEdad(17));

// ----------------- Ejemplo de if-else ---------------------
const evaluarEdadConIfElse = (edad) => {
  if (edad >= 18) {
    return "Eres mayor de edad";
  } else {
    return "Eres menor de edad";
  }
};

console.log(evaluarEdadConIfElse(20)); // Eres mayor de edad



// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/
// let mes = Number(prompt("Ingresa un número de mes (1 al 12):"));
let mes = 2;
let estacion; 
switch ( mes ){
    case 12: case 1: case 2:
        estacion = `Invierno`;
        break;
    case 3:
    case 4:
    case 5:
        estacion = `Primavera`;
        break;
    case 6:
    case 7:
    case 8:
        estacion = `Verano`;
        break;
    case 9:
    case 10:
    case 11:
        estacion = `Otoño`;
        break;
    default:
        estacion = `Mes incorrecto`;
        break;
}
document.getElementById("title").innerText = estacion;

let season = Number(prompt("¿Escribe el mes en curso (1-12) ?"));
const estAño = (season) => {
    if (season >= 3 && season <= 5) {
        return "Primavera 🌻";
    } else if (season >= 6 && season <= 8) {
        return "Verano 🏖️";
    } else if (season >= 9 && season <= 11) {
        return "Otoño 🍂";
    } else if (season === 12 || season === 1 || season == 2) {
        return "Invierno ⛄";
    } else {
        return "Número de mes no válido ❌";
    }
}; 
// alert( estAño(season) );

