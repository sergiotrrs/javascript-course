

const handlerRegister = (element) => {

    element.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Manejo del botón registro");
  });

};

export { handlerRegister };
