import React from "react";
import { motion } from "framer-motion";
import { productList, productFeatures, processSteps } from "../data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <motion.div
      className="page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
    >
      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-media" aria-hidden="true">
          <div className="hero-media-overlay" />
          <div className="hero-media-glow" />
          <div className="hero-media-stripes" />
        </div>
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            variants={fadeUp}
            custom={1}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="eyebrow">Packaging Distribution</span>
            <h1>
              Reliable packaging supply for warehouses, shippers, and distributors.
            </h1>
            <p>
              MFM Packaging distributes stretch film and warehouse essentials with
              stable inventory, bulk pricing, and fast local delivery.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#products">
                Browse Products
              </a>
              <a
                className="button button-ghost"
                href="https://grok.com/imagine/post/5b661c55-7a8a-4148-afc9-ab8794e6886e?source=post-page&platform=web"
                target="_blank"
                rel="noreferrer"
              >
                View Concept
              </a>
              <a className="button button-ghost" href="#process">
                How We Deliver
              </a>
            </div>
          </motion.div>
          <motion.div
            className="hero-panel"
            variants={fadeUp}
            custom={2}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="hero-photo" whileHover={{ y: -6 }}>
              <img
                src="/products/stretch-wrap-1.png"
                alt="MFM stretch film rolls and packaging"
                loading="lazy"
              />
            </motion.div>
            <motion.div className="hero-panel-card subtle" whileHover={{ y: -6 }}>
              <h4>Why MFM</h4>
              <ul>
                {productFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="products">
        <motion.div
          className="section-title"
          variants={fadeUp}
          custom={1}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">Product Lines</span>
          <h2>Stocked and ready for daily warehouse demand.</h2>
        </motion.div>

        <div className="card-grid">
          {productList.map((product, index) => (
            <motion.article
              key={product.name}
              className="product-card"
              variants={fadeUp}
              custom={index + 2}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="card-top">
                <h3>{product.name}</h3>
                <span>{product.rating}</span>
              </div>
              <div className="card-body">
                <div>
                  <p>Size Range</p>
                  <strong>{product.size}</strong>
                </div>
                <div>
                  <p>Material</p>
                  <strong>{product.material}</strong>
                </div>
                <div>
                  <p>Best For</p>
                  <strong>{product.use}</strong>
                </div>
              </div>
              <button className="card-action" type="button">
                Request Pricing
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section process" id="process">
        <motion.div
          className="section-title"
          variants={fadeUp}
          custom={1}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">Process</span>
          <h2>From order to dock, every step is confirmed.</h2>
        </motion.div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <motion.div
              className="process-card"
              key={step.title}
              variants={fadeUp}
              custom={index + 2}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <span className="process-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section callout">
        <motion.div
          className="callout-card"
          variants={fadeUp}
          custom={2}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -6 }}
        >
          <div>
            <span className="eyebrow">Distribution Support</span>
            <h2>Need recurring supply or custom volumes?</h2>
            <p>
              Share your SKUs, volumes, and delivery windows. Our team responds within
              48 hours.
            </p>
          </div>
          <a className="button button-primary" href="/contact">
            Talk to Sales
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}
