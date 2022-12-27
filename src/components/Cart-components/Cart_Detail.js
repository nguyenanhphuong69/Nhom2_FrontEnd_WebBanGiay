import React, { useState, useEffect } from "react";
import "../../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [gia, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.id * item.gia));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.url} alt="" />
            <p>{item.tensp}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item.id, +1)}>+</button>
            <button>{item.id}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.gia}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total amount </span>
        <span>{gia}$</span>
      </div>
    </article>
  );
};

export default Cart;
