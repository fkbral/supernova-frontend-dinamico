import { Board } from "./domain/models/Board"

const gameBoardPlayer1 = new Board({
  boardSize: 9,
  cardMatchAmount: 3,
  chosenTypes: ['🍓', '🍇', '🍋']
})

// const gameBoardPlayer2 = new Board({
//   boardSize: 6,
//   cardMatchAmount: 3,
//   chosenTypes: ['🍓', '🍇', '🍋'],
//   playerNumber: 2,
// })

export {}