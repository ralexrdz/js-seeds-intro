let arr = [
  {
    a: 1,
    b: 2,
    c: [1,2,3,4],
    address: {
      number: 123,
      coordinates: {
        lat: 453,
        lng: 234
      },
      street: 'asdasd'
    }
  },
  {
    a: 1,
    b: 2,
    c: [1,2,3,4],
    address: {
      number: 123,
      coordinates: {
        lat: 453,
        lng: 234
      },
      street: 'asdasd'
    }
  },
  {
    a: 1,
    b: 2,
    c: [1,2,3,4],
    address: {
      number: 123,
      coordinates: {
        lat: 453,
        lng: 234
      },
      street: 'asdasd'
    }
  },
  {
    a: 1,
    b: 2,
    c: [1,2,3,4],
    address: {
      number: 123,
      coordinates: {
        lat: 902,
        lng: 866
      },
      street: 'asdasd'
    }
  },
  {
    a: 1,
    b: 2,
    c: [1,2,3,4],
    address: {
      number: 123,
      street: 'asdasd'
    }
  },
  {
    a: 1,
    b: 2,
    c: [1,2,3,4],
  },
]

// arr.forEach( (xxx, i) => console.log('xxx', xxx, Array.isArray(xxx), i) )

console.log(arr.length)
// como muestro la latitud de las infos con coordinates
console.log(
  arr
    .filter( info => info.address && info.address.coordinates )
    .map( conCoords =>  conCoords.address.coordinates.lat )
)

// let suma = 0
// for (i = 0 ; i < arr.length ; i++) {
//   suma += arr[i]
// }
// console.log(suma)



// console.log(arr.reduce((val,acc) => {
//   console.log(acc)
//   return  acc.push( acc[acc.length-1] + val )
// }), []);

// let sorted = arr.sort( (a,b)  => a > b ? 1 : -1 )

// console.log(sorted);


let arrX2 = arr.map(function (val, i) { // 3, 15, 24, 6
  return `El valor es: ${val} en el indice ${i}`
})


let x = {
  a: 1,
  b: 2
}

let z = {
  x,

}


// console.log(arr.filter( val => val>3))
// console.log(arrX2)

// let filtered = arr.filter( (val, i) =>  !isNaN(val) )

// console.log(filtered)