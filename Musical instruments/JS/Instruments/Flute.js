class Flute extends Instrument {
  constructor(name, holes, material) {
    super(name)
    this.holes = holes
    this.material = material
    this.playSound('Sounds/Flute.mp3')
  }
}
