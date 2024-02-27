import { getCard, pointsAcumulator, createCards, determineWinner } from './'

/**
 Turno de la computadora
 * 
 * @param {Number} minimumPoints puntos mínimos requeridos por la computadora para ganar
 * @param {Array<String>} deck baraja de cartas
 * @param {Number} playersPoints puntos de cada jugador
 * @param {HTMLElement} htmlPoints representacion de los puntos en el HTML
 */

export const computerTurn = (minimumPoints, deck, playersPoints, htmlPoints) => {
    if(!minimumPoints || !deck || !playersPoints || !htmlPoints) {throw new Error('Se deben proporcionar: minimumPoints, deck, playersPoints y htmlPoints')}
    let computerPoints = 0;
    do {
      const card = getCard(deck); // llamo la función y almaceno la carta en memoria
      computerPoints = pointsAcumulator(card, playersPoints.length - 1, playersPoints, htmlPoints); // Calculo los puntos de la computadora, su index será siempre el último del array contenedor
      createCards(card, playersPoints.length - 1); // invoco la función que crea las cartas pasando como argumento la carta y el jugador, en este caso la computadora
    } while (computerPoints < minimumPoints && minimumPoints <= 21);
    determineWinner(minimumPoints, computerPoints) // al terminar el turno de la computadora invoco la función que determina el ganador del juego
  };