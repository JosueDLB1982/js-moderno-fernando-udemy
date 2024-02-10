// función declarativa

function greet(saludo) {
    console.log(`Hola a todos, ${saludo}`)
}
greet('Mi nombre es Josue')

function sum(a, b) {
    return a + b
}
console.log(sum(3, 7))

//anónima
const multiply = function(a, b) {
    console.log(arguments) // devuelve todos los argumentos que recibe la función
    return a * b
}
console.log(multiply(2, 3, 7, 'Rojo', true))

// funciones flecha

const subtarct = (a, b) => a > b ? `${a} es mayor que ${b} y su resta es ${a - b}` : `${b} es mayor que ${a} y su resta es ${b - a}`

console.log(subtarct(3, 6))
console.log(subtarct(7, 6))

const getAleatorio = () => Math.random()
console.log(getAleatorio())
