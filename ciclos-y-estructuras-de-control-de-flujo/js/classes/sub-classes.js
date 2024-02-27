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

    constructor(name = 'No proporcionado', code = 'No proporcionado' , phrase = 'No proporcionado') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
        
        Person._count++
    }

    set setComidaFavorita(food) { // establece valores y le podemos aplicar cierto formato o condición
        this.food = food.toUpperCase() // por ejemplo que siempre se guarde en mayúscula
    }

    get getComidaFavorita() { // los get se usan para recuperar propiedades
        return `La comida favorita de ${this.name} es ${this.food}`
    }

    printInfo() { // método. Se haace fuera del constructor
        console.log(`Soy ${this.name}, y siempre digo ${this.phrase}`)
    }

    nameHero() {
        this.printInfo() // llamdo de un método dentro de otro método. Se debe usar la palbraba reservada this para acceder.
        console.log(`Soy ${this.code}`)
    }
}

class hero extends Person {
    clan = 'Sin clan'

    constructor(name, code, phrase) {
        super(name, code, phrase)
        this.clan = 'The Avengers'
    }

    printInfo() {
        console.log(`Soy ${this.name} desde la clase hero`)
        super.printInfo()
    }
}

const spiderman = new hero('Peter Parker', 'Spiderman', 'Soy tu amigable vecino el hombre araña')

console.log(spiderman)
spiderman.printInfo()


