// import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { Board } from './Board'
import { JSDOM } from 'jsdom'
import * as fs from 'fs'
import * as path from 'path'

let dom
let html: string
let container: HTMLElement

beforeAll(() => {
  const htmlPath = path.join(__dirname, '..', '..', '..', './index.html')
  html = fs.readFileSync(htmlPath, 'utf8');
})

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' })
  container = dom.window.document.body
})

describe('Memory Game Board', () => {
  it('should render N board tiles w/ boardSize of N', () => {
    const passedBoardSize = 9

    const gameBoardPlayer1 = new Board({
      boardSize: passedBoardSize,
      cardMatchAmount: 3,
      chosenTypes: ['🍓', '🍇', '🍋'],
      DOM: container
    })

    const boardTiles = gameBoardPlayer1.view.querySelectorAll<HTMLLIElement>('.memory-game-card')
    const numberOfBoardTiles = boardTiles.length

    expect(passedBoardSize).toEqual(numberOfBoardTiles)
  })

  // it('should have a 3000ms delay before hiding cards', () => {}
})