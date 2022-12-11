import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hello from "./components/Hello";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/footer/Footer";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
