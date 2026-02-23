import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <motion.section
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      style={{ padding: "4rem 2rem", textAlign: "center" }}
    >
      <h1>✅ Commande confirmée</h1>
      <p style={{ marginTop: "1rem", opacity: 0.7 }}>
        Merci pour votre achat. Vous serez contacté pour la livraison.
      </p>

      <Link to="/products" style={{ display: "inline-block", marginTop: "2rem", color: "#2563eb" }}>
        Continuer vos achats
      </Link>
    </motion.section>
  );
}