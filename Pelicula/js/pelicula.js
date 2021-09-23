'use strict'

//console.log('Cargando JS');

class Pelicula {

  constructor(){
    //console.log('Se ha creado una pelicula');
    //this es el objeto que ejecuta el codigo
    this.titulo = 'Tiroteo en Mississippi'
    this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de arizona y a donde nadie queria llegar')
    this.narrador = new Narrador()
    this.paco = new PersonajeBueno('Paco')
    this.maria = new PersonajeBueno('Maria')
    this.morgan = new PersonajeMalo('Morgan Ojo morao\'')


    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}</p>`)
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un dia esplendido.`)
    this.maria.hablar(`Hola ${this.paco.nombre}, la verdad es que si`)
    this.narrador.hablar('Ambos se miraron un instante y siguieron su camino...')
    this.morgan.hablar('Vaya pueblo más... polvoriento')
    this.morgan.hablar('¡Eh tú! ¡Pringao! Dame tu caballo y la cartera')
    this.morgan.arma.disparar()

  }

}
//var app = new Pelicula()

class Pueblo {
  constructor(nombre, descripcion) {
    this.nombre = nombre
    this.descripcion = descripcion
  }
}
class Narrador {
  hablar(texto){
    document.write(`${texto}.`)
  }

}
class Personaje {
  constructor(nombre) {
    this.nombre = nombre
    this.arma = new Arma()
    let balas=10
  }

  hablar(texto){
    document.write(`<p class=personaje><span>${this.nombre}</span>${texto}</p>`)
  }
}

class PersonajeMalo extends Personaje {
  hablar(texto){
    document.write(`<p class=malo><span>${this.nombre}:</span>GRRRR${texto}</p>`)
  }
}

class PersonajeBueno extends Personaje{
  hablar(texto){
    document.write(`<p class=bueno><span>${this.nombre}</span>${texto}</p>`)
  }

}
class Arma {
  disparar(balas){
    document.write('<p>¡¡ PUM !! </p>')
    document.write('<p>¡¡ CLICK !! </p>')
  }
}

new Pelicula()
