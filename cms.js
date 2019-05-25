const container = document.getElementById('container')

const addTitle = (titleNum) => {

  const titleTextInput = document.getElementById('titleInput')
  
  if (titleTextInput.value !== '') {
    let newTitleElement = document.createElement('h'+titleNum)
    newTitleElement.innerText = titleTextInput.value
    container.append(newTitleElement)
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
  let newDiv = document.createElement('div')
  let newTextArea = document.createElement('textarea')
  newDiv.append(newTextArea)
  container.append(newDiv)
}

const addImage = () => {
  const imageUrl = document.getElementById('imageInput')
  
  if (imageUrl.value !== '') {
    let newDiv = document.createElement('div')
    let newImage = document.createElement('img')
    newImage.src = imageUrl.value
    
    newDiv.append(newImage)
    container.append(newImage)

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
    // let newDiv = document.createElement('div')
    let newVideoIframe = document.createElement('iframe')
    newVideoIframe.width = 560
    newVideoIframe.height= 315
    let videoId = videoUrl.value.split('v=')[1] // https://www.youtube.com/watch?v=20ikUENPMBE
    newVideoIframe.src = `https://www.youtube.com/embed/${videoId}`
    newVideoIframe.frameBorder = 0
    newVideoIframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    newVideoIframe.allowfullscreen = true
    
    // newDivs.append(newVideoIframe)
    container.append(newVideoIframe)

  } else {

    document.getElementById('emptyVideoErr').hidden = false
    setTimeout(() => {
      document.getElementById('emptyVideoErr').hidden = true
    }, 3000)

  }

}
