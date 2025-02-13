
/**
 * Validar si el nombre ingresado es válido
 * @param {string} name 
 * @return {boolean} valor true indica que el nombre es válido
 */
const checkNameInput = ( name ) =>{
    let check = true;
    if(name === undefined || name === null){
        check = false;
    } else if(name.length < 2) {
        check = false;
    }else if(name[0] === " "){
        check = false;
    }else if(!isNaN(Number(name))){
        check = false;
    } else {
        check = true;
    };
        return check;
}

export { checkNameInput };