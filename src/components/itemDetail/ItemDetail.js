import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ItemDetail.css";
import items from "../../mockData/items.json";
import { GlobalContext } from "../../context/GlobalState";

// Function to get item details based on ID
const getItemDetail = (id) => items.filter((item) => item.id === id)[0];

function ItemDetail() {
  const params = useParams();
  const navigate = useNavigate();  
  const itemId = parseInt(params?.id);
  const item = !!itemId && getItemDetail(itemId);
  const { addItemToCartList, cart } = useContext(GlobalContext);
  
  // State for managing quantity
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(cart.some((c) => c.id === itemId));

  // Function to handle quantity change
  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity(quantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-detail-container">
      {/* Use navigate to go back to the previous page */}
      <span 
        onClick={() => navigate(-1)} 
        style={{ cursor: 'pointer', color: 'black', textDecoration: 'none', fontSize:'25px' }}
      >
        &#8592; Back
      </span>
      <div className="item-detail">
        <div className="item-detail-image">
          <img src={item.image} alt={"Item image"} />
        </div>
        <div className="item-detail-info">
          <div className="item-brand" style={{ margin: "0px 10px" }}>
            {item.brand}
          </div>
          <div className="item-name">{item.name}</div>
          <div className="item-price">₹{item.price}</div>

          {/* Quantity selection */}
          <div className="item-quantity">
            <button
              onClick={() => handleQuantityChange("decrement")}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "10px",
                fontSize: "26px",
                border:"2px solid black",
                borderRadius:"50px"
              }}
            >
              -
            </button>
            <span style={{ margin: "10px 15px", fontSize:"18px" }}>{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              style={{
                width: "50px",
                height: "50px",
                fontSize: "26px",
                border:"2px solid black",
                borderRadius:"50px"
              }}
            >
              +
            </button>
          </div>

          {/* Size Selector */}
          <select className="item-size">
            <option value={"S"}> Select size (S)</option>
            <option value={"M"}> Select size (M)</option>
            <option value={"L"}> Select size (L)</option>
            <option value={"XL"}> Select size (XL)</option>
          </select>

          <button
            className="item-btn"
            disabled={isAdded}
            onClick={() => {
              addItemToCartList({ ...item, quantity }); // Pass the quantity to the cart
              setIsAdded(true);
            }}
          >
            {isAdded ? <Link to="/cart">Go to Cart</Link> : "Add To cart"}
          </button>

          <p className="item-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
 