import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../conexts/CartContext";
import "../styles/product.scss";

const products = [
  {
    id: "1",
    name: "Apple iPhone 14",
    price: 999000,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661027785000"
  },
  {
    id: "2",
    name: "Samsung Galaxy S23",
    price: 899000,
    image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-s911-sm-s911ezgdmea-534255170?$650_519_PNG$"
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    price: 399000,
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
  },
  {
    id: "4",
    name: "MacBook Air M2",
    price: 1199000,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-m2-spacegray-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207"
  },
  {
    id: "5",
    name: "Nintendo Switch OLED",
    price: 349000,
    image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_fill,w_400/ncom/en_US/switch/oled-model/system"
  },
  {
    id: "6",
    name: "GoPro HERO11",
    price: 499000,
    image: "https://gopro.com/content/dam/gopro/GoPro-HERO11-Black/gallery/Gallery-1.png"
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

export default function Products() {
  const { addToCart } = useCart();

  return (
    <motion.section
      className="products"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <motion.div className="product-card" key={product.id} variants={item}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p className="price">{product.price.toLocaleString()} Ar</p>
          <button className="add-btn" onClick={() => addToCart(product)}>
            Ajouter au panier
          </button>
        </motion.div>
      ))}
    </motion.section>
  );
}