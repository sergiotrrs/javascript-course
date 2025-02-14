/**
 *
 *  Un componente actualiza si interfaz cuando:
 *  - Cambia su estado: Si el componente interno cambia su estado, se vuelve a renderizar.
 *  - Cambia sus props: Si el componente padre le pasa nuevas props, se vuelve a renderizar.
 *
 *  Para cambiar el estado del componente se usa  el hook useState.
 *
 *  Los Hooks son funciones especiales que permiten usar el estado y
 *  otras características de React en componentes funcionales. Los más usados son:
 *
 *  useState → Manejo de estado local.
 *  useEffect → Efectos secundarios.
 *  useContext → Contexto global.
 *  useRef → Referencias a elementos o valores persistentes.
 *  useMemo / useCallback → Optimización de rendimiento.
 *
 */

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0); // [ 0, callback]
  /*
   useState
Renderización  useState()   count    setCount()  
 1                0           0      callback( count + 1 )->1     
 2                -           1      callback( count + 1 )->2    
 3                -           2  
*/

  const handleIncrement = () => {
    console.log("Valor de counter: ", count);
    setCount(count + 1);
  };

  /**
   *  Función para decrementar el valor del contador.
   *  Invocar la función con el botón de Decrement
   * */
  const handleDecrement = () => {
    console.log("Valor de counter: ", count);
    setCount(count - 1);
  };
  // Funcion para el reset
  const handleReset = () => {
    // console.log("Valor de counter: ", count );
    setCount(0);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => handleIncrement("parámetro")}>Increment</button>
      <button onClick = { () => {handleDecrement() } }>Decrement</button>
      <button onClick = { () => {handleReset() } }>Reset</button>
    </div>
  );
};
