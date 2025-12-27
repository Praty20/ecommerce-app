import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Checkout.css";

const Checkout = () => {
  const { cart, addItemToOrderList, clearCart } = useContext(GlobalContext);
  const { discount, extraFees, tax } = { discount: 15, extraFees: 300, tax: 50 };

  const subTotal = Math.floor(
    cart?.reduce((sum, curr) => sum + curr.price * curr.quantity, 0)
  );

  const total = Math.floor(
    subTotal + extraFees + tax - (subTotal + extraFees + tax) * (discount / 100)
  );

  const [isOrdered, setIsOrdered] = useState(false);

  const handlePay = () => {
    const orderDetails = {
      orderId: Date.now(),
      buyerId: 1,
      items: [...cart],
      price: total,
      address: "7 Rusk Court",
      deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      isDelivered: false,
    };

    // Save the order to global state and localStorage
    addItemToOrderList(orderDetails);

    // Get current orders from localStorage or initialize to an empty array
    const currentOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add the new order
    const updatedOrders = [...currentOrders, orderDetails];

    // Update localStorage
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // Clear the cart after payment
    clearCart();

    setIsOrdered(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="checkout-container">
      {isOrdered ? (
        <h3>
          Yay! 🚀 Order placed successfully. <Link to="/">Shop more!</Link>
        </h3>
      ) : (
        <>
          <div id="order-review">
            <div className="custom-row">
              <h4>Order Review</h4>
              <span>{cart?.length} items in cart</span>
            </div>
            <div className="custom-row">
              <h4>Checkout Summary</h4>
              <div className="checkout-summary">
                <span>Subtotal</span>
                <span>₹{subTotal}</span>
              </div>
              <div className="checkout-summary">
                <span>Discount</span>
                <span>{discount}%</span>
              </div>
              <div className="checkout-summary">
                <span>Delivery Fee</span>
                <span>₹{extraFees}</span>
              </div>
              <div className="checkout-summary">
                <span>GST</span>
                <span>₹{tax}</span>
              </div>
            </div>
            <div className="custom-row">
              <h4>Total</h4>
              <span>₹{total}</span>
            </div>
          </div>

          <button className="item-btn" onClick={handlePay}>
            Pay ₹{total}
          </button>

          <button className="item-btn" onClick={handlePrint} style={{ marginLeft: "10px" }}>
            Print Invoice
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
