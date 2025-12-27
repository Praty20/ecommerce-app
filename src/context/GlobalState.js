import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  cart: [],
  orders: [],
  currentUser: null, // Add current user to manage authentication
};

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Global Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Function to set user
  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  // Add item to cart list
  const addItemToCartList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_CART",
      payload: item,
    });
  };

  // Remove item from cart list (single item)
  const removeItemFromCartList = (id) => {
    dispatch({
      type: "REMOVE_ITEM_IN_CART",
      payload: id, // Pass only the item id
    });
  };

  // Clear the entire cart
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  // Add item to order list
  const addItemToOrderList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_ORDER",
      payload: item,
    });
  };

  // Remove item from order list
  const removeItemFromOrderList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_FROM_ORDER",
      payload: item,
    });
  };


  
  // **Authentication Actions** //

  // Login function
  const login = (user) => {
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };

  // Logout function
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        orders: state.orders,
        currentUser: state.currentUser,
        setUser,
        addItemToCartList,
        removeItemFromCartList, // Add remove item from cart
        clearCart, // Add clear cart functionality
        addItemToOrderList,
        removeItemFromOrderList,
        login,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
