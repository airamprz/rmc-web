"use client";

import { motion } from "framer-motion";

export default function TopBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white text-black text-center text-sm font-semibold tracking-wide py-2 border-b border-black/10"
    >
      🚚 ENVÍO GRATIS EN PEDIDOS SUPERIORES A 40 €
    </motion.div>
  );
}
