interface AnimalContract {
  name: string
  populationInMilions: number
}

interface CreateAnimalDTO {
  name: string
  populationInMilions: number
}

class Animal implements AnimalContract{
  public name: string
  public populationInMilions: number

  constructor({name, populationInMilions}: CreateAnimalDTO) {
    this.name = name
    this.populationInMilions = populationInMilions
  }

  eat() {
    return 'Nhac'
  }
}

class FlyingAnimal extends Animal {
  fly() {
    return `${this.name} voou`
  }
}

class SwimmingAnimal extends Animal {
  swim() {
    return `${this.name} voou`
  }
}

class WalkingAnimal extends Animal {
  walk() {
    return `${this.name} andou`
  }
}

function MixinWalk(superClass: typeof Animal) {
  return class extends superClass {
    walk() {
      return `${this.name} andou`
    }
  }
}

function MixinSwim(superClass: typeof Animal) {
  return class extends superClass {
    swim() {
      return `${this.name} nadou`
    }
  }
}

function MixinFly(superClass: typeof Animal) {
  interface CreateFlyingAnimalDTO extends CreateAnimalDTO {
    flightTimeInMinutes: number
  }

  interface FlyingAnimalContract extends AnimalContract {
    flightTimeInMinutes: number
  }

  return class extends superClass implements FlyingAnimalContract {
    public flightTimeInMinutes: number

    constructor({name, populationInMilions, flightTimeInMinutes}: CreateFlyingAnimalDTO) {
      super({name, populationInMilions})
      this.flightTimeInMinutes = flightTimeInMinutes
    }

    fly() {
      return `${this.name} voou`
    }

    // eat() {
    //   throw new Error('animal não consegue comer')
    // }
  }
}


class Duck extends MixinFly(MixinSwim(MixinWalk(Animal))) {}
class SwimmingBird extends MixinWalk(MixinSwim(Animal)) {}

const humano = new WalkingAnimal({name: 'Zé', populationInMilions: 7000})
const hem = new WalkingAnimal({name: 'Mary lu', populationInMilions: 10})
const penguin = new SwimmingBird({ name: 'Carlos', populationInMilions: 20})

const duck = new Duck({name: 'Donald', populationInMilions: 50, flightTimeInMinutes: 2 })

if (hem instanceof Duck) {
  console.log('galinha é instância de Duck')
}

if (hem instanceof Animal) {
  console.log('galinha é instância de Animal')
}

if (duck instanceof Duck) {
  console.log('pato é instância de Duck')
}

if (duck instanceof Animal) {
  console.log('pato é instância de Animal')
}


console.log(humano.walk())
console.log(duck)
console.log(duck.fly())
console.log(duck.walk())
console.log(duck.swim())
console.log(duck.eat())
console.log(penguin.eat())
console.log(penguin.walk())
console.log(penguin.swim())
// humano.fly()

export {Animal}