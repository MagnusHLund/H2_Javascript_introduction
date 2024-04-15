class Guitar extends Stringed {
  constructor(name, numberOfStrings) {
    super(name)
    this.numberOfStrings = numberOfStrings
    this.playSound('Sounds/Guitar.mp3')
  }
}
