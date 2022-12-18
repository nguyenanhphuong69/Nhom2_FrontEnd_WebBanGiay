import React from "react";
import { Route, Routes } from "react-router-dom";
import Product_Detail from "../../components/Product-components/Product_Detail";
// import Product_Create from "../../components/Product-components/Product_Create";

const Product = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product_Detail />} />
        {/* <Route path="/create" element={<Product_Create />} /> */}
      </Routes>
    </div>
  );
};

export default Product;
