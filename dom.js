
document.addEventListener("DOMContentLoaded", function(e) {
  console.log('Ya cargó')

  let elementos = [...document.getElementsByClassName('elemento')] 
  // uso el [...] para convertir de HTMLCollection a Array
  elementos.forEach(elem => elem.addEventListener('click', (e) => {console.log(e.target)})) 

});

console.log('dom')

function diAdios () {
  alert('adios')
}

const queTasEscribiendo = function (e) {
  console.log('e', e.key)

  console.log(this)
  

  const isNumber = Number.isInteger(Number.parseInt(e.key))

  if ( isNumber ) { // si es número
    console.log('nauy')
    e.preventDefault()
    return false
  }
}


const meCliquiaron = (e) => {
  console.log('e.target - ', e.target.className)
  console.log('e.currentTarget - ', e.currentTarget.className)
}
