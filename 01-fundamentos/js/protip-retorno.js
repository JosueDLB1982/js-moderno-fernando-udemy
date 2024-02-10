function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido,
    }
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido})


const persona = crearPersona('Josue', 'Lopez')
console.log(persona)

const persona2 = crearPersona2('David', 'Borjas')
console.log(persona2)

function imprimeArgumentos() {
    return arguments
}
console.log(imprimeArgumentos(2, true, 'Josue'))


// con funciones flecha usamos el operador rest para expandir todos los argumentos y que los presente como un array. No puede ir nada despues del operador rest
const imprimeArgumentos2 = (...args) => (args)
const [age, casado, nombre] = imprimeArgumentos2(35, false, 'Gojo')
console.log({nombre, age, casado})

const {apellido: lastName} = crearPersona2('Pedro', 'Pascal')
console.log({lastName})

//desestructuración de argumentos

const tony = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    suits: [
        'Mark I',
        'Mark V',
        'Hulkbuster',
    ],
};

const imprimePropiedades = ({name, codeName, alive, age, suits}) => {
    // console.log(personaje.name)
    // console.log(performance.codeName)
    // console.log(personaje.alive)
    // console.log(personaje.age)
    // console.log(personaje.suits)


    // console.log({name})
    // console.log({codeName})
    // console.log({alive})
    // console.log({age})
    // console.log({suits})

    return {
        codeName,
        name,
        alive,
        age,
        suits
    }
}
console.log(imprimePropiedades(tony))