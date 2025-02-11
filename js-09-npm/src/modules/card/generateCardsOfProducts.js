import { ProductCard } from "./product-card/ProductCard.js";

const generateCardsOfProducts = (products) => {
  const productsObj = products.map((product) => {
    const newProduct = new ProductCard(
      product.id,
      product.title,
      product.description,
      product.price,
      product.category,
      product.image,
      product.rating
    );

    return newProduct.generateHTML();
  });

  return productsObj.join("");
};

export { generateCardsOfProducts };
