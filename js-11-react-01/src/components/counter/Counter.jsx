

/**
 * 
 *  Un componente actualiza si interfaz cuando:
 *  - Cambia su estado: Si el componente interno cambia su estado, se vuelve a renderizar.
 *  - Cambia sus props: Si el componente padre le pasa nuevas props, se vuelve a renderizar.
 * 
 *  Para cambiar el estado del componente se usa  el hook useState.
 * 
 */

import { useState } from "react";

export const Counter = () => {

  const [ count, setCount ] = useState( 0 ); // [ 0, callback]
  /*
   useState
Renderización  useState()   count    setCount()  
 1                0           0      callback( count + 1 )->1     
 2                -           1      callback( count + 1 )->2    
 3                -           2  
 */
 
  const handleIncrement = () => {
    console.log("Valor de counter: ", count);
    setCount( count + 1  );
  }

  /**
   *  Función para decrementar el valor del contador.
   *  Invocar la función con el botón de Drecrement
   * */ 
  




  return (
    <div>
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={ ()=> handleIncrement("parámetro")   }   >Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
    </div>
  )
}
