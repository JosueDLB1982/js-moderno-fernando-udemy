 import _ from 'underscore'
 
/**
 * Esta función crea una nueva baraja (deck)
 * @param {Array<String>} types serán el resultado de los números del 2 al 10 concatenado a la figura de la carta C = Clubs, D = Diamonds, H = Heart, S = Spades
 * @param {Array<String>} specialTypes tipos especiales para cartas no numéricas, A, J, Q, K
 * @returns {Array<String>} retorna un deck nuevo y barajado
 */

  export const createDeck = (types, specialTypes) => {
    if( !types || !specialTypes )  throw new Error('types y specialTypes deben ser proporcionados a la función')

    const deck = []; // el deck estará siempre vacio para luego crearse
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