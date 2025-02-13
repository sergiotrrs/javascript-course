import { palindrome } from "../../../src/pages/register/palindrome.js"

test("Verificar que la palabra ingresada sea un palíndromo", ()=>{
   expect( palindrome("oso") ).toBeTruthy();
   expect( palindrome("reconocer") ).toBeTruthy();
   expect( palindrome("Anita lava la tina") ).toBeTruthy();   

});


test("Verificar que la palabra ingresada No se un palíndromo", ()=>{
    expect( palindrome("Aguacate") ).toBeFalsy();
    expect( palindrome("ay mi cabeza") ).toBeFalsy();
    expect( palindrome("") ).toBeFalsy();
    expect( palindrome(" ") ).toBeFalsy();
 
 });