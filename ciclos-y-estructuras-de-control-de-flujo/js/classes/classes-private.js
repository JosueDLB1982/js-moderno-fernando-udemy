// class Rectangle {
//     #area = 0
    
//     constructor(base = 0, height = 0) {
//         this.base = base;
//         this.height = height;
        
//         this.#area = base * height;
//     }
    
//     static #perimetro() {
//         return ((2*this.base) + (2*this.height))
//     }

//     static metodoPublico() {
//         return Rectangle.#perimetro()
//     }
    
// }

// class Derived extends Rectangle{}

// const rectangle = new Rectangle(10, 15);
// rectangle.area = 'cloro'


// console.log(rectangle)
// console.log(Derived.metodoPublico())

class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD;
  
    static publicStaticMethod(a, b) {
      ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = (a + b);
      return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
    }
  }
  
  console.log(ClassWithPrivateStaticField.publicStaticMethod(2, 3));
  
  class Rectangulo {

    static area(base, altura) {
        return base * altura
    }

    

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
  }

  const rectangulo = new Rectangulo(3, 5)
  console.log(rectangulo)
  console.log(Rectangulo.area)