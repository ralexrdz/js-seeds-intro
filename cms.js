const container = document.getElementById('container')

class CMSElement {
  constructor (type) {
    switch (type) {
      case 'textarea':
        
        break;
    
      case 'title':
        
        break;
    
      case 'image':
        
        break;
    
      case 'video':
        
        break;
    
      default:
        break;
    }
  }
}

const addTitle = (titleNum) => {

  const titleTextInput = document.getElementById('titleInput')
  
  if (titleTextInput.value !== '') {
    
    let newTitleElement = document.createElement('h'+titleNum)
    newTitleElement.innerText = titleTextInput.value

    container.append(addDivAndRemoveBtn(newTitleElement))
    titleTextInput.value = ''

  } else {
    // alert('No puedes agregar un título con texto vacío')
    document.getElementById('emptyTitleErr').hidden = false
    setTimeout(() => {
      document.getElementById('emptyTitleErr').hidden = true
    }, 3000)
  }

}

const addTextArea = () => {

  let newTextArea = document.createElement('textarea')

  container.append(addDivAndRemoveBtn(newTextArea))

  let newElement = new CMSElement({
    type: 'textarea',
    text: 'asdasd'
  })

}

const addImage = () => {
  const imageUrl = document.getElementById('imageInput')
  
  if (imageUrl.value !== '') {
    let newImage = document.createElement('img')
    newImage.src = imageUrl.value

    container.append(addDivAndRemoveBtn(newImage))

  } else {

    document.getElementById('emptyImageErr').hidden = false
    setTimeout(() => {
      document.getElementById('emptyImageErr').hidden = true
    }, 3000)

  }

}

const addVideo = () => {

  const videoUrl = document.getElementById('videoInput')
  
  if (videoUrl.value !== '') {

    let newVideoIframe = document.createElement('iframe')
    let videoId = videoUrl.value.split('v=')[1] // https://www.youtube.com/watch?v=20ikUENPMBE

    newVideoIframe.width = 560
    newVideoIframe.height= 315    
    newVideoIframe.src = `https://www.youtube.com/embed/${videoId}`
    newVideoIframe.frameBorder = 0
    newVideoIframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    newVideoIframe.allowfullscreen = true
    
    container.append(addDivAndRemoveBtn(newVideoIframe))

  } else {

    document.getElementById('emptyVideoErr').hidden = false
    setTimeout(() => {
      document.getElementById('emptyVideoErr').hidden = true
    }, 3000)

  }

}

const addDivAndRemoveBtn = (elem) => {

  let divElem = document.createElement('div')

  divElem.className = 'element'
  divElem.draggable = true
  divElem.addEventListener('dragstart', reorderStart)
  divElem.addEventListener('drag', movingElement)
  divElem.addEventListener('dragend', reorderFinish)
  divElem.addEventListener('click', offset)

  divElem.append(elem)

  let removeBtn = document.createElement('button')

  removeBtn.innerText = 'X'
  removeBtn.className = 'remove'
  removeBtn.addEventListener('click', removeMe)

  divElem.append(removeBtn)

  return divElem

}

const removeMe = (e) => {
  
  e.target.parentNode.remove()
  // quitar el papa div del botón que mando llamar esta funcion
}
const reorderStart = (e) => {
  
  console.log('reorderStart', e)
  // saber cual es mi div papa
  let divAMover = e.target.parentNode

  // hacer flotar el elemento y opacity

  // substituir el elemento por un fantasma
  // cuando arrastro el fantasma cambia de lugar
  //  a la posicion más adecuada ???
  
  // quitar el papa div del botón que mando llamar esta funcion
}
const reorderFinish = (e) => {
  // cuando suelto substituyo el elemento por el fantasma
  
  console.log('reorderFinish', e)
  
  // quitar el papa div del botón que mando llamar esta funcion
}

const movingElement = (e) => {
  console.log(e)
  console.log(e.screenX, e.screenY)
  
}

const offset = (e) => {
  console.log('left',e.currentTarget.offsetLeft)
  console.log('top',e.currentTarget.offsetTop)
}