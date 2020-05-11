

export default class Giraffe {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    teethSize = '',
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.teethSize = teethSize;
  }

  eat(food) {
    console.log('chomp chomp all the ${food}ies.');

  }
  speak(noise) {
    alert('the ${this.constructor.name} says {noise}!')
  }
}
