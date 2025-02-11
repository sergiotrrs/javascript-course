import { Product } from "./Product.js";

/**
 * Herencia: mecanismo que permite a un objeto basarse en otro 
 * objeto existente para heredar propiedades y métodos. 
 * Esto permite la reutilización de código y la creación 
 * de relaciones entre objetos, lo que facilita la 
 * organización y la estructura del código.
 * 
 * Para heredar en la declaración de la clase se usa la palabra extends
 */
class Mouse extends Product {
    // Velocidad de respuesta
    #dpi

    constructor (productName, price, brand, dpi){
        super( productName, price, brand )
        this.#dpi = dpi;
    }

    set dpi( dpi ){
        this.#dpi = dpi;
    }

    get dpi(){
        return `${this.#dpi} dpis`;
    }

    // sobreescritura de método
    card() {
        return `
            <h2>${this.productName}</h2>
            <h3>${this.dpi}</h3>
            <p>Llévatelo por ${this.price}</p>
        `
      }

}

export { Mouse };