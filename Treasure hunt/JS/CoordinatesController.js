const map = document.getElementById('map')
let treasureLocation

function placeTreasure() {
  const width = map.clientWidth
  const height = map.clientHeight

  const x = getRandomNumber(width)
  const y = getRandomNumber(height)

  treasureLocation = [x, y]
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

function playerClick(e) {}
