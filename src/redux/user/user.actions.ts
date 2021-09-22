import { userActionTypes } from './user.types'
import { User } from "../../data/data.core"

export const setCurrentUser = (user : User) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
})