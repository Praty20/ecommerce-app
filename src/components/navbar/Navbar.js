import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";
const Navbar = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <div className="navbar">
      <Link to="/">
        <h2>shoppinn</h2>
      </Link>
      <ul className="navbar-ul">
        <li><Link to="/women">Womens</Link></li>
        <li><Link to="/men">Mens</Link></li>
        <li><Link to="/clothing">Clothing</Link></li>
        <li><Link to="/shoes">Shoes</Link></li>
        <li>
          <Link to="/cart">
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </Link>
        </li>
        <li><Link to="/orders">Orders</Link></li>
        <li><button className="nav-btn"><FontAwesomeIcon icon={faUser} />&nbsp; John</button></li>
      </ul>
    </div>
  );
};

export default Navbar;
