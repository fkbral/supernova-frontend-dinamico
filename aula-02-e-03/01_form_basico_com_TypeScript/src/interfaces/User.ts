export interface User {
  username: string
  chosenDay: 'monday' | 'wednesday' | 'friday'
  subscribedToNewsletter?: boolean
}