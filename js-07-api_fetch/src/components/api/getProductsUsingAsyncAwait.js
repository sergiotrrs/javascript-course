
/*
Async y Await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a cómo se escribiría
 código síncrono.
*/

async function functionName () {
   await fetch( url );
}

const getProductsUsingAsyncAwait = async ( url ) =>{
    try{
      console.log("Estoy iniciando en la función con Async y Await");
      const resolve = await fetch( url );
      const products = await resolve.json();
      console.log( products );
      console.log("Finalizado la petición fetch con Async y Await");
    } catch( error ){
      console.warn("No corro, no grito, no empujo");
      console.error("Que pasó?", error );
    }
    


};

console.log("Antes de la llamada de la función");
getProductsUsingAsyncAwait("https://fakestoreapi/products");
console.log("Después de la llamada de la función");