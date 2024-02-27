import { cardValue } from "./card-value";

/**
 El 0 siempre será el primer jugador y el último index será siempre el cpu
 * 
 * @param {String} card la carta cuyo valor será calculado
 * @param {Number} turn cada index representa una posición y a su vez es el número de jugador
 * @param {Number} playersPoints los puntos del jugador respectivo
 * @param {HTMLElement} htmlPoints representación de los puntos en el espacio respectivo del html
 * @returns {Number} total de puntos de cada jugador en cada carta tomada
 */

export const pointsAcumulator = (card, turn, playersPoints, htmlPoints) => {
  if(!card || !playersPoints || !htmlPoints) {throw new Error('Se deben recibir: card, turn, playersPoints y htmlPoints')}
    playersPoints[turn] += cardValue(card); //llamo la función valor carta, le paso la carta recien obtenida y acumulo su valor
    htmlPoints[turn].innerText = playersPoints[turn]; // muestro el puntaje en el HTML
    return playersPoints[turn] // puntaje del jugador
  }