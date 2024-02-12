console.warn('Ciclo While')

const cars = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
while(/* i < cars.length */ cars[i]) {
    if(i === 1) {
        i++
        continue
    }
    console.log(cars[i])
    i++
}
console.log('')
console.warn('Ciclo Do While')
// El ciclo do while siempre se ejecuta al menos una vez
let j = 0
do {
    console.log(cars[j])
    j++
} while(cars[j])