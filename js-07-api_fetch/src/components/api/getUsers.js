/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 * 
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */
const getUsers = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((users) => console.log(users.data))
      .catch((error) => console.log(error))
      .finally(() => console.log("He terminado"));
  };
  getUsers("https://reqres.in/api/users?delay=5&page=1"); // Página 1 con retardo de 5 segundos
  getUsers("https://reqres.in/api/users?page=2"); // Página 2, sin retardo