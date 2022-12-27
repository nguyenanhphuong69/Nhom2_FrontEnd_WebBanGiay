import React from "react";

const Cards = ({ item, handleClick }) => {
  const { tensp, gia, url } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={url} alt="" />
      </div>
      <div className="details">
        <p>{tensp}</p>
        <p>Price - {gia}$</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
