import { useCart } from "../conexts/CartContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.scss";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/success");
  };

  if (cart.length === 0) {
    return <p className="checkout__empty">Panier vide</p>;
  }
  return (
    <motion.section
      className="checkout"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="checkout__title">Validation de commande</h1>

      <div className="checkout__grid">

        {/* FORM */}
        <form className="checkout__form" onSubmit={handleSubmit}>
          <h3>Informations de livraison</h3>

          <input placeholder="Nom complet" required />
          <input placeholder="Téléphone" required />
          <input placeholder="Adresse de livraison" required />
          <input placeholder="Ville" />

          <button className="cart-btn cart-btn--primary">
            Confirmer la commande
          </button>
        </form>

        {/* SUMMARY */}
        <div className="checkout__summary">
          <h3>Récapitulatif</h3>

          {cart.map(item => (
            <div key={item.id} className="checkout__line">
              <span>{item.name} × {item.quantity}</span>
              <span>{(item.price * item.quantity).toLocaleString()} Ar</span>
            </div>
          ))}

          <hr />
          <h4>Total : {total.toLocaleString()} Ar</h4>
        </div>

      </div>
    </motion.section>
  );
}