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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admins />}>
        {/* <Route index/> */}
        <Route path="managerpro" element={<ManagerPro />} />
        <Route path="manageruser" element={<ManagerUser />} />
      </Route>
    </Routes>
  );
}

export default App;
