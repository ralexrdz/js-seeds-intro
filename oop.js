class Animal {

  constructor (props) {
    this.name = props.name ? props.name : ''
    this.size = props.size 
    this.color = props.color
    this._legNumbers = props.legs
    this.family = props.family
  }

  showBasicInfo () {
    return `Èl ${this.name} es color ${this.color} y peretence a la familia ${this.family}`
  }

  getHurt() {
    this._legNumbers = this._legNumbers - 1 
  }

  innerPruebaStatic () {
    this.pruebaStatic()
  }

  static pruebaStatic() {
    console.log('prueba static')
  }

  habla () {
    return 'Animal'
  }
} 

class Mamifero extends Animal {

  ruido = 'grrr'

  constructor (props) {
    super(props)
    if (props.ruido) this.ruido = props.ruido
  }

  habla () {
    return super.habla() + ' ' + 'Mamifero'
  }
}


let leon = new Mamifero(
  {
    name: 'león',
    size: '2m',
    color: 'cafe claro',
    legs: 4,
    family: 'felino',
    ruido: 'miau'
  }
)




console.log(leon.ruido)

leon.ruido = 'auuuuu'

console.log(leon.ruido)

// console.log(leon.showBasicInfo())



let langosta = new Animal('langosta')

// console.log(langosta)
langosta.getHurt()

// console.log(langosta)


