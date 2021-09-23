import { User } from '../data.core'
import { userActionTypes } from './user.types'

export const setCurrentUser = (user : User) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
})