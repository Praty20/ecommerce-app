export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload, // Set the user in state
      };

    case "ADD_ITEM_IN_CART":
      // Check if the item is already in the cart
      const existingCartItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      // If the item is already in the cart, update its quantity
      if (existingCartItemIndex > -1) {
        const updatedCart = state.cart.map((cartItem, index) => {
          if (index === existingCartItemIndex) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + action.payload.quantity, // Increase quantity
            };
          }
          return cartItem;
        });

        return {
          ...state,
          cart: updatedCart,
        };
      }

      // If the item is not in the cart, add it with the specified quantity
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity }],
      };

    case "REMOVE_ITEM_IN_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
case "ADD_ITEM_IN_ORDER":
  return {
    ...state,
    orders: [...state.orders, action.payload],
  };

    case "REMOVE_ITEM_IN_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload.id),
      };

    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};
