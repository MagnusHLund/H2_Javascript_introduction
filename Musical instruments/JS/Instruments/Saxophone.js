class Saxophone extends Instrument {
  constructor(name, material) {
    super(name)
    this.material = material
    this.playSound('Sounds/Saxophone.mp3')
  }
}
