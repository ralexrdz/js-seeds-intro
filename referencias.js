var y = 8

var x = y

console.log('x1', x)

cambia({variable: x}, 10)

console.log('x2', x)
console.log('y', y)


function cambia (queCambio, valor) {
  queCambio.variable = valor
  console.log('queCambio', queCambio)
}