// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

const personaje = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    suits: [
        'Mark I',
        'Mark V',
        'Hulkbuster',
    ],
    address: {
        zip: '1080, 90265',
        location: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War'
};

console.log(personaje)
console.log(personaje.name)
console.log(personaje['name'])
console.log(personaje.age)
console.log(personaje['coords'])
console.log(personaje.coords.lat)
console.log(personaje.coords['lng'])
console.log(personaje['coords'].lat)
console.log(personaje['suits'].length)
console.log(personaje.suits[personaje.suits.length - 1])

const x = 'alive'
console.log(personaje[x])
console.log(personaje)
console.log(personaje['ultima pelicula'])

delete personaje.codeName

console.log(personaje)

personaje.married = false

const entriesPares = Object.entries(personaje)
console.log(entriesPares)

// bloquear las llaves principales de un objeto

Object.freeze(personaje)
delete personaje["ultima pelicula"]
console.log(personaje)

personaje.address.location = 'Venezuela' // si puedo cambiar los valores de los objetos internos

console.table(personaje)

// obtener todas las propiedades de un objeto

const property = Object.getOwnPropertyNames(personaje)
console.log(property)

// obtener los valores de las llaves
const values = Object.values(personaje)
console.log(values)