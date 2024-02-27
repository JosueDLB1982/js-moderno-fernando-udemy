/**
 Función pedir carta. Verificamos que haya cartas en el deck y retornamos la última. 
 * 
 * @param {Array<String>} deck es un array de string
 * @returns {String} retorna la carta tomada del deck. Un string
 */

export const getCard = (deck) => {
    if(!deck){
        throw new Error('El deck debe ser proporcionado a la función')
    }
    return (deck.length === 0) ? alert('El deck esta vacío') : deck.pop()
  };