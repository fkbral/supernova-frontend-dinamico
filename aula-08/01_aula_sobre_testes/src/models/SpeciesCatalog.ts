import { SpecieContract } from "./Specie"

interface CreateSpeciesCatalog {
  species: SpecieContract[]
}

export class SpeciesCatalog {
  #species: SpecieContract[]

  constructor({species}: CreateSpeciesCatalog) {
    this.species = species
  }

  get species(): SpecieContract[] {
    return this.#species
  }

  set species(speciesToFilter: SpecieContract[]) {
    const species: SpecieContract[] = []
    const speciesNames: string[] = []

    speciesToFilter.forEach(specieToFilter => {
      if (speciesNames.includes(specieToFilter.scientificName)) {
        return
      }

      species.push(specieToFilter)
      speciesNames.push(specieToFilter.scientificName)
    })

    this.#species = species
  }
}