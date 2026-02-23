import { motion } from "framer-motion";
import "../styles/page-transition.scss";

export default function PageTransition({ children }) {
  return (
    <>
      <motion.div
        className="transition-layer"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transformOrigin="top"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <motion.main
        className="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </>
  );
}