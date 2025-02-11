import { generateCardsOfProducts } from "../../card/generateCardsOfProducts.js";

const getProducts = async( url ) => {

    try {
        const response = await fetch( url );
        const products = await response.json();        
        return  generateCardsOfProducts( products );          
    } catch (error) {
        console.error( error );
    }
}

export { getProducts }