const frutas = ['Manzana', 'Pera', 'Piña'];

// de esta forma creamos nuevos arrays a partir de otros, rompiendo la referencia
const otrasFrutas = ['Mango', ...frutas, 'Higo', 'Kiwi'];
// const otrasFrutas = [...frutas, 'Mango'];
console.table({frutas, otrasFrutas})