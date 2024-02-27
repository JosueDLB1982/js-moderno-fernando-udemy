function Person(name = 'No proporcionado', age = 'No proporcionado') { // usamos mayúscula para indicar que sera un constructor
    this.name = name;
    this.age = age;
    this.print = () => {
        console.log(`Nombre: ${this.name} - edad: ${this.age}`)
    }
}

const josue = new Person('Josue', 41)
josue.print()

const caleb = new Person('Caleb', 13)
caleb.print()

const david = new Person()
david.print()
console.log(josue)
console.log(caleb)
console.log(david)

// Forma antigua de trabajar