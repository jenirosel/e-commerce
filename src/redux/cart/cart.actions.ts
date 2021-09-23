import { cartActionTypes } from './cart.types'
// import User from "../../data/data.core"

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: any) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
})