
/**
 *   Las props (abreviación de "properties") son parámetros 
 *   que se pasan de un componente padre a 
 *   un componente hijo para personalizar su comportamiento 
 *   o apariencia.
 * 
 *   Caracerísticas:
 *   - Son de solo lectura (inmutables dentro del componente hijo).
 *   - Se pueden pasar valores de cualquier tipo: strings, números,
 *     arrays, objetos, funciones, etc
 *   - Se pueden pasar funciones para que el componente hijo las ejecute.
 */
export const Navbar = ( props ) => {

    const cohorte = 50;

    const navbarJsx = (
    <nav>
        {/* Se imprime el número de cohorte*/}
        <h2>Cohorte {cohorte}</h2>
        <img src={props.src} alt={props.alt} />
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
    </nav>
    );

    return navbarJsx;
}

// export { Navbar };