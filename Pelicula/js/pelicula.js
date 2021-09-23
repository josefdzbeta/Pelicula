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
    
    let tiroteoRandom=Math.floor(Math.random() * 10+1)
      while(tiroteoRandom>0){
       
        this.paco.arma.disparar()
        this.maria.arma.disparar()
        this.morgan.arma.disparar()
        
        tiroteoRandom--
    }
    
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
  constructor(){
    this.balas=3
  }
  disparar(){
    if (this.balas>0){
      document.write('<p>¡¡ PUM !! </p>')

      this.posicionEnemigo=Math.floor(Math.random() * 5 + 1);
      this.posicionDisparando=Math.floor(Math.random() * 5 + 1);

      if(this.posicionDisparando===this.posicionEnemigo){
        document.write('<p>¡¡ AY !! </p>')
      }
      this.balas --

    }else{
      document.write('<p>¡¡ CLICK !! </p>')
      document.write('<p>¡¡ RECARGANDO !! </p>')
      this.balas=1
    }
  }
}


new Pelicula()
