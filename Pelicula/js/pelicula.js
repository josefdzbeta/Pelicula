'use strict'

//console.log('Cargando JS');

class Pelicula {

  constructor(){
    //console.log('Se ha creado una pelicula');
    //this es el objeto que ejecuta el codigo
    this.titulo = 'Tiroteo en Mississippi'
    this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de arizona y a donde nadie queria llegar')
    this.narrador = new Narrador()
    this.paco = new PersonajeBueno('Paco ')
    this.maria = new PersonajeBueno('Maria ')
    this.morgan = new PersonajeMalo('Morgan Ojo morao \'')

    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}</p>`)
    this.paco.hablar(`: Hola ${this.maria.nombre}. Hoy hace un dia esplendido.`)
    this.maria.hablar(`: Hola ${this.paco.nombre}, la verdad es que si`)
    this.narrador.hablar(' Ambos se miraron un instante y siguieron su camino...')
    this.morgan.hablar(': Vaya pueblo más... polvoriento')
    this.paco.hablar(': Hablaras por ti...')
    this.morgan.hablar(': ¡Eh tú! ¡Pringao! Sabes con quien estas hablando?')
    this.maria.hablar(': Con un... Polvoriento?')
    this.narrador.hablar(' Mientras Paco se destornillaba, Morgan tenia cara de pocos amigos')
    this.narrador.hablar(' La tension se palpaba en el ambiente...')
    this.morgan.hablar(' Diselo a mi revolver!')
    
    let tiroteoRandom=Math.floor(Math.random() * 4+2)
      while(tiroteoRandom>0){
       
        this.paco.arma.disparar()
        this.maria.arma.disparar()
        this.morgan.arma.disparar()
        
        tiroteoRandom--
    }
    this.narrador.hablar('Despues de un intenso tiroteo y malheridos, no quedaba nada por hacer ')
    this.narrador.hablar(' El lejano pueblo de TodoPolvo se rendia bajo las garras de Morgan..')
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
    this.enemigos=[]

  }
  addEnemigos(personaje){
    this.enemigos.push(personaje)
  }

  hablar(texto){
    document.write(`<p class=personaje><span>${this.nombre}</span>${texto}</p>`)
  }
}

class PersonajeMalo extends Personaje {
  hablar(texto){
    document.write(`<p class=malo><span>${this.nombre}</span>GRRRR ${texto}</p>`)
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
      this.balas++
    }
  }
}


new Pelicula()
