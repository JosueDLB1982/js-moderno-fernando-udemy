const arr = new Array(10);
console.log(arr);
console.log(arr.length);

const arr2 = [];
console.log(arr2);
console.log(arr2.length);

let videoJuegos = ['Mario 3', 'Megaman', 'Turbo'];
console.log({videoJuegos});
console.log(videoJuegos[1]);
console.log(videoJuegos[0]);
console.log(videoJuegos[2]);

let cosas = [true, 123, 'Fernando', Math.PI, {a: 1}];
console.table({cosas});

cosas.push(['Josue', 'David', 'Lopez'])

console.log(cosas[4]);

cosas.map((e, i) => console.log(`el elemento ${cosas[i]} contenido en la posición ${i} del array cosas es de tipo ${typeof(e)}`))

cosas.map((e , i) => console.log(cosas[i]))

console.log(cosas[5][2])