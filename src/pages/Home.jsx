import { motion } from "framer-motion";

export default function Home() {
  return (
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achetez malin avec MoraBuy
      </motion.h1>
      <p style={{ marginTop: "1rem", opacity: 0.7 }}>
        Une expérience e-commerce à la malgache
      </p>
    </section>
  );
}