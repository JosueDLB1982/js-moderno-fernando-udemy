// Código sin optimizar
// rama de desarrollo

let = deck = []; // Baraja vacía
const types = ['C', 'D', 'H', 'S']; // Tipos de carta Clubs, Diamonds, Hearts, Spades
const specialTypes = ['A', 'J', 'Q', 'K'] // cartas especiales

let playerPoints = 0,
    computerPoints = 0

// Referencias HTML
const btnAskCard = document.getElementById('btnAskCard') // boton pedir carta
const btnStop = document.getElementById('btnStop') //boton detener
const btnNewGame = document.getElementById('btnNewGame') // boton nuevo juego
const htmlPoints = document.querySelectorAll('small') // indicadores de puntaje
const playerCards = document.getElementById('player-cards') // contenedor de cartas del jugador
const computerCards = document.getElementById('computer-cards') // contenedor de cartas de la computadora

// Función para crear baraja nueva
const createDeck = () => {
    deck = [] // el deck estará siempre vacio para luego crearse
    for(let i = 2; i <= 10; i++) { // obtenemos números del 2 al 10
        for(let type of types) { // obtenemos los tipos del arreglo types
            deck.push(`${i}${type}`) // Concatenammos los valores y los agregamos al deck
        }
    }

    for(let type of types) { // obtenemos las cartas especiales J, K; Q, A
        for(let specialType of specialTypes) {
            deck.push(`${specialType}${type}`)
        }
    }

    deck = _.shuffle(deck) // usamos la librería underscore, con esta función barajamos el deck
}
createDeck()

// Función pedir carta
const getCard = () => {
    let cardTaken = deck.pop()
    return cardTaken
}

// Función calcular valor de carta
const cardValue = (card) => {
    const value = card.substring(0, card.length - 1) // quitamos el último caracter
    
    return isNaN(value) ? // verificamos si es un número o una letra
           value == 'A' ? 11 : 10 // si es letra A su valor es 11, de lo contrario su valor es 10
           : parseInt(value) // si es un número lo convertimos de string a number
}

// Turno de la computadora
const computerTurn = (minimumPoints) => {
    do {
        const card = getCard() // llamo la función y almaceno la carta en memoria
        computerPoints += cardValue(card) //llamo la función valor carta, le paso la carta recien obtenida y acumulo su valor
        htmlPoints[1].innerText = computerPoints // muestro el puntaje en el HTML

        const imgCard = document.createElement('img')  // creo una imagen
        imgCard.src = `assets/cards/${card}.png` // le doy el src
        imgCard.classList.add('card') // le aplico la clase
        imgCard.alt = `image ${card}`
        computerCards.append(imgCard) // inserto la img en el HTML

        if(minimumPoints > 21) {
            break // si me paso de 21 puntos sale del ciclo
        }
    } while((computerPoints < minimumPoints) && minimumPoints <= 21)
   
    setTimeout(() => {
        if(minimumPoints === computerPoints) {
            console.warn('No hay ganador')
            alert('Nadie gana')
        } else if((minimumPoints > 21) || ((computerPoints <= 21) && (computerPoints > minimumPoints))) {
            console.warn('Perdiste el juego')
            alert('Has perdido')
        } else if(computerPoints > 21) {
            console.warn('Ganaste el juego')
            alert('Has ganado')
        }
    }, 45);
}

// EVENTOS:

btnAskCard.addEventListener('click', () => {
    const card = getCard() // llamo la función y almaceno la carta en memoria
    playerPoints += cardValue(card) //llamo la función valor carta, le paso la carta recien obtenida y acumulo su valor
    
    htmlPoints[0].innerText = playerPoints // muestro el puntaje en el HTML

    const imgCard = document.createElement('img')  // creo una imagen
    imgCard.src = `assets/cards/${card}.png` // le doy el src
    imgCard.classList.add('card') // le aplico la clase
    imgCard.alt = `image ${card}` // descripción de la imagen
    playerCards.append(imgCard) // inserto la img en el HTML

    // lógica para turno del jugador
    if((playerPoints > 21)) {
        btnAskCard.disabled = true
        btnStop.disabled = true
        computerTurn(playerPoints)
    } else if(playerPoints === 21) {
        btnAskCard.disabled = true
        btnStop.disabled = true
        computerTurn(playerPoints)
    } 
})

btnStop.addEventListener('click', () => {
    btnAskCard.disabled = true
    btnStop.disabled = true
    computerTurn(playerPoints)
})

btnNewGame.addEventListener('click', () => {
    console.clear()
    createDeck()
    playerPoints = 0
    computerPoints = 0
    htmlPoints[0].innerText = 0
    htmlPoints[1].innerText = 0
    playerCards.innerHTML = ''
    computerCards.innerHTML = ''
    btnAskCard.disabled = false
    btnStop.disabled = false
})