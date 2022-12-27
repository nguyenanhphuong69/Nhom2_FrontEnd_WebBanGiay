import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hello from "./components/Hello";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/footer/Footer";
import Product_Create from "./components/Product-components/Product_Create";
import Product_Edit from "./components/Product-components/Product_Edit";
import Product_Detail from "./components/Product-components/Product_Detail";

import Category from "./pages/Category/Category";
import Category_Create from "./components/Category-components/Category_Create";
import Category_Edit from "./components/Category-components/Category_Edit";
import Category_Detail from "./components/Category-components/Category_Detail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          {/* ********* User ********* */}
          {/* Login */}
          <Route path="/login" element={<Hello />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/create" element={<Product_Create />} />
          <Route path="/product/edit/:empid" element={<Product_Edit />} />
          <Route path="/product/detail/:empid" element={<Product_Detail />} />

          <Route path="/category" element={<Category />} />
          <Route path="/category/create" element={<Category_Create />} />
          <Route path="/category/edit/:empid" element={<Category_Edit />} />
          <Route path="/category/detail/:empid" element={<Category_Detail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
