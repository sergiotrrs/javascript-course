/**
 *  Clase producto
 *  El nombre de las clases(plantillas) debe ser con UpperCamelCase
 *  Se recomienda que el nombre sea un sustantivo.
 *
 *  Encapsulamiento: La encapsulación ayuda a proteger la integridad
 *  de los datos y asegura que un objeto mantenga su estado interno
 *  consistente. Al limitar el acceso directo a los datos internos
 *  de un objeto, se reduce la posibilidad de que estos datos sean
 *  modificados de manera incorrecta o que se produzcan efectos
 *  secundarios no deseados.
 *
 *
 * */

class Product {
  // Determinar los atributos de mi clase
  #productName;
  #price;
  #brand;

  // El método constructor nos ayuda a inicializar un objeto
  constructor(productName = "---", price, brand) {
    this.#productName = productName;
    this.#price = price;
    this.#brand = brand;
  }

  // Métodos setters y getters
  set productName(newProductName) {
    // TODO continuar solo si cumple
    // ciertas condiciones
    this.#productName = newProductName;
  }

  get productName() {
    return this.#productName.toUpperCase();
  }

  // Generar el set y get de #price y #brand
/*   set price(price) {
    this.#price = price;
  } */
  get price() {
    return this.#price;
  }
  set brand(brand) {
    this.#brand = brand;
  }
  get brand() {
    return this.#brand;
  }

  printPrice() {
    return `${this.productName} cuesta $${this.#price} MxN`;
  }

  card() {
    return `
        <h2>${this.productName}</h2>
        <p>Llévatelo por ${this.price}</p>
    `
  }
}

export { Product };
