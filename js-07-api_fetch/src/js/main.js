/*
  Uso del local Storage.

  LocalStorage es una API de almacenamiento en el navegador que permite guardar 
  datos de forma persistente sin fecha de expiración.

  Características:
    - Almacena hasta 5MB por dominio.
    - Los datos persisten incluso si el usuario cierra el navegador.
    - Puedes guardar objetos con JSON.stringify().

  Métodos clave:
    localStorage.setItem("clave", "valor") → Guarda un dato.
    localStorage.getItem("clave") → Obtiene un dato.
    localStorage.removeItem("clave") → Elimina un dato.
    localStorage.clear() → Borra todo el almacenamiento.

*/
localStorage.setItem(
  "miGato",
  JSON.stringify({ name: "Sushi", age: 6, color: "black" })
);
let datosGato = localStorage.getItem("miGato");
let objetoGato = JSON.parse(datosGato);
console.log(objetoGato.name);

/*
  Programación síncrona.
 
  Ejecutar una tarea después de otra, de manera secuencial.
  Si una tarea tarda mucho tiempo en completarse, puede bloquear el hilo
  de ejecución.

*/

const primerPaso = () => {
  console.log("01 - Inicio de mi programa");
};

const segundoPaso = () => {
  console.log("02 - Desarrollo de mi programa");
  for (let i = 0; i < 1_000_000_000; i++) {
    i * 2;
  }
};

const tercerPaso = () => {
  console.log("03 - Fin de mi programa");
};

/*
primerPaso();
segundoPaso(); // Este proceso demora tiempo
tercerPaso();
*/

/*
 Programación asíncrona.

 Las tareas no se bloquean entre sí.
 La programación asíncrona es fundamental en JavaScript para
  realizar operaciones no bloqueantes, como peticiones HTTP, 
  operaciones de lectura/escritura de archivos, etc., 
  lo que mejora el rendimiento y la capacidad de respuesta 
  de las aplicaciones.

  setTimeout()
   Establece un temporizador que ejecuta una función de callback
   una vez que expire el temporizador

   sintaxis:
     setTimeout( fncCallback, tiempo_ms, argumentos_fnc );
     setTimeout( ()=>{}  , tiempo_ms );

*/

const saludo = ( nombre ) => console.log(`Hola ${ nombre }, Se te antoja un elote?`);

const usoDeSetTimeOut = ( nombrePersona, titulo ) => { 
    setTimeout( saludo, 5000, `${titulo}  ${nombrePersona}` );
};

console.log("01-Inicio de mi secuencia");
usoDeSetTimeOut("Patricio Estrella", "Dr. Profesor")
console.log("03-Fin de mi secuencia");

// ------------------------- setInterval ------------------------
// Ejecuta una función de manera reiterada con un tiempo de retardo fijo