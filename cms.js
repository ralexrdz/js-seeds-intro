const container = document.getElementById('container')

const addTitle = (titleNum) => {
  let newTitle = document.createElement('h'+titleNum)
  const titleText = document.getElementById('titleInput').value
  newTitle.innerText = titleText

  console.log('titleText', titleText)  
  console.log('newTitle', newTitle)
  
  container.append(newTitle)
}

const addTextArea = () => {
  let newTextArea = document.createElement('textarea')
  container.append(newTextArea)
}

const addImage = () => {
  let newImage = document.createElement('img')
  const imageUrl = document.getElementById('imageInput')

  newImage.src = imageUrl
  container.append(newImage)

}

const addVideo = () => {
  let newVideo = document.createElement('video')
  const videoUrl = document.getElementById('videoInput')
  newVideo.src = videoUrl
  container.append(newVideo)

}
