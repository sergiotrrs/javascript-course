

const insertCardsToHTML = ( cards, sectionId = "cards" ) => {

    const section = document.getElementById( sectionId );
    section.innerHTML = cards;

}

export { insertCardsToHTML };