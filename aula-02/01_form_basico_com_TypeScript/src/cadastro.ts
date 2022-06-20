const obs = document.querySelector<HTMLDivElement>('#observation-input')!

// obs.style.backgroundColor = '#dadada'
// obs.style.color = '#333'
// obs.style.border = "4px solid gold"

obs.classList.add('input-highlight')

function payDebit(){
  console.log('efetuando pagamento em crédito')
}

function payCredit(){
  console.log('efetuando pagamento em débito')
}

function payPix(){
  console.log('efetuando pagamento no Pix')
}

type Transaction = 'credit' | 'debit' | 'pix'
type Movement = 'up' | 'left' | 'down' | 'right' | 'jump' | 'fire'

const paymentRoutines: Record<Transaction, () => void> = {
  'credit' : payCredit,
  'debit' : payDebit,
  'pix': payPix,
}

const allowedMoviments: Record<Movement, number> = {
  'left' : 37,
  'up' : 	38,
  'right': 39,
  'down' : 40,
  'fire' : 16,
  'jump' : 32,
}

const paymentOptionsNodeList = document.querySelectorAll<HTMLDivElement>('[data-transaction]')!
const paymentOptions: HTMLDivElement[] = [...paymentOptionsNodeList]

paymentOptions.forEach(paymentButton => {
  paymentButton.addEventListener('click', () => {
    const transactionType = paymentButton.dataset.transaction as Transaction
    console.log(transactionType)
    paymentRoutines[transactionType]()
  })
})

const movementOptionsNodeList = document.querySelectorAll<HTMLDivElement>('[data-movement]')!
const movementOptions: HTMLDivElement[] = [...movementOptionsNodeList]

movementOptions.forEach(movement => {
  movement.addEventListener('click', () => {
    const movementType = movement.dataset.moviment as Movement
    allowedMoviments[movementType]
    console.log(allowedMoviments[movementType])
  })
})

export {}