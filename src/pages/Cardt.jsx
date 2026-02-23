import { Link } from "react-router-dom";
import { useCart } from "../conexts/CartContext";
import { motion } from "framer-motion";
import "../styles/cart.scss";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return <p style={{ padding: "2rem" }}>Votre panier est vide</p>;
  }
  return (
    <section style={{ padding: "3rem 2rem" }}>
      <h1>Votre Panier</h1>

      {cart.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1.5rem",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "1rem"
          }}
        >
          <img src={item.image} width="80" />

          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>{item.price.toLocaleString()} Ar</p>
          </div>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value))
            }
            style={{ width: "60px" }}
          />

          <button className="cart-btn cart-btn--primary" onClick={() => removeFromCart(item.id)}>
            Supprimer
          </button>
          <Link to="/checkout">
            <button className="cart-btn cart-btn--success">
                Passer à la caisse
            </button>
          </Link>
        </motion.div>
      ))}

      <h2 style={{ marginTop: "2rem" }}>
        Total : {total.toLocaleString()} Ar
      </h2>
    </section>
  );
}