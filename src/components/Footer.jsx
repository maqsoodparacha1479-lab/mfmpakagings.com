import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-top">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>MFM Packaging</h3>
          <p>
            Distribution partner for stretch film and packaging essentials with
            reliable local delivery.
          </p>
        </motion.div>
        <div className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <h4>Capabilities</h4>
            <ul>
              <li>Stretch Film Distribution</li>
              <li>Bulk + Contract Pricing</li>
              <li>Same-Day Dispatch</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h4>Standards</h4>
            <ul>
              <li>Warehouse Ready SKUs</li>
              <li>GTA + Niagara Peninsula</li>
              <li>Reliable Inventory</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h4>Contact</h4>
            <ul>
              <li>647-767-9687</li>
              <li>mfahadmanzoor60@gmail.com</li>
              <li>GTA + Niagara Peninsula</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MFM Packaging. All rights reserved.</span>
        <span>Distribution coverage across GTA + Niagara Peninsula.</span>
      </div>
    </footer>
  );
}
