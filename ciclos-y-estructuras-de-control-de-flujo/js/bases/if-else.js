let a = 5;

if(a > 10) {
    console.log('A es mayor a 10')
} else {
    console.log('A es menor a 10')
}
console.log('Fin del programa')

const hoy = new Date()
const semana = /* {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'vierens',
    6: 'sábado',
} */

['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado',]; /* Más eficiente usar un array*/
let dia = hoy.getDay()

console.log(hoy)
console.log(`Hoy es ${semana[dia]}` || 'Día no definido')