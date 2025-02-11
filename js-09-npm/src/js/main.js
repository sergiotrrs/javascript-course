import "/src/css/styles.scss"

import { insertMainHeader } from "/src/modules/header/header";
import { insertMainFooter } from "/src/modules/footer/footer";
import { welcome } from "../pages/welcome/welcome";

/**
 * El método onload de window en JavaScript se utiliza para ejecutar 
 * una función cuando todos los elementos de una página web han 
 * sido completamente cargados, incluidos los elementos como imágenes, 
 * scripts y estilos. Es un evento asociado al objeto window que indica 
 * que el DOM (Document Object Model) y los recursos externos han terminado de cargarse.
 * 
 */
window.addEventListener( "load", () => document.getElementById("app").innerHTML = `

    ${ insertMainHeader() } 
    <main class="container text-center my-4">
        ${ welcome() }
    </main>
    ${ insertMainFooter() }
 `
);
 