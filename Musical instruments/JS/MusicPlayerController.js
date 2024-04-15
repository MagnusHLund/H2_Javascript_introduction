const instrumentDropdown = document.getElementById('instrumentDropdown')
const instruments = ['Flute', 'Guitar', 'Harp', 'Saxophone']

instruments.forEach((instrument) => {
  const option = document.createElement('option')
  option.text = instrument
  instrumentDropdown.append(option)
})

function buttonClick() {
  const instrumentToPlay = instrumentMapper(instrumentDropdown.value)
  instrumentToPlay.playSound()
}

function instrumentMapper(chosenInstrument) {
  switch (chosenInstrument) {
    case 'Flute':
      return new Flute('Bansuri', 7, 'wood')
    case 'Guitar':
      return new Guitar('Bass guitar', 4, 'wood')
    case 'Harp':
      return new Harp('Lever harp', 34, 152)
    case 'Saxophone':
      return new Saxophone('Alto saxophone', 'brass')
  }
}
