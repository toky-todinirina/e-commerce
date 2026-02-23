import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../conexts/CartContext";
import "../styles/navbar.scss";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return (
    <nav className="navbar">
      <Link to="/" className="logo">MoraBuy</Link>
      <div className="links">
        <Link to="/products">Produits</Link>

        <Link to="/cart" className="cart-link">
          Panier

          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                className="cart-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        <Link to="/login">Connexion</Link>
      </div>
    </nav>
  );
}