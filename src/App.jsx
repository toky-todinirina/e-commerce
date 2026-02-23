import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cardt";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/NavBars";
import ProductDetail from "./pages/ProductDetail";
import "./styles/global.scss";
import Checkout from "./pages/CheckOut"; 
import Success from "./pages/Success";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<Route path="/products/:id" element={<ProductDetail />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}