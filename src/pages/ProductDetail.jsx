import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/product-detail.scss";
import { useCart } from "../conexts/CartContext";
const products = [
  {
    id: "1",
    name: "Casque Bluetooth Sony WH-1000XM5",
    price: 129000,
    image: "https://images.unsplash.com/photo-1585386959984-a4155222c1b2",
    description:
      "Casque à réduction de bruit active avec autonomie longue durée et son haute fidélité."
  },
  {
    id: "2",
    name: "Montre Connectée Samsung Galaxy Watch",
    price: 98000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description:
      "Montre connectée élégante avec suivi santé, sport et notifications intelligentes."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) return <p style={{ padding: "2rem" }}>Produit introuvable</p>;

  return (
    <motion.section
      className="product-detail"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Image */}
      <motion.div className="image" variants={item}>
        <img src={product.image} alt={product.name} />
      </motion.div>

      {/* Infos */}
      <motion.div className="content" variants={item}>
        <motion.h1 variants={item}>{product.name}</motion.h1>

        <motion.p className="price" variants={item}>
          {product.price.toLocaleString()} Ar
        </motion.p>

        <motion.p className="description" variants={item}>
          {product.description}
        </motion.p>

        <motion.button
          className="add-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
        >
          Ajouter au panier
        </motion.button>
      </motion.div>
    </motion.section>
  );
}