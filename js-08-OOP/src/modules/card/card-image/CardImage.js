
class CardImage {

    #description;

    constructor(imageName, description, baseUrl = '/public/gaming-products-images/') {
        this.imageName = imageName;
        this.#description = description;
        this.baseUrl = baseUrl;
    }

    // Method to generate the full URL for the image
    getImageUrl() {
        return `${this.baseUrl}${this.imageName}`;
    }

    get description() {
        return `${this.#description}`;
    }

    set description( description ) {
        this.#description = description;
    }
}

export { CardImage };