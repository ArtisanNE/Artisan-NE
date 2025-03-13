import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ArtisanProfiles from "./pages/ArtisanProfiles";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ArtisanDashboard from "./components/Dashboard/ArtisanDashboard";
import AdminDashboard from "./components/Dashboard/AdminDasboard";
import Layout from "./Layout";
import "./index.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/artisans" element={<ArtisanProfiles />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/artisan-dashboard" element={<ArtisanDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
