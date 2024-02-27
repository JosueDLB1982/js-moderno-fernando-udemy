import _ from 'underscore'
import { createDeck, getCard, createCards, pointsAcumulator, computerTurn } from './usecases';
// Patrón módulo: encapsulamos nuestro código para protegerlo
(() => {
  // creamos una función anónima autoinvocada
  "use strict"; // habilitamos el modo uso estricto

  // haciendo esto nuestro código queda encapsulado en el scope de esta función, haciendo que las variables no sean accesibles desde la consola del navegador

  let deck = []; // Baraja vacía
  const types = ["C", "D", "H", "S"], // Tipos de carta Clubs, Diamonds, Hearts, Spades
  specialTypes = ["A", "J", "Q", "K"]; // cartas especiales

  let playersPoints = [];

  // Referencias HTML
  const btnAskCard = document.getElementById("btnAskCard"), // boton pedir carta
  btnStop = document.getElementById("btnStop"), //boton detener
  btnNewGame = document.getElementById("btnNewGame"), // boton nuevo juego
  htmlPoints = document.querySelectorAll("small"), // Indicadores de puntaje
  displayCards = document.querySelectorAll('.display-cards') // Node list para mostar cartas de forma dinámica

   const initializeGame = (playersNum = 2) => { // Por defecto será un jugador más la computadora
    console.clear() // Limpiamos la consola con cada juego nuevo
    deck = createDeck(types, specialTypes); // le asignamos al deck el retorno de la función crear deck
    playersPoints = []; // Nos aseguramos que el array que contiene los puntos de los jugadores inicie vacío
    for(let i = 0; i < playersNum; i++) { // Creamos un ciclo que nos permitirá
     playersPoints.push(0) // una posición del array por cada jugador
     htmlPoints[i].innerText = 0 // poner a 0 el marcador de puntos de cada jugador en cada nuevo juego
     displayCards[i].innerHTML = '' // limpiar el html de cartas de juegos anteriores
    }
        
    btnAskCard.disabled = false; // Habilitar los botones de pedir carta
    btnStop.disabled = false; // y el de detener
  }

  // EVENTOS:
  btnAskCard.addEventListener("click", () => { // Botón para pedir carta
    const card = getCard(deck); // llamo la función obtener carta y almaceno la carta en memoria
    const playerPoints = pointsAcumulator(card, 0, playersPoints, htmlPoints) // creo la variable que contendré los puntos del jugador y le asigno el resultado de la funcion que calcula los puntos. Le paso como argumento la carta y la posición del jugadorm en este caso index 0 por ser el primer jugador
    createCards(card, 0)
    
    // lógica para turno del jugador
    if (playerPoints >= 21) {
      btnAskCard.disabled = true; // si el jugador se pasa de 21 pierde
      btnStop.disabled = true; // ergo se desabilitan los botones de pedir carta y detener
      computerTurn(playerPoints, deck, playersPoints, htmlPoints);
    } 
  });

  btnStop.addEventListener("click", () => { // Botón para detener turno del jugador
    btnAskCard.disabled = true; // desabilita el botón pedir carta
    btnStop.disabled = true; // y el propio botón detener
    computerTurn(playersPoints[0], deck, playersPoints, htmlPoints); // invoca la funcíon turno computadora, pasando como argumento los puntos del jugador, contenidos en el index 0 del array
  });

  btnNewGame.addEventListener("click", () => { // Botón juego nuevo
    initializeGame(); // invocamos la función inicializar juego
  });
})();