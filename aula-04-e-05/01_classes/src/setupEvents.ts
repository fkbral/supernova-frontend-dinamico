// const buttons = document.querySelectorAll<HTMLButtonElement>('[data-cell]')
// const button = document.querySelector<HTMLButtonElement>('[data-cell]')

// buttons.forEach(button => button.onclick = () => {})

document.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLButtonElement

  if(target.dataset.cell) {
    console.log('ok')
  }
})

export {}