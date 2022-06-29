import { User } from "./interfaces/User"
import { LOCAL_STORAGE_KEYS } from "./utils/constants"

let users: User[]

function bootstrap() {
  const obs = document.querySelector<HTMLDivElement>('#observation-input')!
  obs.classList.add('input-highlight')
  // obs.style.backgroundColor = '#dadada'
  // obs.style.color = '#333'
  // obs.style.border = "4px solid gold"

  // se for necessário invalidar cache utilize esta linha abaixo
  // localStorage.removeItem(LOCAL_STORAGE_KEYS.USERS)
  const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEYS.USERS)
  users = storedUsers ? JSON.parse(storedUsers) : []

  renderUsersViaTemplate(users)
}

function renderUsers(users: User[]) {
  const userContainerDiv = document.querySelector<HTMLUListElement>('[data-user-list]')!
  let userUl = userContainerDiv.querySelector('ul')
  // let userUl = userContainerDiv.children[0]
  if(userUl){
    userContainerDiv.removeChild(userUl)
  }

  userUl = document.createElement('ul')
  userContainerDiv.append(userUl)
  // userUl.innerHTML = ''

  users.forEach(user => {
    const createdLi = document.createElement('li')
    createdLi.innerText = user.username
    userUl?.append(createdLi)
  })
}

function renderUsersWithInnerHtml(users: User[]) {
  const userContainerDiv = document.querySelector<HTMLUListElement>('[data-user-list]')!
    
  userContainerDiv.innerHTML = `<ul>
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  </ul>`
}

function renderUsersViaTemplate(users: User[]) {
  const userContainerDiv = document.querySelector<HTMLUListElement>('[data-user-list]')!
    users.forEach((user, index) => {
      const clonedLITemplate = 
        document.querySelector<HTMLTemplateElement>(
          '[data-template-user-element]'
        )!.content?.cloneNode(true)

      userContainerDiv.appendChild(clonedLITemplate)
      // const li = userContainerDiv.querySelector(`li:nth-child(${index})`)
      const li = userContainerDiv.children[index]
      li.querySelector<HTMLLIElement>('[data-user-name]')!.innerText = 
        user.username
      li.querySelector<HTMLLIElement>('[data-user-newsletter]')!.innerText =
        user.subscribedToNewsletter ? 'sim' : 'não'
  })
}

function saveUsers(userToSave: User, allUsers: User[]) {
  allUsers.push(userToSave)

  localStorage.setItem(LOCAL_STORAGE_KEYS.USERS, JSON.stringify(allUsers))
}

bootstrap()

const signUpForm = document.querySelector<HTMLFormElement>('#register-user-form')!

signUpForm.onsubmit = (event: SubmitEvent) => {
// signUpForm?.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault()

  const usernameInput = document.querySelector<HTMLInputElement>('#username-input')!
  const target = event.target as HTMLFormElement
  // const username = (target.querySelector('#username-input') as HTMLInputElement).value
  // const username = target.querySelector<HTMLInputElement>('#username-input')!.value

  // const usernameChosenDayInput = document.querySelector<HTMLInputElement>('[name="classes-day-input]')
  const usernameSubscribedToNewsletterInput = document.querySelector<HTMLInputElement>('#newsletter-input')!

  const userToSave: User = {
    username: usernameInput.value,
    chosenDay: 'monday',
    subscribedToNewsletter: usernameSubscribedToNewsletterInput.checked,
  }

  saveUsers(userToSave, users)

  // usernameInput.value = ''
  const element = event.target as Element
  element.querySelector<HTMLButtonElement>('button[type=reset]')?.click()

  // renderUsers(users)
  // renderUsersWithInnerHtml(users)
  renderUsersViaTemplate(users)
}