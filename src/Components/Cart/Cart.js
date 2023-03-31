import React from "react";
import Classes from './Cart.module.css';
import Modal from "../UI/Modal";
const Cart = (props) => {

  const cartItem = (
    <ul className={Classes["cart-items"]}>
	
    </ul>
  );


    return (
      <Modal onClose={props.onHideCart}>
        {cartItem}
        <div className={Classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={Classes.actions}>
          <button onClick={props.onHideCart} className={Classes["button--alt"]}>
            Close
          </button>
          <button className={Classes.button}>Order</button>
        </div>
      </Modal>
    );

}

export default Cart;