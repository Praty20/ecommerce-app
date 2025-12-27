import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(GlobalContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNext = () => {
    navigate("/form"); // Navigate to the form page
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {!cart.length ? (
        <p>No Item Added! Please add something to your cart</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} className="product-image" />
                </div>
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">₹{item.price}</div>
                  <div className="item-expectedDelivery">
                    (Expected Delivery 3 - 6 days)
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="item-btn" onClick={handleNext}>
            Next
          </button> {/* Button to go to the form */}
        </>
      )}
    </div>
  );
}

export default Cart;
