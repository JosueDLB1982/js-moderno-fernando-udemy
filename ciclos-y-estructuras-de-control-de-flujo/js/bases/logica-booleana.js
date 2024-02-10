const regresaTrue = () => {
    console.log('Regresa true')
    return true
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false
}

console.warn('Operador and &&')

// si la primera es falsa no pasa a la segunda
console.log(regresaFalse() && regresaTrue())

console.log('_______________')

console.log(regresaTrue() && regresaFalse())

console.warn('Operador or ||')

// si la primera es true ya no evalua la segunda
console.log(regresaTrue() || regresaFalse())

console.log(regresaFalse() || regresaTrue())

console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo';
// console.log(a1)
const a2 = false && 'Hola Mundo'
// console.log(a2)
const a3 = soyFalse || 'ya no soy falso'
// console.log(a3)
console.table({a1, a2, a3})