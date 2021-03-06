type AvailableCardTypes = '🍓'| '🍇'| '🍍'| '🍒'| '🍋'

interface BoardContract {
  boardSize: number
  cardMatchAmount: number
  chosenTypes: AvailableCardTypes[]
  playerNumber: number
  view: HTMLDivElement
  DOM: HTMLElement
}

interface CreateBoard {
  boardSize: number
  cardMatchAmount: number
  chosenTypes: AvailableCardTypes[]
  playerNumber?: number
  DOM?: HTMLElement
}

export class Board implements BoardContract {
  public boardSize: number
  public chosenTypes: AvailableCardTypes[]
  public playerNumber: number
  public DOM: HTMLElement
  #cardMatchAmount: number
  #view: HTMLDivElement
  #memorizationTimeInSeconds: number

  constructor({ boardSize, cardMatchAmount, chosenTypes, playerNumber, DOM }: CreateBoard) {
    this.boardSize = boardSize
    this.cardMatchAmount = cardMatchAmount
    this.chosenTypes = chosenTypes
    this.playerNumber = playerNumber ?? 1
    this.#memorizationTimeInSeconds = 3
    this.DOM = DOM ?? document.body
    this.render()
    this.shuffleCards()
  }

  get cardMatchAmount() {
    return this.#cardMatchAmount
  }

  set cardMatchAmount(cardMatchAmount: number) {
    if (cardMatchAmount < 2) {
      return
    }

    if (cardMatchAmount > this.boardSize) {
      return
    }

    if (this.boardSize % this.boardSize !== 0) {
      return
    }

    this.#cardMatchAmount = cardMatchAmount
  }

  get view() {
    return this.#view
  }

  set view(boardContainer: HTMLDivElement) {
    this.#view = boardContainer
  }

  shuffleCards() {
    const fruitCardAmount: Record<AvailableCardTypes, number> = 
      {} as Record<AvailableCardTypes, number>
    
    Array.from({length: this.boardSize}).forEach((_, index) => {
      let randomFruitIndex = Math.round(Math.random() * this.chosenTypes.length - 1)
      let fruitAmountArray: number[] = []

      // while(fruitCardAmount[this.chosenTypes[randomFruitIndex]] >= this.cardMatchAmount) {
      //   randomFruitIndex = Math.round(Math.random() * this.chosenTypes.length - 1)
      // }

      // for (const fruitAmount in fruitCardAmount) {
      //   console.log(fruitAmount)
      //   fruitAmountArray.push(fruitCardAmount[fruitAmount])
      // }

      // const allFruitsTaken = fruitAmountArray.every(
      //   fruitAmount => fruitAmount >= this.cardMatchAmount
      // )

      // if(allFruitsTaken) {
      //   return
      // }

      if(fruitCardAmount[this.chosenTypes[randomFruitIndex]] >= this.cardMatchAmount) {
        return
      }


      fruitCardAmount[this.chosenTypes[randomFruitIndex]] = 
          fruitCardAmount[this.chosenTypes[randomFruitIndex]]
          ? fruitCardAmount[this.chosenTypes[randomFruitIndex]] + 1
          : 1

        this.view.querySelector<HTMLLIElement>(`li:nth-child(${index + 1}) button p`)!.innerText = 
          this.chosenTypes[randomFruitIndex]
    })

    this.hideCards()
  }

  hideCards() {
    setTimeout(() => {
      const cardsLi = this.view.querySelectorAll<HTMLLIElement>('li')!

      cardsLi.forEach(card => card.dataset.hidden = "true")
    }, this.#memorizationTimeInSeconds * 1000)
  }

  render() {
    const boardContainer = this.DOM.querySelector(
      `[data-memory-game-board="player${this.playerNumber}"]`
    )

    const boardTemplateClone: HTMLDivElement = this.DOM.querySelector(
      '#memory-game-board-template'
    )!.cloneNode(true).content

    boardTemplateClone.querySelector<HTMLHeadingElement>(
      '[data-player-number]'
    )!.innerText = this.playerNumber.toString()

    const boardUl = boardTemplateClone.querySelector<HTMLUListElement>('ul')!

    Array.from({length: this.boardSize}).forEach((_) => {
      const boardCardTemplateClone = this.DOM.querySelector(
        '#memory-game-card-template'
      )!.cloneNode(true).content

      boardUl.appendChild(boardCardTemplateClone)
    })

    boardContainer?.append(boardTemplateClone)    
    
    this.view = boardContainer as HTMLDivElement
  }
}