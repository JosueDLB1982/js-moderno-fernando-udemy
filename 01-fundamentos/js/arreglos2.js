let juegos = ['Zelda', 'Mario', 'Metroid', 'Pac Man', 'Tetris'];

console.log(`la longitud del array juegos es ${juegos.length}`)

let ultimo = juegos[juegos.length - 1]

console.log(`El último elemento del array es ${ultimo}`)

juegos.forEach((e, i) => console.log(`EL elemento ${e} ocupa la posición ${i} del array juegos`))

juegos.push('F-Zero') // añade elemento al final

juegos.forEach((e, i) => console.log(`EL elemento ${e} ocupa la posición ${i} del array juegos`))

// añadir un elemento al inicio

juegos.unshift('Contra')
console.table(juegos)
console.log(juegos.length)

// borrar el último elemento del array

juegos.pop()
console.table(juegos)

// borrar el primer elemento del array

juegos.shift()
console.table(juegos)

let juegosBorrados = juegos.splice(1, 2) // a partir del index 1 inclusive, borra 2 elementos del array
console.log({juegosBorrados})
console.log({juegos})

// conocer la posición de un elemento dentro del array
console.log(`El juego Pac Man esta en la posición ${juegos.indexOf('Pac Man')}`)

