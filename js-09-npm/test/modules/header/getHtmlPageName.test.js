import { getHtmlPageName } from "../../../src/modules/header/getHtmlPageName.js";


// test( "descripción de la prueba", ()=>{} );
test ("Debería retornar el nombre de la página html", ()=>{
    
    const filePath = "src/pages/home.html";
    const expected = "home.html";
    
    const result = getHtmlPageName( filePath );
  
 /*
 * - Expect te da acceso a un número de marcadores que te permiten validar diferentes cosas.
 * - Los matchers en Jest son funciones que permiten comparar valores esperados con valores reales en los tests
 * - toBe(): compara con igualdad estricta (===) 
 */
    expect( result ).toBe( expected );
    expect( getHtmlPageName("/index.html") ).toBe( "index.html" );
    expect( getHtmlPageName("/") ).toBe( "" );
    expect( getHtmlPageName("") ).toBe( "" );

} );