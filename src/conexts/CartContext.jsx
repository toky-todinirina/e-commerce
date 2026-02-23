import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QTY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "SET_CART":
      return action.payload;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // ✅ Initialisation depuis localStorage
  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    () => {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    }
  );

  // ✅ Sauvegarde automatique
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QTY", payload: { id, quantity } });

  const clearCart = () =>
    dispatch({ type: "SET_CART", payload: [] });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);