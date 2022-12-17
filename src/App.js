import logo from './logo.svg';
import { Route, Routes, useNavigate } from "react-router-dom";
import Hello from './components/Hello';
import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart';
// import NotFound from './pages/NotFound/NotFound';
// import Login from './pages/Login/Login';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TopMenu from './components/topmenu/TopMenu';
import Slider from './components/slider/Slider';
import Banner from './components/banner/Banner';
import New_Ar from './components/contents/New_Ar';
import Deals from './components/contents/Deals';
import Best_Seller from './components/contents/Best_Seller';
import Benefits from './components/contents/Benefits';
import Blog from './components/contents/Blog';
import Sus from './components/contents/Sus';
import Contact from './pages/contact/Contact';
import Single from './pages/single/Single';
import Categories from './pages/categories/Categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <TopMenu/>
        <Slider/>
        <Banner/>
        <New_Ar/>
        <Deals/>
        <Best_Seller/>
        <Benefits/>
        <Blog/>
        <Sus/>
        <Contact/>
        <Single/>
        <Categories/>
        <Routes>
          {/* ********* User ********* */}
          {/* Login */}
            {/* <Route path="/login" element={<Hello />} />  */}
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />  */}
          </Routes>
          <Footer/>
      </header>
    </div>
  );
}
export default App;