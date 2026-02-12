import React from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const milestones = [
  {
    year: "1998",
    title: "Distribution Launch",
    text: "Opened our first warehouse to serve regional packaging supply needs.",
  },
  {
    year: "2008",
    title: "Fleet Expansion",
    text: "Built a local delivery fleet for same-day and next-day service.",
  },
  {
    year: "2018",
    title: "Inventory Growth",
    text: "Added high-turn SKUs to support multi-site warehouse networks.",
  },
  {
    year: "2025",
    title: "Service Optimization",
    text: "Improved pick-pack accuracy and order visibility across all routes.",
  },
];

export default function About() {
  return (
    <motion.div
      className="page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
    >
      <section className="section">
        <motion.div
          className="section-title"
          variants={fade}
          custom={1}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">About MFM</span>
          <h1>Distribution reliability built for daily warehouse demand.</h1>
          <p>
            MFM Packaging is a distribution partner for warehouses, shippers, and
            regional operators. We keep essential packaging SKUs in stock and deliver
            quickly with predictable service windows.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-panel"
            variants={fade}
            custom={2}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <h3>Facilities</h3>
            <p>
              Multi-bay warehousing with daily cycle counts and designated staging
              zones for fast dispatch.
            </p>
            <div className="about-stat">
              <span>20k+</span>
              <span>Rolls Stocked</span>
            </div>
            <div className="about-stat">
              <span>98%</span>
              <span>Order Accuracy</span>
            </div>
          </motion.div>
          <motion.div
            className="about-panel"
            variants={fade}
            custom={3}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <h3>People + Culture</h3>
            <p>
              We invest in warehouse training, safety, and service quality. Every
              order is verified and tracked through dispatch.
            </p>
            <ul className="about-list">
              <li>Same-day local dispatch</li>
              <li>Bulk and contract pricing</li>
              <li>Dedicated account support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section timeline">
        <motion.div
          className="section-title"
          variants={fade}
          custom={1}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">Milestones</span>
          <h2>Decades of dependable packaging distribution.</h2>
        </motion.div>
        <div className="timeline-grid">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              className="timeline-card"
              variants={fade}
              custom={index + 2}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
