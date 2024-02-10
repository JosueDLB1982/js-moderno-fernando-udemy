/**
 Los días de semana se abre a las 11,
 los fines de semana se abre a las 9
 **/ 

 const date = new Date()
 console.log(date)
 const semana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
 const day = date.getDay()
 const hour = date.getHours()
 console.log(semana[day])
 console.log(hour)

//  if(day === 6 || day === 0) {
//     if(hour >= 9) {
//         console.log(`Hoy es ${semana[day]}. Estamos abiertos. Puede pasar`)
//     } else {
//         console.log('Los fines de semana abrimos a las 9:00')
//     }
//  } else if(hour >= 11) {
//     console.log('Pase adelante. Estamos activos')
//  } else {
//     console.log('De lunes a viernes nuestro horario de apertura es 11:00')
//  }
let horaApertura;
let mensaje;

// if(day === 0 || day === 6) {
//     console.log(`En fines de semana abrimos a las 9:00 horas`)
//     horaApertura = 9
// } else {
//     console.log(`De lunes a viernes abrimos a las 11:00 horas`)
//     horaApertura = 11
// }

// if(hour >= horaApertura) {
//     mensaje = `Estamos activos. Puede usted entrar`
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`
// }
// console.log(mensaje)

horaApertura = ([0, 6].includes(day) ? 9 : 11)
mensaje = (hour >= horaApertura ? 'Estamos activos' : `Está cerrado, hoy abrimos a las ${horaApertura}`)
console.log(mensaje)