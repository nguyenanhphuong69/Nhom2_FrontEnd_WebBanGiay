import React from "react";
import "../../styles/cart_detail.css";

const Cart_Detail = ({ setShow, size }) => {
  return (
    <div>
      {" "}
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            My Shoping
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i class="bi bi-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Cart_Detail;
