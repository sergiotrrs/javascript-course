import { CardImage } from "../card-image/CardImage.js";



class ProductCard {

    constructor(id, title, description, price, category, image, rating) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = new CardImage(image, title);
        this.rating = rating; // { rate: number, count: number }
    }

    // Método para generar el HTML de la tarjeta
    generateHTML() {
        return `
            <div class="col-12 col-md-6 col-lg-4 p-2">
                <div class="card h-100" > 
                    <figure class="p-1" >                   
                        <img src="${this.image.getImageUrl()}" class="card-img-top product-img" alt="${this.image.description}">
                    <figure> 
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.description}</p>
                        <p class="card-text"><strong>Price: $${this.price}</strong></p>
                        <p class="card-text"><em>Rating: ${this.rating.rate} (${this.rating.count} reviews)</em></p>                        
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        `;
    }



}

export { ProductCard }