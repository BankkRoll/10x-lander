"use client";

import { motion } from "framer-motion";

export function StreamEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full aspect-video bg-black/50 rounded-lg overflow-hidden"
      style={{ maxHeight: "60vh" }}
    >
      <iframe
        src="https://player.twitch.tv/?channel=pmfordie&parent=localhost"
        height="100%"
        width="100%"
        allowFullScreen
      />
    </motion.div>
  );
}
