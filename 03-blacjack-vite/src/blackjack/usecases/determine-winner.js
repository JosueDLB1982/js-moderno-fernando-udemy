/**
 Función para determinar jugador
 * 
 * @param {Number} minimumPoints puntos mínimos que necesita la computadora para ganar. 
 * @param {Number} computerPoints puntos de la computadora
 */

export const determineWinner = (minimumPoints, computerPoints) => {
    if(!minimumPoints || !computerPoints) {throw new Error('Se requieren los minimumPoints y computerPoints')}
    setTimeout(() => {
        if (minimumPoints === computerPoints) {
          console.warn("No hay ganador");
          alert("Nadie gana");
        } else if (
          minimumPoints > 21 || (computerPoints <= 21 && computerPoints > minimumPoints)) {
          console.warn("Perdiste el juego");
          alert("Has perdido");
        } else if (computerPoints > 21) {
          console.warn("Ganaste el juego");
          alert("Has ganado");
        }
      }, 1500);
  }