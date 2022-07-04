interface CreateSpecie {
  scientificName: string,
  commomName: string,
  populationInMillions: number,
  originalArea?: string,
}

export class Specie {
  public commomName
  public populationInMillions
  public originalArea
  #scientificName: string

  constructor(data: CreateSpecie) {
    const { scientificName, commomName, populationInMillions, originalArea } = data
    this.commomName = commomName
    this.scientificName = scientificName
    this.populationInMillions = populationInMillions
    this.originalArea = originalArea
  }

  get scientificName() {
    return this.#scientificName
  }

  set scientificName(scientificName: string) {
    if (scientificName === this.commomName) {
      this.#scientificName = 'N/A'
      return
    }

    this.#scientificName = scientificName
  }
}

describe('Class Specie', () => {
  it('should be able to instantiate a specie object', () => {
    const giraffe = new Specie({
      commomName: 'giraffe',
      scientificName: 'Giraffa',
      populationInMillions: 10,
      originalArea: 'savanna'
    })

    expect(giraffe).toEqual(
      expect.objectContaining({
        commomName: 'giraffe',
        scientificName: 'Giraffa',
        populationInMillions: 10,
        originalArea: 'savanna'
      })
    )
  })

  it('should be able to save a specie populationInMillions attribute', () => {
    const giraffe = new Specie({
      commomName: 'giraffe',
      scientificName: 'Giraffa',
      populationInMillions: 10,
      originalArea: 'savanna'
    })

    expect(giraffe).toEqual(
      expect.objectContaining({
        populationInMillions: 10,
      })
    )
  })

  it('should not be able to instantiate a specie w/ matching commom and scientific names', () => {
    const dog = new Specie({
      commomName: 'dog',
      scientificName: 'dog',
      populationInMillions: 40,
    })

    expect(dog.commomName).not.toEqual(dog.scientificName)
    expect(dog.scientificName).toEqual('N/A')
  })
})