// var nombre = prompt('Escribe tu nombre:')

function recortaNombre( numCaracteres ) {

  var numCaracteres = prompt('Cuantos caracteres quieres mostrar?')
  

  if (numCaracteres <= 0) {

    alert( 'Escribe un número mayor a 0')
    recortaNombre (numCaracteres)

  } else if (numCaracteres > nombre.length) {

    alert( 'escribe un número menor que el numero de caracteres del nombre')
    recortaNombre (numCaracteres)

  } else {

    alert( nombre.substring(0, numCaracteres))

  }
 

}

recortaNombre()

console.log("parseInt('asdasd')", parseInt('asdasd'))

let resultadoRecortar = recortaNombre(numCaracteres)
alert (resultadoRecortar)

  var z

  console.log('1', z)

  z =  null

  console.log('2', z)

  var undi 

  z = 1

  if ( z ) {
    console.log("z true")
  } else {
    console.log("z false")
  }

  if ( '' ) {
    console.log("'' true")
  } else {
    console.log("'' false")
  }

  if ( ' ' ) {
    console.log("' ' true")
  } else {
    console.log("' ' false")
  }
  
  if ( 0 ) {
    console.log("0 true")
  } else {
    console.log("0 false")
  }
  
  if ( 1 ) {
    console.log("1 true")
  } else {
    console.log("1 false")
  }
  
  if ( -1 ) {
    console.log("-1 true")
  } else {
    console.log("-1 false")
  }

  if ( undi ) {
    console.log("undefined true")
  } else {
    console.log("undefined false")
  }

  if ( ! (null) ) {
    console.log("null true")
  } else {
    console.log("null false")
  }

  if ( [] ) {
    console.log("[] true")
  } else {
    console.log("[] false")
  }

  if ( {} ) {
    console.log("{} true")
  } else {
    console.log("{} false")
  }
  if ( null == undefined ) {
    console.log("null == undefined true")
  } else {
    console.log("null == undefined false")
  }
  if ( null === undefined ) {
    console.log("null == undefined true")
  } else {
    console.log("null == undefined false")
  }
  if ( 0 == '0' ) {
    console.log("0 == '0' true")
  } else {
    console.log("0 == '0' false")
  }
  if ( 0 === '0' ) {
    console.log("0 === '0' true")
  } else {
    console.log("0 === '0' false")
  }
  if ( ! false ) {
    console.log("! false true")
  } else {
    console.log("! false false")
  }

  

  
  function animalesFavoritos (paraQuien, ...resto) {
    if ( !paraQuien ) { // !undefined !null !''
      paraQuien.animalesFavoritos = resto
    }
  }
  
  const nombreDeFuncion2 = function (param1, param2, param3) {
    
  } 
  
  const nombreDeFuncion3 = (param1, param2, param3) => {
    
  }

  animalesFavoritos('ralex', 'perro')
  animalesFavoritos('ralex', 'perro', 'gato', 'caballo')
  