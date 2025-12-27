import "./App.css";
import React, { useState, useContext } from "react";
import HomePage from "./components/home/HomePage";
import Clothing from "./components/clothing/Clothing";
import Men from "./components/men/Men";
import Women from "./components/women/Women";
import Shoes from "./components/shoes/Shoes";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";
import AdminPanel from "./components/admin/AdminPanel"; // Import AdminPanel
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import Login from "./components/Login"; // Import the Login component
import FormPage from "./components/formPage/FormPage"; // Import the FormPage component
import { GlobalContext } from "./context/GlobalState"; // Import GlobalContext

function App() {
  const { setUser } = useContext(GlobalContext); // Access setUser from GlobalContext
  const [isAdmin, setIsAdmin] = useState(false); // State for admin login

  return (
    <BrowserRouter>
      <MainApp setIsAdmin={setIsAdmin} setUser={setUser} isAdmin={isAdmin} />
    </BrowserRouter>
  );
}

// Separate component to use useLocation properly inside BrowserRouter
const MainApp = ({ setIsAdmin, setUser, isAdmin }) => {
  const location = useLocation(); // useLocation now inside BrowserRouter context
  const isLoginPage = location.pathname === "/login"; // Check if current path is "/login"

  return (
    <div className="App">
      {/* Conditionally hide the navbar on the login page */}
      {!isLoginPage && <Navbar />}
      <Routes>
        {isAdmin ? (
          <Route path="/admin" element={<AdminPanel />} />
        ) : (
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} setUser={setUser} />} />
        )}
        {/* Public Routes */}
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/form" element={<FormPage />} /> {/* New form page route */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/clothing" element={<Clothing />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/shoes" element={<Shoes />} />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
