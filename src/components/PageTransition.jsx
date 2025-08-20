// components/PageTransition.jsx
import { motion } from "framer-motion";

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full min-h-screen"
      style={{ background: "inherit" }} // inherit background to avoid white flash
    >
      {children}
    </motion.div>
  );
};
