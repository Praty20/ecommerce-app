import React, { useEffect, useState } from "react";
import "./AdminPanel.css";
const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [editOrderId, setEditOrderId] = useState(null);
  const [updatedDeliveryDate, setUpdatedDeliveryDate] = useState("");

  // Fetch orders from localStorage when the admin panel loads
  useEffect(() => {
    const fetchOrders = () => {
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      setOrders(storedOrders);
    };

    fetchOrders(); // Fetch initial orders

    // Poll for new orders every 5 seconds
    const interval = setInterval(fetchOrders, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Delete an order
  const handleDelete = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // Update an order's delivery date
  const handleUpdate = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.orderId === orderId
        ? { ...order, deliveryDate: updatedDeliveryDate }
        : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setEditOrderId(null); // Exit edit mode
    setUpdatedDeliveryDate(""); // Clear input field
  };

  return (
    <div class="table-box">
      <h2 style={{ background: "orangered", textAlign: "center", color: "white" }}>Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Order ID</th>
            <th>Item</th>
            <th>Total Price</th>
            <th>Delivery Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.orderId}>
              <td>{index + 1}</td> {/* Serial number */}
              <td>{order.orderId}</td>
              <td>{order.items.map((item) => item.name).join(", ")}</td>
              <td>₹{order.price}</td>
              <td>
                {editOrderId === order.orderId ? (
                  <input
                    type="date"
                    value={updatedDeliveryDate}
                    onChange={(e) => setUpdatedDeliveryDate(e.target.value)}
                  />
                ) : (
                  order.deliveryDate
                )}
              </td>
              <td>
                {editOrderId === order.orderId ? (
                  <>
                    <button  class="bott" style={{ background: "red" }}  onClick={() => handleUpdate(order.orderId)}>Save</button>
                    &nbsp;&nbsp;
                    <button  class="bott" onClick={() => setEditOrderId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button class="bott" style={{ background: "orangered" }} onClick={() => setEditOrderId(order.orderId)}>Update</button>
                    &nbsp;&nbsp;
                    <button class="bott" onClick={() => handleDelete(order.orderId)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
