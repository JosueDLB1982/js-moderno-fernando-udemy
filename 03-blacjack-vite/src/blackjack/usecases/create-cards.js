
/**
 Función para crear las imagenes de las cartas
 * 
 * @param {String} card carta tomada del deck cuya imagen debemos crear
 * @param {Number} turn indica el turno del jugador
 */
export const createCards = (card, turn) => {
    const displayCards = document.querySelectorAll('.display-cards') // Node list para mostar cartas de forma dinámica
    const imgCard = document.createElement("img"); // creo una imagen
    imgCard.src = `./assets/cards/${card}.webp`; // le doy el src
    imgCard.classList.add("card"); // le aplico la clase
    imgCard.alt = `image ${card}`;
    displayCards[turn].append(imgCard); // inserto la img en el HTML
  }