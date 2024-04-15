class Harp extends Stringed {
  constructor(name, numberOfStrings, height) {
    super(name, numberOfStrings)
    this.height = height
    this.playSound('Sounds/Harp.mp3')
  }
}
