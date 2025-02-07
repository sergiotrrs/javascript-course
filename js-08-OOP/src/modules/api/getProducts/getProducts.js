import { generateCardsOfProducts } from "../../card/generateCardsOfProducts.js";
import { insertCardsToHTML } from "../../card/insertCardsToHTML.js";


const getProducts = async( url ) => {

    try {
        const response = await fetch( url );
        const products = await response.json();
        const cards = generateCardsOfProducts( products );
        insertCardsToHTML( cards );            
    } catch (error) {
        console.error( error );
    }
}

export { getProducts }