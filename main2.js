let  usuario = ["Matias", "Bökenhans", {Libro}, {Mascota}]
for (let i=0; i<5; i++){
    console.log(usuario[i])
}

console.log(usuario)

class Libro {
    constructor (titulo, autor, editorial){
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
    }
}

const libro1 = new Libro ("Angeles y Demonios", "Dan Brown", "Penguin");

console.log(libro1)
usuario.push(libro1)

const libro2 = new Libro ("El código Da Vinci", "Dan Brown", "Penguin");

console.log(libro2)
usuario.push(libro2)

function agregarLibro(){
    let tituloNuevo = prompt ("Por favor, ingrese el título del libro");
    let autorNuevo = prompt ("por favor, ingrese el autor");
    let editorialNueva = prompt ("por favor, ingrese la editorial");

const libro = new Libro (tituloNuevo, autorNuevo, editorialNueva)
console.log(libro)

usuario.push(libro)
}

agregarLibro()

class Mascota {
    constructor (nombre, especie, raza){
        this.nombre = nombre;
        this.especie = especie;
        this.raza = raza;
    }
}

const mascota1 = new Mascota ("Sunny", "perro", "Border Collie");

console.log(mascota1)
usuario.push(mascota1)

const mascota2 = new Mascota ("Minnie", "gato", "ninguna");

console.log(mascota2)
usuario.push(mascota2)

function agregarMascota(){
    let nombreNuevo = prompt ("Por favor, ingrese el nombre de su Mascota");
    let especieNueva = prompt ("por favor, ingrese la especie");
    let razaNueva = prompt ("por favor, ingrese la raza");

const mascota = new Mascota (nombreNuevo, especieNueva, razaNueva)
console.log(mascota)

usuario.push(mascota)
}

agregarMascota()




