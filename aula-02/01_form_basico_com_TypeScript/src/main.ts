// const app = document.querySelector<HTMLDivElement>('#app')!

const mainMenu = document.querySelector<HTMLDivElement>('.main-menu')!
const currentUri = window.location.pathname
const currentPage = currentUri.split('/')?.[1].split('.html')?.[0]

const linksNodeList = mainMenu.querySelectorAll<HTMLDivElement>('li > a')
const links: HTMLDivElement[] = Array.from(linksNodeList)

// console.log(currentUri)
// console.log(currentPage)

links.forEach(link => {
  if (link.innerText.toLowerCase() === 'home' && currentPage === 'index'){
    link.classList.add('active-link')
  }

  if (link.innerText.toLowerCase() === currentPage) {
    link.classList.add('active-link')
  }
})

export {}