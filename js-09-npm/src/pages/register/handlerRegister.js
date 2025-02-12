

const handlerRegister = (element) => {

    element.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Manejo del botón registro");
    // TODO verificar los inputs del formulario
  });

};

export { handlerRegister };
