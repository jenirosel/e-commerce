import User from "../../data/data.core"

export const setCurrentUser = (user : User) => ({
  type: 'SET_CURRENT_USER',
  payload: user
})