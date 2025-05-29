import React from "react";

const Cart = ({ cartItem, removeFromCart }) => {
  console.log("cart", cartItem);
  return (
    <div>
      <h2>Cart</h2>
      {cartItem.length === 0 ? (
        <p>No item found</p>
      ) : (
        cartItem.map((item) => (
          <div key={item.id} className="cart-item">
            <h5>{item.title}</h5>
            <p>
              {item.price} * {item.quantity}
            </p>
            <p> ₹ {item.price * item.quantity}</p>
            <button
              className="delete-btn"
              onClick={() => removeFromCart(item.id)}
            >
              delete item
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
