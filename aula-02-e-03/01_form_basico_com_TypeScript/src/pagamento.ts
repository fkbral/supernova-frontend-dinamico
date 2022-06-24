function payCredit(){
  console.log('efetuando pagamento em crédito')
}

function payDebit(){
  console.log('efetuando pagamento em dédito')
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
const paymentOptions = Array.from(paymentOptionsNodeList)

paymentOptions.forEach(paymentButton => {
  paymentButton.addEventListener('click', () => {
    const transactionType = paymentButton.dataset.transaction as Transaction
    console.log(transactionType)
    paymentRoutines[transactionType]()
  })
})

const movementOptionsNodeList = document.querySelectorAll<HTMLDivElement>('[data-movement]')!
const movementOptions = Array.from(movementOptionsNodeList)

movementOptions.forEach(movement => {
  movement.addEventListener('click', () => {
    const movementType = movement.dataset.moviment as Movement
    allowedMoviments[movementType]
    console.log(allowedMoviments[movementType])
  })
})

export {}