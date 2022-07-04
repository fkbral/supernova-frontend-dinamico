interface CreateSpecie {
  scientificName: string,
  commomName: string,
  populationInMillions: number,
  originalArea?: string,
}

export interface SpecieContract {
  // id: string,
  scientificName: string,
  commomName: string,
  populationInMillions: number,
  originalArea?: string,
}

export class Specie implements SpecieContract {
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