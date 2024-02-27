
/**
 Función calcular valor de carta
 * 
 * @param {String} card 
 * @returns {Number} valor de la carta
 */
export const cardValue = (card) => {
    const value = card.substring(0, card.length - 1); // quitamos el último caracter

    return isNaN(value) // verificamos si es un número o una letra
      ? value == "A"
      ? 11 : 10 // si es letra A su valor es 11, de lo contrario su valor es 10
      : parseInt(value); // si es un número lo convertimos de string a number
  };