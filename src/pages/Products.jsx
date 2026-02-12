import React from "react";
import { motion } from "framer-motion";
import { pricingTiers, productList, productFeatures } from "../data/products";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Products({ cartItems = [], onAdd, onRemove, onClear }) {
  const heroImage = productList[0]?.image;
  const heroAlt = productList[0]?.imageAlt || "Stretch wrap product";
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <motion.div
      className="page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
    >
      <section className="section">
        <div className="product-hero">
          <motion.div className="product-hero-text" variants={fade} custom={1}>
            <span className="eyebrow">Products</span>
            <h1>Stretch film supply tailored for distribution teams.</h1>
            <p>
              We stock the most-requested film types so your operation stays moving
              with consistent quality and predictable lead times.
            </p>
            <a className="button button-primary" href="/contact#contact-card">
              Request Pricing
            </a>
          </motion.div>
          {heroImage && (
            <motion.div
              className="product-hero-media"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <img src={heroImage} alt={heroAlt} loading="eager" />
            </motion.div>
          )}
        </div>

        <div className="product-layout full">
          <motion.div className="product-scroll" variants={gridVariants}>
            <div className="cart-summary">
              <div>
                <span className="eyebrow">Cart</span>
                <h3>{cartCount} item{cartCount === 1 ? "" : "s"} selected</h3>
                <p>
                  Review your selection and proceed to checkout to send the
                  order details.
                </p>
              </div>
              <div className="cart-actions">
                <a className="button button-primary" href="/checkout">
                  Go to Checkout
                </a>
                {cartCount > 0 && (
                  <button className="button button-ghost" type="button" onClick={onClear}>
                    Clear Cart
                  </button>
                )}
              </div>
            </div>
            {productList.map((product, index) => (
              <motion.section
                key={product.name}
                className="product-split"
                variants={cardVariants}
              >
                <div className="product-name">
                  <span className="eyebrow">Product 0{index + 1}</span>
                  <h3>{product.name}</h3>
                </div>

                <div className="product-divider" aria-hidden="true">
                  <span className="product-divider-dot" />
                </div>

                <div className="product-detail">
                  {product.image && (
                    <motion.div
                      className="product-detail-media"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                      <img src={product.image} alt={product.imageAlt} loading="lazy" />
                    </motion.div>
                  )}
                  <div className="product-detail-header">
                    <h4>Product Details</h4>
                    <span>Built for repeatable warehouse performance.</span>
                  </div>
                  <ul className="product-detail-list">
                    <li>
                      <span>Size Range</span>
                      <strong>{product.size}</strong>
                    </li>
                    <li>
                      <span>Material</span>
                      <strong>{product.material}</strong>
                    </li>
                    <li>
                      <span>Best For</span>
                      <strong>{product.use}</strong>
                    </li>
                  </ul>
                  <div className="product-detail-note">
                    <p>
                      Optimized for daily distribution cycles with dependable cling
                      and consistent film performance.
                    </p>
                  </div>
                  <div className="product-detail-actions">
                    <button
                      className="button button-primary"
                      type="button"
                      onClick={() =>
                        onAdd?.({
                          id: `product-${index}`,
                          name: product.name,
                          size: product.size,
                          material: product.material,
                          use: product.use,
                          image: product.image,
                          imageAlt: product.imageAlt,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                    <button
                      className="button button-ghost"
                      type="button"
                      onClick={() => onRemove?.(`product-${index}`)}
                      disabled={!cartItems.some((item) => item.id === `product-${index}`)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
