import { User } from "./interfaces/User"

const obs = document.querySelector<HTMLDivElement>('#observation-input')!
obs.classList.add('input-highlight')
// obs.style.backgroundColor = '#dadada'
// obs.style.color = '#333'
// obs.style.border = "4px solid gold"

const users: User[] = []

function renderUsers() {
  const userUl = document.querySelector<HTMLUListElement>('[data-user-list]')!
  userUl.innerHTML = ''

  users.forEach(user => {
    const createdLi = document.createElement('li')
    createdLi.innerText = user.username
    userUl.append(createdLi)
  })
}

const signUpForm = document.querySelector<HTMLFormElement>('#register-user-form')

signUpForm?.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault()

  const usernameInput = document.querySelector<HTMLInputElement>('#username-input')
  // const username = event?.target!.querySelector('#username-input').value

  users.push({
    username: usernameInput!.value,
    chosenDay: 'monday',
  })

  renderUsers()
})