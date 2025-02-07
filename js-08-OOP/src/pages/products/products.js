import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";
import { getProducts } from "../../modules/api/getProducts/getProducts.js";


insertMainHeader();
insertMainFooter();

/**
 * Lee nuestro archivo JSON para avanzar en nuestro desarrollo del frontend
 */
getProducts("/public/json/gaming-products.json");

/**
 * En la semana 12, al tener lista nuestra API en SpringBoot 
 * Se usaría la URL que se genere en el despliegue de nuestra API
 */
// getProducts("https://fakestoreapi.com/products");






/*
JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos. 
Algunas de sus características incluyen:

-Es un formato de texto plano y fácil de leer.
-Utiliza una estructura de pares clave-valor para representar datos.
-Utiliza comillas dobles para encerrar las claves y los valores.
-Utiliza comas para separar los pares clave-valor.
-Utiliza corchetes para representar arreglos.
-Utiliza llaves para representar objetos.
-Utiliza valores booleanos, números, cadenas, arreglos y objetos 
para representar datos.
-Es independiente del lenguaje, ya que se puede utilizar en 
una variedad de lenguajes de programación.
-Es ampliamente utilizado en aplicaciones web y móviles para transmitir 
y recibir datos de un servidor.
-Es un estándar abierto y no tiene restricciones de uso ni de licencia.

Es importante mencionar que JSON es un subconjunto de JavaScript y por lo tanto, 
es una forma de representar objetos y arreglos en JavaScript, 
pero no es lo mismo que JavaScript. 
JSON solo puede representar un subconjunto de los valores que 
se pueden representar en JavaScript.

JSON tiene algunas restricciones de datos que debes tener en cuenta al trabajar con él:

-Solo puede contener pares clave-valor: cada elemento en un objeto JSON 
 debe ser un par clave-valor.
-Las claves deben ser cadenas: las claves en un objeto JSON deben 
 ser cadenas y deben estar encerradas entre comillas dobles.
-Los valores pueden ser de ciertos tipos: los valores en un objeto 
 JSON pueden ser números, cadenas, booleanos, objetos, arreglos o null. 
 No se permiten otros tipos de datos como funciones o fechas.
-No se permite la notación de punto flotante: los números en 
 JSON deben ser enteros o de punto flotante en notación decimal. 
 No se permiten notaciones científicas.
-Las cadenas deben estar encerradas en comillas dobles: las cadenas 
 en JSON deben estar encerradas entre comillas dobles. No se permiten comillas simples.
-No se permite el uso de comentarios: JSON no admite comentarios, 
 así que si necesitas incluir información adicional sobre tus datos, 
 tendrás que utilizar otro medio para hacerlo.
-Las comas son necesarias: cada elemento en un objeto o arreglo 
JSON debe estar separado por una coma, excepto el último.



*/