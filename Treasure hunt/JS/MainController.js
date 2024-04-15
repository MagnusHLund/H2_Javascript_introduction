function init() {
  const image = new Image()
  image.src = 'Public/map.jpg'

  const aspectRatio = image.width / image.height
  const canvasWidth = window.innerWidth
  const canvasHeight = canvasWidth / aspectRatio

  const size = document.documentElement.clientHeight

  canvas.width = size
  canvas.height = size

  const context = canvas.getContext('2d')

  context.drawImage(image, 0, 0, canvasWidth, canvasHeight)
}

init()
