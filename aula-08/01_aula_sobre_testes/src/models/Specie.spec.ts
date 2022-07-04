import { Specie } from "./Specie"

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