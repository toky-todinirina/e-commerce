import  {motion}  from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/productCard.scss";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <img src={product.image} alt={product.name} />

      <div className="info">
        <h3>{product.name}</h3>
        <p className="price">{product.price.toLocaleString()} Ar</p>

        <Link to={`/products/${product.id}`} className="btn">
          Voir le produit
        </Link>
      </div>
    </motion.div>
  );
}