import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";

/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */
const getUsersUsingAsyncAwait = (url) => {

    const createCards = ( usersArray )=>{
        document.getElementById("cards").innerHTML = generateUsersCards( usersArray);
    }

    
  };
  // getUsersUsingAsyncAwait("https://reqres.in/api/users?delay=5&page=1"); // Página 1 con retardo de 5 segundos
  getUsersUsingAsyncAwait("https://reqres.in/api/users?page=2"); // Página 2, sin retardo