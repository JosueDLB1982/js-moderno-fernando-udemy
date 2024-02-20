// Código optimizado y refactorizado
// rama de desarrollo

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

  // Función para crear baraja nueva
  const createDeck = () => {
    deck = []; // el deck estará siempre vacio para luego crearse
    for (let i = 2; i <= 10; i++) {
      // obtenemos números del 2 al 10
      for (let type of types) {
        // obtenemos los tipos del arreglo types
        deck.push(`${i}${type}`); // Concatenammos los valores y los agregamos al deck
      }
    }

    for (let type of types) {
      // obtenemos las cartas especiales J, K; Q, A
      for (let specialType of specialTypes) {
        deck.push(`${specialType}${type}`);
      }
    }

    return  _.shuffle(deck); // usamos la librería underscore, con esta función barajamos el deck ñara tener siempre una baraja distinta y lo retornamos
  };


  const initializeGame = (playersNum = 2) => { // Por defecto será un jugador más la computadora
    console.clear() // Limpiamos la consola con cada juego nuevo
    deck = createDeck(); // le asignamos al deck el retorno de la función crear deck
    playersPoints = []; // Nos aseguramos que el array que contiene los puntos de los jugadores inicie vacío
    for(let i = 0; i < playersNum; i++) { // Creamos un ciclo que nos permitirá
     playersPoints.push(0) // una posición del array por cada jugador
     htmlPoints[i].innerText = 0 // poner a 0 el marcador de puntos de cada jugador en cada nuevo juego
     displayCards[i].innerHTML = '' // limpiar el html de cartas de juegos anteriores
    }
        
    btnAskCard.disabled = false; // Habilitar los botones de pedir carta
    btnStop.disabled = false; // y el de detener
  }

  // Función pedir carta. Verificamos que haya cartas en el deck y retornamos la última. 
  const getCard = () => {
    return (deck.length === 0) ? alert('El deck esta vacío') : deck.pop()
  };

  // Función calcular valor de carta
  const cardValue = (card) => {
    const value = card.substring(0, card.length - 1); // quitamos el último caracter

    return isNaN(value) // verificamos si es un número o una letra
      ? value == "A"
      ? 11 : 10 // si es letra A su valor es 11, de lo contrario su valor es 10
      : parseInt(value); // si es un número lo convertimos de string a number
  };

  //El 0 siempre será el primer jugador y el último index será siempre el cpu
  const pointsAcumulator = (card, turn) => {
    playersPoints[turn] += cardValue(card); //llamo la función valor carta, le paso la carta recien obtenida y acumulo su valor
    htmlPoints[turn].innerText = playersPoints[turn]; // muestro el puntaje en el HTML
    return playersPoints[turn]
  }

  // Función para crear las imagenes de las cartas
  const createCards = (card, turn) => {
    const imgCard = document.createElement("img"); // creo una imagen
    imgCard.src = `assets/cards/${card}.png`; // le doy el src
    imgCard.classList.add("card"); // le aplico la clase
    imgCard.alt = `image ${card}`;
    displayCards[turn].append(imgCard); // inserto la img en el HTML
  }

  // Función para determinar jugador
  const determineWinner = () => {
    const [minimumPoints, computerPoints] = playersPoints // usamos desestructuración de arrays para extraer los valores del array playersPoints 
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
      }, 100);
  }

  // Turno de la computadora
  const computerTurn = (minimumPoints) => {
    let computerPoints = 0;
    do {
      const card = getCard(); // llamo la función y almaceno la carta en memoria
      computerPoints = pointsAcumulator(card, playersPoints.length - 1); // Calculo los puntos de la computadora, su index será siempre el último del array contenedor
      createCards(card,playersPoints.length - 1); // invoco la función que crea las cartas pasando como argumento la carta y el jugador, en este caso la computadora
    } while (computerPoints < minimumPoints && minimumPoints <= 21);
    determineWinner() // al terminar el turno de la computadora invoco la función que determina el ganador del juego
  };

  // EVENTOS:
  btnAskCard.addEventListener("click", () => { // Botón para pedir carta
    const card = getCard(); // llamo la función obtener carta y almaceno la carta en memoria
    const playerPoints = pointsAcumulator(card, 0) // creo la variable que contendré los puntos del jugador y le asigno el resultado de la funcion que calcula los puntos. Le paso como argumento la carta y la posición del jugadorm en este caso index 0 por ser el primer jugador
    createCards(card, 0)
    
    // lógica para turno del jugador
    if (playerPoints > 21) {
      btnAskCard.disabled = true; // si el jugador se pasa de 21 pierde
      btnStop.disabled = true; // ergo se desabilitan los botones de pedir carta y detener
      computerTurn(playerPoints);
    } else if (playerPoints === 21) {
      btnAskCard.disabled = true; // si el jugador logra 21 tiene la mejor puntuación,
      btnStop.disabled = true; // ergo se desabilitan de igual manera los botones
      computerTurn(playerPoints); // puesto que el jugador alcanzó 21, invocamos la función de turno de la computadora
    }
  });

  btnStop.addEventListener("click", () => { // Botón para detener turno del jugador
    btnAskCard.disabled = true; // desabilita el botón pedir carta
    btnStop.disabled = true; // y el propio botón detener
    computerTurn(playersPoints[0]); // invoca la funcíon turno computadora, pasando como argumento los puntos del jugador, contenidos en el index 0 del array
  });

  btnNewGame.addEventListener("click", () => { // Botón juego nuevo
    initializeGame(); // invocamos la función inicializar juego
  });
})();