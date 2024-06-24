import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";

export default function App() {

  const [showLogin, setShowLogin] = useState(false);

  return <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/verify" element={<Verify/>}></Route>
        <Route path="/myorders" element={<MyOrders/>}></Route>
      </Routes>
    </div>
    <Footer/>
  </>
}