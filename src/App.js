//import logo from './logo.svg';
//import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
//import Hello from './components/Hello';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/footer/Footer';
import Login from './pages/User/Login/Login';
import Registration from './pages/User/Registration/Registration';
import Forgot from './pages/User/Forgot/Forgot';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          {/* ********* User ********* */}
          {/* Login */}
            {/* <Route path="/login" element={<Hello />} />  */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/Signup" element={<Registration />} />
            <Route path="/Forgot" element={< Forgot/>} />
           
          </Routes>
          <Footer/>
      </header>
    </div>
  );
}

export default App;