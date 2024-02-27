class Person {
    static _count = 0; // propiedad estática
    static get getConteo() { // get estático
        return `${Person._count} instancias`
    }

    static message(name) { // método estático
        console.log(`Soy un método estático creado por ${name}`)
    }

    name   = '';
    code   = '';
    phrase = '';
    food   = '';

    constructor(name = 'No proporcionado', code = 'No proporcionado' , phrase = 'No proporcionado', food = 'No proporcionado') {
        this.name   = name;
        this.code   = code;
        this.phrase = phrase;
        this.food = food;
        this.setComidaFavorita = this.getComidaFavorita
        
        Person._count++
    }

    set setComidaFavorita(food) { // establece valores y le podemos aplicar cierto formato o condición
        this.food = food.toUpperCase() // por ejemplo que siempre se guarde en mayúscula
    }

    get getComidaFavorita() { // los get se usan para recuperar propiedades
        return `La comida favorita de ${this.name} es ${this.food}`
    }

    printInfo() { // método. Se hace fuera del contructor
        
        return `Soy ${this.name}, y siempre digo ${this.phrase} / Frase: ${this.myPhrase()}` // para llamar un método dentro de otro usamos la palabra reservada this.
    }

    myPhrase() {
        return `${this.code} dice: ${this.phrase}`
    }

    nameHero() {
        this.printInfo() // llamdo de un método dentro de otro método. Se debe usar la palbraba reservada this para acceder.
        console.log(`Soy ${this.code}`)
    }
}

const spiderman = new Person('Peter Parker', 'Spiderman', 'Soy tu amigable vecino el hombre araña', 'el pastel de cereza de la tia May')

const ironman = new Person('Tony Stark', 'Iroman', 'Soy Iroman')

// spiderman.setComidaFavorita = 'patacon'
// ironman.setComidaFavorita = 'pabellon'
const wonderWoman = new Person('Diana Price', 'WW', 'Lucharé por aquellos que no pueden luchar por sí mismos', 'espaguety')

console.log(spiderman.printInfo()) // los metodos se invocan con ()
console.log(ironman.printInfo())
// console.log(ironman.myPhrase())
console.log(spiderman)
console.log(wonderWoman)
console.log(spiderman.getComidaFavorita)
console.log(wonderWoman.getComidaFavorita)
