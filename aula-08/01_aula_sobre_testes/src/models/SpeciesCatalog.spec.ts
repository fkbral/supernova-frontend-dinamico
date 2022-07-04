import { Specie } from "./Specie";
import { SpeciesCatalog } from "./SpeciesCatalog";

describe('Species Catalog', () => {
  it('should be able to create a species\' catalog', () => {
    const giraffe = new Specie({
      commomName: 'giraffe',
      scientificName: 'Giraffa',
      populationInMillions: 10,
      originalArea: 'savanna'
    })

    const dog = new Specie({
      commomName: 'dog',
      scientificName: 'Canis lupus familiaris',
      populationInMillions: 40,
    })

    const speciesCatalog = new SpeciesCatalog({
      species: [giraffe, dog]
    })

    expect(speciesCatalog.species).toEqual(
      [giraffe, dog]
    )
    expect(speciesCatalog.species).toEqual(
      expect.arrayContaining([giraffe])
    )
  })

  it('should not be able to include species w/ same scientific names' , () => {
    const corgi = new Specie({
      commomName: 'dog 1',
      scientificName: 'Canis lupus familiaris',
      populationInMillions: 40,
    })

    const poodle = new Specie({
      commomName: 'dog 2',
      scientificName: 'Canis lupus familiaris',
      populationInMillions: 40,
    })

    const speciesCatalog = new SpeciesCatalog({
      species: [corgi, poodle]
    })

    expect(speciesCatalog.species).toEqual(
     [corgi]
    )

    expect(speciesCatalog.species).toEqual(
      expect.not.arrayContaining([poodle])
    )
  })
})