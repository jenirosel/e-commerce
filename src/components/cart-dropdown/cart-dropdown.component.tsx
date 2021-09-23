import React from 'react'
// import CustomButton from '../ui/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items" />
      {/* <CustomButton value='Checkout'>GO TO CHECKOUT</CustomButton> */}
      <button className='custom-button'>GO TO CHECKOUT</button>

    </div>
  )
}

export default CartDropdown
