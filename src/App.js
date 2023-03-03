import "./App.css";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Admins from "./components/Admins";
import ManagerPro from "./components/ManagerPro";
import ManagerUser from "./components/ManagerUser";
import Carts from "./components/Carts";
import Slider from "./components/Slider";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<><Slider/><Product /><Event /></>} />
        <Route path="cart" element={<Carts/>} />
        
      </Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />} />
      
      <Route path="/admin" element={<Admins />}>
        {/* <Route index/> */}
        <Route index element={<ManagerUser />} />
        <Route path="managerpro" element={<ManagerPro />} />
      </Route>
      
    </Routes>
  );
}

export default App;
