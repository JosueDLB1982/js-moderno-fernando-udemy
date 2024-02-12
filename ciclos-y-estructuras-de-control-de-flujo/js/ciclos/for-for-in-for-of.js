const heros = ['Batman', 'Superman', 'Wonder Woman', 'Aquaman',];

console.warn('For tradicional')

for(let i = 0; i < heros.length; i++) {
    console.log(heros[i])
}

console.warn('For in')

for(let i in heros) {
    console.log(i) //devuelve los index de cada elemento
    console.log(heros[i])
}

console.warn('for of')

for(let hero of heros) {
    console.log(hero)
}